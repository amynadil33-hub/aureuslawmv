import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function AuthenticatedPortalTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/portal/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('is_active')
    .eq('id', user.id)
    .maybeSingle()

  if (profile?.is_active === false) {
    await supabase.auth.signOut()
    redirect('/portal/login?error=Account%20disabled')
  }

  return children
}
