-- Portal personalization and missing-module migration
-- Safe to run in the Supabase SQL Editor for an existing Aureus database.

CREATE TABLE IF NOT EXISTS case_assignments (
  case_id UUID NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'assigned',
  assigned_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (case_id, profile_id)
);

CREATE TABLE IF NOT EXISTS portal_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  recipient_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  subject TEXT,
  body TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS time_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  case_id UUID REFERENCES cases(id) ON DELETE SET NULL,
  entry_date DATE NOT NULL DEFAULT CURRENT_DATE,
  hours NUMERIC(6, 2) NOT NULL CHECK (hours > 0),
  activity_type TEXT,
  description TEXT NOT NULL,
  is_billable BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE consultation_requests
  ADD COLUMN IF NOT EXISTS preferred_lawyer_id UUID REFERENCES team_members(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_portal_messages_recipient ON portal_messages(recipient_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_portal_messages_sender ON portal_messages(sender_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_time_entries_profile_date ON time_entries(profile_id, entry_date DESC);
CREATE INDEX IF NOT EXISTS idx_case_assignments_profile ON case_assignments(profile_id);

ALTER TABLE case_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE time_entries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their case assignments" ON case_assignments;
CREATE POLICY "Users can view their case assignments" ON case_assignments FOR SELECT TO authenticated
USING (
  profile_id = auth.uid()
  OR EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role IN ('super_admin', 'admin', 'partner')
  )
);

DROP POLICY IF EXISTS "Creators can view their cases" ON cases;
CREATE POLICY "Creators can view their cases" ON cases FOR SELECT TO authenticated
USING (created_by = auth.uid());

DROP POLICY IF EXISTS "Creators can update their cases" ON cases;
CREATE POLICY "Creators can update their cases" ON cases FOR UPDATE TO authenticated
USING (created_by = auth.uid()) WITH CHECK (created_by = auth.uid());

DROP POLICY IF EXISTS "Public can request consultations" ON consultation_requests;
CREATE POLICY "Public can request consultations" ON consultation_requests FOR INSERT TO anon, authenticated
WITH CHECK (status = 'new' AND assigned_to IS NULL);

DROP POLICY IF EXISTS "Lawyers can view requested consultations" ON consultation_requests;
CREATE POLICY "Lawyers can view requested consultations" ON consultation_requests FOR SELECT TO authenticated
USING (
  assigned_to = auth.uid()
  OR EXISTS (
    SELECT 1 FROM team_members
    WHERE team_members.id = consultation_requests.preferred_lawyer_id
      AND team_members.profile_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "Authenticated users can view active colleagues" ON profiles;
CREATE POLICY "Authenticated users can view active colleagues" ON profiles FOR SELECT TO authenticated
USING (is_active = true);

DROP POLICY IF EXISTS "Users can view their messages" ON portal_messages;
CREATE POLICY "Users can view their messages" ON portal_messages FOR SELECT TO authenticated
USING (sender_id = auth.uid() OR recipient_id = auth.uid());

DROP POLICY IF EXISTS "Users can send messages" ON portal_messages;
CREATE POLICY "Users can send messages" ON portal_messages FOR INSERT TO authenticated
WITH CHECK (sender_id = auth.uid());

DROP POLICY IF EXISTS "Recipients can update messages" ON portal_messages;
CREATE POLICY "Recipients can update messages" ON portal_messages FOR UPDATE TO authenticated
USING (recipient_id = auth.uid()) WITH CHECK (recipient_id = auth.uid());

DROP POLICY IF EXISTS "Users can view their time entries" ON time_entries;
CREATE POLICY "Users can view their time entries" ON time_entries FOR SELECT TO authenticated
USING (profile_id = auth.uid());

DROP POLICY IF EXISTS "Users can create their time entries" ON time_entries;
CREATE POLICY "Users can create their time entries" ON time_entries FOR INSERT TO authenticated
WITH CHECK (profile_id = auth.uid());

DROP POLICY IF EXISTS "Users can update their time entries" ON time_entries;
CREATE POLICY "Users can update their time entries" ON time_entries FOR UPDATE TO authenticated
USING (profile_id = auth.uid()) WITH CHECK (profile_id = auth.uid());

DROP POLICY IF EXISTS "Users can delete their time entries" ON time_entries;
CREATE POLICY "Users can delete their time entries" ON time_entries FOR DELETE TO authenticated
USING (profile_id = auth.uid());

DROP POLICY IF EXISTS "Authenticated users can view active clients" ON clients;
DROP POLICY IF EXISTS "Legal team can view permitted clients" ON clients;
CREATE POLICY "Legal team can view permitted clients" ON clients FOR SELECT TO authenticated
USING (
  is_active = true
  AND (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('super_admin', 'admin', 'partner'))
    OR EXISTS (
      SELECT 1 FROM cases
      JOIN case_assignments ON case_assignments.case_id = cases.id
      WHERE cases.client_id = clients.id AND case_assignments.profile_id = auth.uid()
    )
  )
);

DROP POLICY IF EXISTS "Legal team can create cases" ON cases;
CREATE POLICY "Legal team can create cases" ON cases FOR INSERT TO authenticated
WITH CHECK (
  created_by = auth.uid()
  AND EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role IN ('super_admin', 'admin', 'partner', 'lawyer')
  )
);

DROP POLICY IF EXISTS "Legal team can assign themselves to cases" ON case_assignments;
CREATE POLICY "Legal team can assign themselves to cases" ON case_assignments FOR INSERT TO authenticated
WITH CHECK (
  profile_id = auth.uid()
  AND EXISTS (SELECT 1 FROM cases WHERE id = case_id AND created_by = auth.uid())
);

DROP POLICY IF EXISTS "Legal team can view permitted case documents" ON case_documents;
CREATE POLICY "Legal team can view permitted case documents" ON case_documents FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM cases
    WHERE cases.id = case_documents.case_id
    AND (
      EXISTS (
        SELECT 1 FROM case_assignments
        WHERE case_assignments.case_id = cases.id AND case_assignments.profile_id = auth.uid()
      )
      OR EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid() AND profiles.role IN ('super_admin', 'admin', 'partner')
      )
    )
  )
);
