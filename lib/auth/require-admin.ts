import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { requireUser } from '@/lib/auth/require-user'

export async function requireAdmin() {
  const user = await requireUser()
  const supabase = await createClient()

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()

  if (error || profile?.role !== 'admin') {
    redirect('/portal')
  }

  return user
}
