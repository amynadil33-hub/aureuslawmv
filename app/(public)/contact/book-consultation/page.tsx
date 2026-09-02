'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { createClient } from '@/lib/supabase/client'

type Option = { id: string; name: string }

export default function BookConsultationPage() {
  const [practiceAreas, setPracticeAreas] = useState<Option[]>([])
  const [lawyers, setLawyers] = useState<Option[]>([])
  const [clientType, setClientType] = useState('individual')
  const [practiceAreaId, setPracticeAreaId] = useState('none')
  const [lawyerId, setLawyerId] = useState('none')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadOptions = async () => {
      const supabase = createClient()
      const [areasResult, lawyersResult] = await Promise.all([
        supabase.from('practice_areas').select('id, name').eq('is_visible', true).order('sort_order'),
        supabase.from('team_members').select('id, full_name').eq('is_visible', true).order('sort_order'),
      ])
      if (areasResult.data) setPracticeAreas(areasResult.data)
      if (lawyersResult.data) setLawyers(lawyersResult.data.map((lawyer) => ({ id: lawyer.id, name: lawyer.full_name })))
    }
    void loadOptions()
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    const form = new FormData(event.currentTarget)
    const value = (name: string) => String(form.get(name) || '').trim()
    const supabase = createClient()
    const { error: submitError } = await supabase.from('consultation_requests').insert({
      full_name: value('full_name'),
      email: value('email'),
      phone: value('phone') || null,
      client_type: clientType,
      company_name: value('company_name') || null,
      practice_area_id: practiceAreaId === 'none' ? null : practiceAreaId,
      preferred_lawyer_id: lawyerId === 'none' ? null : lawyerId,
      preferred_date: value('preferred_date') || null,
      preferred_time: value('preferred_time') || null,
      message: value('message') || null,
      status: 'new',
    })

    if (submitError) {
      setError('We could not submit your request. Please try again or contact the firm directly.')
      setSubmitting(false)
      return
    }
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-stone py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <Link href="/contact" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold"><ArrowLeft className="h-4 w-4" />Back to Contact</Link>
        {submitted ? (
          <Card><CardContent className="p-10 text-center"><CheckCircle2 className="mx-auto h-14 w-14 text-gold" /><h1 className="mt-5 font-serif text-3xl font-semibold text-navy">Request Received</h1><p className="mx-auto mt-3 max-w-xl text-muted-foreground">Thank you. Your consultation request has been sent to Aureus Law Firm LLP. Our team will contact you to confirm the appointment.</p><Button asChild className="mt-8 bg-gold text-card hover:bg-gold-dark"><Link href="/">Return Home</Link></Button></CardContent></Card>
        ) : (
          <Card>
            <CardContent className="p-7 sm:p-10">
              <div className="mb-8 flex items-start gap-4"><div className="rounded-lg bg-gold/10 p-3"><CalendarDays className="h-6 w-6 text-gold" /></div><div><h1 className="font-serif text-3xl font-semibold text-navy">Book a Consultation</h1><p className="mt-2 text-muted-foreground">Tell us how we can help and suggest a convenient time.</p></div></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div role="alert" className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">{error}</div>}
                <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="full_name">Full name *</Label><Input id="full_name" name="full_name" required /></div><div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required /></div><div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" /></div><div className="space-y-2"><Label>Client type</Label><Select value={clientType} onValueChange={setClientType}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="individual">Individual</SelectItem><SelectItem value="business">Business</SelectItem><SelectItem value="institution">Institution</SelectItem></SelectContent></Select></div></div>
                {clientType !== 'individual' && <div className="space-y-2"><Label htmlFor="company_name">Organisation name</Label><Input id="company_name" name="company_name" /></div>}
                <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-2"><Label>Practice area</Label><Select value={practiceAreaId} onValueChange={setPracticeAreaId}><SelectTrigger><SelectValue placeholder="Select a practice area" /></SelectTrigger><SelectContent><SelectItem value="none">Not sure</SelectItem>{practiceAreas.map((area) => <SelectItem key={area.id} value={area.id}>{area.name}</SelectItem>)}</SelectContent></Select></div><div className="space-y-2"><Label>Preferred lawyer</Label><Select value={lawyerId} onValueChange={setLawyerId}><SelectTrigger><SelectValue placeholder="Select a lawyer" /></SelectTrigger><SelectContent><SelectItem value="none">No preference</SelectItem>{lawyers.map((lawyer) => <SelectItem key={lawyer.id} value={lawyer.id}>{lawyer.name}</SelectItem>)}</SelectContent></Select></div></div>
                <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="preferred_date">Preferred date</Label><Input id="preferred_date" name="preferred_date" type="date" min={new Date().toISOString().split('T')[0]} /></div><div className="space-y-2"><Label htmlFor="preferred_time">Preferred time</Label><Input id="preferred_time" name="preferred_time" type="time" /></div></div>
                <div className="space-y-2"><Label htmlFor="message">How can we help? *</Label><Textarea id="message" name="message" rows={6} required placeholder="Briefly describe your legal matter. Please avoid including highly sensitive information." /></div>
                <p className="text-xs leading-relaxed text-muted-foreground">Submitting this form does not create a lawyer-client relationship. The appointment is confirmed only after our team contacts you.</p>
                <Button type="submit" size="lg" disabled={submitting} className="w-full bg-gold text-card hover:bg-gold-dark">{submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{submitting ? 'Submitting…' : 'Request Consultation'}</Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
