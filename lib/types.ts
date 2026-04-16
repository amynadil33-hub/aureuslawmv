// Aureus Law - TypeScript Types

// Enums
export type UserRole = 'super_admin' | 'admin' | 'editor' | 'partner' | 'lawyer' | 'paralegal' | 'staff'
export type CaseStatus = 'active' | 'pending' | 'closed' | 'archived'
export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'
export type ConsultationStatus = 'new' | 'reviewed' | 'scheduled' | 'completed' | 'declined'
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent'
export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled'
export type ArticleStatus = 'draft' | 'published' | 'archived'
export type ClientType = 'individual' | 'business' | 'institution'

// Base interface for timestamps
export interface Timestamps {
  created_at: string
  updated_at?: string
}

// Profile
export interface Profile extends Timestamps {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  role: UserRole
  phone: string | null
  is_active: boolean
}

// Team Member
export interface TeamMember extends Timestamps {
  id: string
  profile_id: string | null
  full_name: string
  slug: string
  role_title: string
  email: string | null
  phone: string | null
  bio: string | null
  education: string[] | null
  admissions: string[] | null
  languages: string[] | null
  years_experience: number | null
  photo_url: string | null
  is_partner: boolean
  is_featured: boolean
  is_visible: boolean
  sort_order: number
  linkedin_url: string | null
  practice_areas?: PracticeArea[]
  sectors?: Sector[]
}

// Practice Area
export interface PracticeArea extends Timestamps {
  id: string
  name: string
  slug: string
  short_description: string | null
  full_description: string | null
  icon_name: string | null
  cover_image_url: string | null
  common_needs: string[] | null
  related_services: string[] | null
  process_steps: Record<string, unknown> | null
  meta_title: string | null
  meta_description: string | null
  is_featured: boolean
  is_visible: boolean
  sort_order: number
  team_members?: TeamMember[]
}

// Sector
export interface Sector extends Timestamps {
  id: string
  name: string
  slug: string
  short_description: string | null
  full_description: string | null
  icon_name: string | null
  cover_image_url: string | null
  meta_title: string | null
  meta_description: string | null
  is_featured: boolean
  is_visible: boolean
  sort_order: number
}

// Article Category
export interface ArticleCategory {
  id: string
  name: string
  slug: string
  description: string | null
  sort_order: number
  created_at: string
}

// Article
export interface Article extends Timestamps {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  cover_image_url: string | null
  category_id: string | null
  author_id: string | null
  status: ArticleStatus
  is_featured: boolean
  read_time_minutes: number | null
  tags: string[] | null
  attachment_url: string | null
  meta_title: string | null
  meta_description: string | null
  published_at: string | null
  category?: ArticleCategory
  author?: TeamMember
}

// Client
export interface Client extends Timestamps {
  id: string
  name: string
  client_type: ClientType
  email: string | null
  phone: string | null
  address: string | null
  company_name: string | null
  contact_person: string | null
  notes: string | null
  is_active: boolean
  created_by: string | null
}

// Case
export interface Case extends Timestamps {
  id: string
  case_number: string
  title: string
  description: string | null
  client_id: string | null
  practice_area_id: string | null
  status: CaseStatus
  priority: TaskPriority
  court_name: string | null
  court_case_number: string | null
  next_hearing_date: string | null
  deadline: string | null
  notes: string | null
  created_by: string | null
  client?: Client
  practice_area?: PracticeArea
  assignments?: CaseAssignment[]
  updates?: CaseUpdate[]
  documents?: CaseDocument[]
}

// Case Assignment
export interface CaseAssignment {
  case_id: string
  profile_id: string
  role: string
  assigned_at: string
  profile?: Profile
}

// Case Update
export interface CaseUpdate {
  id: string
  case_id: string
  content: string
  is_internal: boolean
  created_by: string | null
  created_at: string
  profile?: Profile
}

// Case Document
export interface CaseDocument {
  id: string
  case_id: string
  name: string
  file_url: string
  file_type: string | null
  file_size: number | null
  category: string | null
  uploaded_by: string | null
  created_at: string
  profile?: Profile
}

// Consultation Request
export interface ConsultationRequest extends Timestamps {
  id: string
  full_name: string
  email: string
  phone: string | null
  client_type: ClientType
  company_name: string | null
  practice_area_id: string | null
  preferred_date: string | null
  preferred_time: string | null
  message: string | null
  status: ConsultationStatus
  internal_notes: string | null
  assigned_to: string | null
  practice_area?: PracticeArea
  assigned_profile?: Profile
}

// Appointment
export interface Appointment extends Timestamps {
  id: string
  title: string
  description: string | null
  client_id: string | null
  case_id: string | null
  consultation_request_id: string | null
  assigned_to: string | null
  location: string | null
  start_time: string
  end_time: string
  status: AppointmentStatus
  notes: string | null
  created_by: string | null
  client?: Client
  case?: Case
  assigned_profile?: Profile
}

// Task
export interface Task extends Timestamps {
  id: string
  title: string
  description: string | null
  case_id: string | null
  assigned_to: string | null
  assigned_by: string | null
  priority: TaskPriority
  status: TaskStatus
  due_date: string | null
  completed_at: string | null
  case?: Case
  assigned_to_profile?: Profile
  assigned_by_profile?: Profile
}

// Contact Inquiry
export interface ContactInquiry {
  id: string
  full_name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  is_read: boolean
  is_archived: boolean
  created_at: string
}

// Testimonial
export interface Testimonial {
  id: string
  client_name: string
  client_title: string | null
  company_name: string | null
  content: string
  rating: number | null
  practice_area_id: string | null
  is_featured: boolean
  is_visible: boolean
  sort_order: number
  created_at: string
}

// Notification
export interface Notification {
  id: string
  profile_id: string
  title: string
  message: string | null
  type: string
  link: string | null
  is_read: boolean
  created_at: string
}

// FAQ
export interface FAQ extends Timestamps {
  id: string
  question: string
  answer: string
  category: string | null
  practice_area_id: string | null
  sort_order: number
  is_visible: boolean
}

// Site Settings
export interface SiteSetting {
  id: string
  key: string
  value: Record<string, unknown>
  updated_at: string
}

// Contact Info Setting
export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
}

// Hero Content Setting
export interface HeroContent {
  headline: string
  subheadline: string
  cta_text: string
  cta_link: string
}
