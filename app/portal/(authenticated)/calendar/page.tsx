import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'

export default async function CalendarPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('appointments')
    .select('id, title, description, location, start_time, end_time, status')
    .order('start_time')
  const appointments = data || []

  return (
    <div className="space-y-6">
      <div><h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Calendar</h1><p className="mt-1 text-muted-foreground">Your assigned appointments, hearings, and meetings</p></div>
      {appointments.length ? (
        <div className="space-y-4">
          {appointments.map((appointment) => {
            const start = new Date(appointment.start_time)
            const end = new Date(appointment.end_time)
            return (
              <Card key={appointment.id}>
                <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-stone-light"><span className="text-xs uppercase text-gold">{start.toLocaleString(undefined, { month: 'short' })}</span><span className="font-serif text-2xl">{start.getDate()}</span></div>
                  <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="font-medium text-navy">{appointment.title}</h2><Badge variant="secondary">{appointment.status}</Badge></div>{appointment.description && <p className="mt-2 text-sm text-muted-foreground">{appointment.description}</p>}<div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{start.toLocaleString()} – {end.toLocaleTimeString()}</span>{appointment.location && <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{appointment.location}</span>}</div></div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card><CardContent className="py-16 text-center"><CalendarDays className="mx-auto h-12 w-12 text-muted-foreground" /><h2 className="mt-4 font-medium text-navy">No calendar events</h2><p className="mt-1 text-sm text-muted-foreground">Appointments assigned to or created by you will appear here.</p></CardContent></Card>
      )}
    </div>
  )
}
