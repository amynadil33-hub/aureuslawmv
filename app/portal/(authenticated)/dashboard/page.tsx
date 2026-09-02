import Link from 'next/link'
import { Briefcase, Calendar, ChevronRight, Clock, FileText, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'
import { formatDate } from '@/lib/utils'

export default async function PortalDashboard() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const [profileResult, casesResult, appointmentsResult, documentsResult] = await Promise.all([
    supabase.from('profiles').select('full_name').eq('id', user!.id).maybeSingle(),
    supabase
      .from('cases')
      .select('id, case_number, title, status, priority, deadline, created_at')
      .order('created_at', { ascending: false }),
    supabase
      .from('appointments')
      .select('id, title, start_time, location, status')
      .gte('start_time', new Date().toISOString())
      .order('start_time')
      .limit(5),
    supabase.from('case_documents').select('id', { count: 'exact', head: true }),
  ])

  const cases = casesResult.data || []
  const appointments = appointmentsResult.data || []
  const activeCases = cases.filter((matter) => matter.status === 'active')
  const upcomingDeadlines = cases
    .filter((matter) => matter.deadline && new Date(matter.deadline) >= new Date())
    .sort((a, b) => new Date(a.deadline!).getTime() - new Date(b.deadline!).getTime())
    .slice(0, 5)
  const name = profileResult.data?.full_name || user?.user_metadata.full_name || user?.email || 'Team Member'
  const firstName = name.split(' ')[0]

  const stats = [
    { title: 'Active Matters', value: activeCases.length, icon: Briefcase, href: '/portal/matters' },
    { title: 'All Matters', value: cases.length, icon: FileText, href: '/portal/matters' },
    { title: 'Upcoming Events', value: appointments.length, icon: Calendar, href: '/portal/calendar' },
    { title: 'Documents', value: documentsResult.count || 0, icon: FileText, href: '/portal/documents' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Welcome, {firstName}</h1>
          <p className="mt-1 text-muted-foreground">Here is the current overview for your account.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link href="/portal/time-tracking"><Clock className="mr-2 h-4 w-4" />Log Time</Link>
          </Button>
          <Button className="bg-gold text-card hover:bg-gold-dark" asChild>
            <Link href="/portal/matters/new"><Plus className="mr-2 h-4 w-4" />New Matter</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <div className="w-fit rounded-lg bg-gold/10 p-2"><stat.icon className="h-5 w-5 text-gold" /></div>
                <p className="mt-4 text-3xl font-semibold text-navy">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div><CardTitle>Recent Matters</CardTitle><CardDescription>Matters available to your account</CardDescription></div>
            <Button variant="ghost" size="sm" asChild><Link href="/portal/matters">View All<ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
          </CardHeader>
          <CardContent>
            {cases.length ? (
              <div className="space-y-3">
                {cases.slice(0, 5).map((matter) => (
                  <div key={matter.id} className="flex items-center justify-between gap-4 rounded-lg bg-stone p-4">
                    <div className="min-w-0">
                      <p className="truncate font-medium text-navy">{matter.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{matter.case_number}</p>
                    </div>
                    <Badge variant={matter.status === 'active' ? 'default' : 'secondary'}>{matter.status}</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-10 text-center"><Briefcase className="mx-auto h-10 w-10 text-muted-foreground" /><p className="mt-3 font-medium text-navy">No matters assigned</p><p className="mt-1 text-sm text-muted-foreground">Assigned or newly created matters will appear here.</p></div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Upcoming Deadlines</CardTitle><CardDescription>Your nearest matter deadlines</CardDescription></CardHeader>
          <CardContent>
            {upcomingDeadlines.length ? (
              <div className="space-y-4">
                {upcomingDeadlines.map((matter) => (
                  <div key={matter.id} className="border-l-2 border-gold pl-3">
                    <p className="text-sm font-medium text-navy">{matter.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{formatDate(matter.deadline!)}</p>
                  </div>
                ))}
              </div>
            ) : <p className="py-8 text-center text-sm text-muted-foreground">No upcoming deadlines.</p>}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Upcoming Calendar</CardTitle><CardDescription>Appointments assigned to or created by you</CardDescription></CardHeader>
        <CardContent>
          {appointments.length ? (
            <div className="grid gap-3 md:grid-cols-2">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="rounded-lg border border-border p-4">
                  <p className="font-medium text-navy">{appointment.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{new Date(appointment.start_time).toLocaleString()}</p>
                  {appointment.location && <p className="mt-1 text-xs text-muted-foreground">{appointment.location}</p>}
                </div>
              ))}
            </div>
          ) : <p className="py-8 text-center text-sm text-muted-foreground">No upcoming appointments.</p>}
        </CardContent>
      </Card>
    </div>
  )
}
