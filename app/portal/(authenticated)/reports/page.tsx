import { BarChart3, Briefcase, CalendarClock, CheckCircle2, CircleAlert } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { createClient } from '@/lib/supabase/server'

export default async function ReportsPage() {
  const supabase = await createClient()
  const [{ data: cases }, { data: appointments }] = await Promise.all([
    supabase.from('cases').select('id, status, priority, deadline'),
    supabase.from('appointments').select('id, status, start_time'),
  ])
  const matters = cases || []
  const events = appointments || []
  const active = matters.filter((matter) => matter.status === 'active').length
  const closed = matters.filter((matter) => matter.status === 'closed').length
  const highPriority = matters.filter((matter) => matter.priority === 'high' || matter.priority === 'urgent').length
  const completion = matters.length ? Math.round((closed / matters.length) * 100) : 0
  const overdue = matters.filter((matter) => matter.deadline && new Date(matter.deadline) < new Date() && matter.status !== 'closed').length
  const metrics = [
    { label: 'Total Matters', value: matters.length, icon: Briefcase },
    { label: 'Active Matters', value: active, icon: BarChart3 },
    { label: 'High Priority', value: highPriority, icon: CircleAlert },
    { label: 'Calendar Events', value: events.length, icon: CalendarClock },
  ]

  return (
    <div className="space-y-6">
      <div><h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Reports</h1><p className="mt-1 text-muted-foreground">A live summary based on records available to your account</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{metrics.map((metric) => <Card key={metric.label}><CardContent className="p-6"><div className="w-fit rounded-lg bg-gold/10 p-2"><metric.icon className="h-5 w-5 text-gold" /></div><p className="mt-4 text-3xl font-semibold text-navy">{metric.value}</p><p className="mt-1 text-sm text-muted-foreground">{metric.label}</p></CardContent></Card>)}</div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card><CardHeader><CardTitle>Matter Completion</CardTitle></CardHeader><CardContent><div className="flex items-end justify-between"><div><p className="text-4xl font-semibold text-navy">{completion}%</p><p className="mt-1 text-sm text-muted-foreground">{closed} of {matters.length} matters closed</p></div><CheckCircle2 className="h-10 w-10 text-gold" /></div><Progress value={completion} className="mt-6" /></CardContent></Card>
        <Card><CardHeader><CardTitle>Attention Required</CardTitle></CardHeader><CardContent><p className="text-4xl font-semibold text-navy">{overdue}</p><p className="mt-1 text-sm text-muted-foreground">Open matters with a past deadline</p>{overdue === 0 && <p className="mt-6 rounded-lg bg-stone p-4 text-sm text-muted-foreground">No overdue matters are visible to your account.</p>}</CardContent></Card>
      </div>
    </div>
  )
}
