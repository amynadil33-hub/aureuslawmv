'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Briefcase, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { createClient } from '@/lib/supabase/client'

type Option = { id: string; name: string }

export default function NewMatterPage() {
  const [clients, setClients] = useState<Option[]>([])
  const [practiceAreas, setPracticeAreas] = useState<Option[]>([])
  const [clientId, setClientId] = useState('none')
  const [practiceAreaId, setPracticeAreaId] = useState('none')
  const [status, setStatus] = useState('active')
  const [priority, setPriority] = useState('medium')
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')
  const [createdMatter, setCreatedMatter] = useState<{ id: string; case_number: string } | null>(null)

  useEffect(() => {
    const loadOptions = async () => {
      const supabase = createClient()
      const [clientsResult, practiceAreasResult] = await Promise.all([
        supabase.from('clients').select('id, name').eq('is_active', true).order('name'),
        supabase.from('practice_areas').select('id, name').eq('is_visible', true).order('sort_order'),
      ])

      if (clientsResult.data) setClients(clientsResult.data)
      if (practiceAreasResult.data) setPracticeAreas(practiceAreasResult.data)
    }

    void loadOptions()
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSaving(true)
    setError('')

    const formData = new FormData(event.currentTarget)
    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      window.location.assign('/portal/login')
      return
    }

    const optionalValue = (name: string) => {
      const value = String(formData.get(name) || '').trim()
      return value || null
    }

    const { data, error: insertError } = await supabase
      .from('cases')
      .insert({
        title: String(formData.get('title') || '').trim(),
        description: optionalValue('description'),
        client_id: clientId === 'none' ? null : clientId,
        practice_area_id: practiceAreaId === 'none' ? null : practiceAreaId,
        status,
        priority,
        court_name: optionalValue('court_name'),
        court_case_number: optionalValue('court_case_number'),
        next_hearing_date: optionalValue('next_hearing_date'),
        deadline: optionalValue('deadline'),
        notes: optionalValue('notes'),
        created_by: user.id,
      })
      .select('id, case_number')
      .single()

    if (insertError) {
      setError(insertError.message || 'The matter could not be created. Please try again.')
      setIsSaving(false)
      return
    }

    await supabase.from('case_assignments').insert({
      case_id: data.id,
      profile_id: user.id,
      role: 'lead',
    })

    setCreatedMatter(data)
    setIsSaving(false)
  }

  if (createdMatter) {
    return (
      <div className="mx-auto max-w-2xl py-8">
        <Card>
          <CardContent className="p-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
            <h1 className="mt-5 font-serif text-3xl font-semibold text-navy">Matter Created</h1>
            <p className="mt-3 text-muted-foreground">
              Matter <span className="font-medium text-navy">{createdMatter.case_number}</span> was created successfully.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="bg-gold text-card hover:bg-gold-dark">
                <Link href="/portal/matters">Back to Matters</Link>
              </Button>
              <Button variant="outline" onClick={() => setCreatedMatter(null)}>
                Create Another Matter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <Link
          href="/portal/matters"
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Matters
        </Link>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gold/10 p-3">
            <Briefcase className="h-6 w-6 text-gold" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Create New Matter</h1>
            <p className="mt-1 text-muted-foreground">Enter the client and case details below.</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl text-navy">Matter details</CardTitle>
            <CardDescription>Fields marked with an asterisk are required.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <div role="alert" className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="title">Matter title *</Label>
              <Input id="title" name="title" placeholder="e.g. Client name — Employment dispute" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" rows={4} placeholder="Briefly describe the matter and its objectives." />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Client</Label>
                <Select value={clientId} onValueChange={setClientId}>
                  <SelectTrigger><SelectValue placeholder="Select a client" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No client selected</SelectItem>
                    {clients.map((client) => <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Practice area</Label>
                <Select value={practiceAreaId} onValueChange={setPracticeAreaId}>
                  <SelectTrigger><SelectValue placeholder="Select a practice area" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No practice area selected</SelectItem>
                    {practiceAreas.map((area) => <SelectItem key={area.id} value={area.id}>{area.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Priority</Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="mb-4 font-serif text-lg font-semibold text-navy">Court and schedule</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="court_name">Court or tribunal</Label>
                  <Input id="court_name" name="court_name" placeholder="e.g. Civil Court" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="court_case_number">Court case number</Label>
                  <Input id="court_case_number" name="court_case_number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="next_hearing_date">Next hearing</Label>
                  <Input id="next_hearing_date" name="next_hearing_date" type="datetime-local" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" name="deadline" type="datetime-local" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Internal notes</Label>
              <Textarea id="notes" name="notes" rows={4} placeholder="Add confidential notes for the legal team." />
            </div>
          </CardContent>
          <CardFooter className="mt-6 justify-end gap-3 border-t">
            <Button asChild type="button" variant="outline"><Link href="/portal/matters">Cancel</Link></Button>
            <Button type="submit" disabled={isSaving} className="bg-gold text-card hover:bg-gold-dark">
              {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSaving ? 'Creating Matter…' : 'Create Matter'}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
