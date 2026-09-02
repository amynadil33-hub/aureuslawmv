'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Briefcase, Calendar, Plus, Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createClient } from '@/lib/supabase/client'
import { formatDate } from '@/lib/utils'

type Matter = {
  id: string
  case_number: string
  title: string
  status: string
  priority: string
  deadline: string | null
  created_at: string
  clients: { name: string; company_name: string | null } | null
  practice_areas: { name: string } | null
}

export default function MattersPage() {
  const [matters, setMatters] = useState<Matter[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')

  useEffect(() => {
    const load = async () => {
      const supabase = createClient()
      const { data } = await supabase
        .from('cases')
        .select('id, case_number, title, status, priority, deadline, created_at, clients(name, company_name), practice_areas(name)')
        .order('created_at', { ascending: false })
      setMatters((data as Matter[] | null) || [])
      setLoading(false)
    }
    void load()
  }, [])

  const filtered = useMemo(() => matters.filter((matter) => {
    const query = search.toLowerCase()
    return (status === 'all' || matter.status === status)
      && (matter.title.toLowerCase().includes(query) || matter.case_number.toLowerCase().includes(query))
  }), [matters, search, status])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div><h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Matters</h1><p className="mt-1 text-muted-foreground">Matters assigned or available to your account</p></div>
        <Button asChild className="bg-gold text-card hover:bg-gold-dark"><Link href="/portal/matters/new"><Plus className="mr-2 h-4 w-4" />New Matter</Link></Button>
      </div>
      <Card><CardContent className="flex flex-col gap-3 p-4 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by title or matter number" className="pl-10" /></div><Select value={status} onValueChange={setStatus}><SelectTrigger className="sm:w-44"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">All statuses</SelectItem><SelectItem value="active">Active</SelectItem><SelectItem value="pending">Pending</SelectItem><SelectItem value="closed">Closed</SelectItem><SelectItem value="archived">Archived</SelectItem></SelectContent></Select></CardContent></Card>
      {loading ? <Card><CardContent className="py-14 text-center text-muted-foreground">Loading your matters…</CardContent></Card> : filtered.length ? (
        <div className="space-y-4">{filtered.map((matter) => <Card key={matter.id} className="transition-shadow hover:shadow-md"><CardContent className="p-6"><div className="flex items-start justify-between gap-4"><div className="flex min-w-0 gap-4"><div className="mt-1 h-12 w-1 shrink-0 rounded-full bg-gold" /><div className="min-w-0"><h2 className="truncate text-lg font-medium text-navy">{matter.title}</h2><div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" />{matter.case_number}</span>{matter.clients && <span>{matter.clients.company_name || matter.clients.name}</span>}{matter.practice_areas && <span>{matter.practice_areas.name}</span>}{matter.deadline && <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />Due {formatDate(matter.deadline)}</span>}</div></div></div><div className="flex gap-2"><Badge variant={matter.priority === 'urgent' || matter.priority === 'high' ? 'destructive' : 'secondary'}>{matter.priority}</Badge><Badge variant={matter.status === 'active' ? 'default' : 'outline'}>{matter.status}</Badge></div></div></CardContent></Card>)}</div>
      ) : <Card><CardContent className="py-14 text-center"><Briefcase className="mx-auto h-11 w-11 text-muted-foreground" /><h2 className="mt-4 font-medium text-navy">No matters found</h2><p className="mt-1 text-sm text-muted-foreground">Only matters available to the signed-in account appear here.</p></CardContent></Card>}
    </div>
  )
}
