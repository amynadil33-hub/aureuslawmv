import { Briefcase, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'

export default async function TimeTrackingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data } = await supabase
    .from('time_entries')
    .select('id, entry_date, hours, activity_type, description, is_billable, cases(case_number, title)')
    .eq('profile_id', user!.id)
    .order('entry_date', { ascending: false })
  const entries = data || []
  const total = entries.reduce((sum, entry) => sum + Number(entry.hours), 0)
  const billable = entries.filter((entry) => entry.is_billable).reduce((sum, entry) => sum + Number(entry.hours), 0)

  return (
    <div className="space-y-6">
      <div><h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Time Tracking</h1><p className="mt-1 text-muted-foreground">Time recorded by your signed-in account</p></div>
      <div className="grid gap-4 sm:grid-cols-2"><Card><CardContent className="p-6"><Clock className="h-5 w-5 text-gold" /><p className="mt-3 text-3xl font-semibold text-navy">{total.toFixed(2)}h</p><p className="text-sm text-muted-foreground">Total recorded</p></CardContent></Card><Card><CardContent className="p-6"><Briefcase className="h-5 w-5 text-gold" /><p className="mt-3 text-3xl font-semibold text-navy">{billable.toFixed(2)}h</p><p className="text-sm text-muted-foreground">Billable</p></CardContent></Card></div>
      {entries.length ? <Card><CardContent className="divide-y divide-border p-0">{entries.map((entry) => {
        const matter = Array.isArray(entry.cases) ? entry.cases[0] : entry.cases
        return <div key={entry.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center"><div className="min-w-0 flex-1"><p className="font-medium text-navy">{entry.description}</p><p className="mt-1 text-xs text-muted-foreground">{matter?.case_number || 'General'} · {new Date(entry.entry_date).toLocaleDateString()}</p></div><div className="flex items-center gap-3"><Badge variant={entry.is_billable ? 'default' : 'secondary'}>{entry.is_billable ? 'Billable' : 'Non-billable'}</Badge><span className="font-medium text-navy">{Number(entry.hours).toFixed(2)}h</span></div></div>
      })}</CardContent></Card> : <Card><CardContent className="py-16 text-center"><Clock className="mx-auto h-12 w-12 text-muted-foreground" /><h2 className="mt-4 font-medium text-navy">No time entries</h2><p className="mt-1 text-sm text-muted-foreground">Time logged by this account will appear here.</p></CardContent></Card>}
    </div>
  )
}
