import { revalidatePath } from 'next/cache'
import { Inbox, Mail, MessageSquareText, Send } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { createClient } from '@/lib/supabase/server'

async function sendInternalMessage(formData: FormData) {
  'use server'
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return

  const recipientId = String(formData.get('recipient_id') || '')
  const subject = String(formData.get('subject') || '').trim()
  const body = String(formData.get('body') || '').trim()
  if (!recipientId || !body) return

  await supabase.from('portal_messages').insert({
    sender_id: user.id,
    recipient_id: recipientId,
    subject: subject || null,
    body,
  })
  revalidatePath('/portal/messages')
}

export default async function MessagesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const [messagesResult, profilesResult, consultationsResult] = await Promise.all([
    supabase.from('portal_messages').select('id, sender_id, recipient_id, subject, body, is_read, created_at').order('created_at', { ascending: false }),
    supabase.from('profiles').select('id, full_name, email, role').eq('is_active', true).order('full_name'),
    supabase.from('consultation_requests').select('id, full_name, email, phone, preferred_date, preferred_time, message, status, created_at').order('created_at', { ascending: false }),
  ])
  const messages = messagesResult.data || []
  const colleagues = (profilesResult.data || []).filter((profile) => profile.id !== user!.id)
  const consultations = consultationsResult.data || []

  return (
    <div className="space-y-6">
      <div><h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Messages</h1><p className="mt-1 text-muted-foreground">Consultation requests and private internal messages for your account</p></div>

      <div className="grid gap-6 xl:grid-cols-[1fr_22rem]">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <Card><CardContent className="p-5"><Inbox className="h-5 w-5 text-gold" /><p className="mt-3 text-2xl font-semibold text-navy">{consultations.length}</p><p className="text-sm text-muted-foreground">Consultation requests</p></CardContent></Card>
            <Card><CardContent className="p-5"><Mail className="h-5 w-5 text-gold" /><p className="mt-3 text-2xl font-semibold text-navy">{messages.filter((message) => message.recipient_id === user!.id && !message.is_read).length}</p><p className="text-sm text-muted-foreground">Unread internal</p></CardContent></Card>
            <Card><CardContent className="p-5"><Send className="h-5 w-5 text-gold" /><p className="mt-3 text-2xl font-semibold text-navy">{messages.filter((message) => message.sender_id === user!.id).length}</p><p className="text-sm text-muted-foreground">Sent</p></CardContent></Card>
          </div>

          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Inbox className="h-5 w-5 text-gold" />Consultation Requests</CardTitle></CardHeader>
            <CardContent className="divide-y divide-border p-0">
              {consultations.length ? consultations.map((request) => (
                <article key={request.id} className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-medium text-navy">{request.full_name}</h2><a href={`mailto:${request.email}`} className="mt-1 block text-sm text-gold hover:underline">{request.email}</a></div><div className="flex items-center gap-2"><Badge variant="secondary">{request.status}</Badge><span className="text-xs text-muted-foreground">{new Date(request.created_at).toLocaleString()}</span></div></div>
                  {(request.preferred_date || request.preferred_time) && <p className="mt-3 text-sm text-muted-foreground">Preferred: {request.preferred_date || 'Date not specified'} {request.preferred_time || ''}</p>}
                  {request.message && <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">{request.message}</p>}
                  {request.phone && <a href={`tel:${request.phone}`} className="mt-3 inline-block text-sm text-gold hover:underline">{request.phone}</a>}
                </article>
              )) : <div className="py-12 text-center"><Inbox className="mx-auto h-10 w-10 text-muted-foreground" /><p className="mt-3 text-sm text-muted-foreground">No consultation requests assigned or addressed to you.</p></div>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><MessageSquareText className="h-5 w-5 text-gold" />Internal Messages</CardTitle></CardHeader>
            <CardContent className="divide-y divide-border p-0">
              {messages.length ? messages.map((message) => (
                <article key={message.id} className="p-5"><div className="flex items-center justify-between gap-3"><h2 className="font-medium text-navy">{message.subject || 'No subject'}</h2><div className="flex items-center gap-2">{message.recipient_id === user!.id && !message.is_read && <Badge>New</Badge>}<span className="text-xs text-muted-foreground">{new Date(message.created_at).toLocaleString()}</span></div></div><p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">{message.body}</p><p className="mt-2 text-xs text-gold">{message.sender_id === user!.id ? 'Sent' : 'Received'}</p></article>
              )) : <div className="py-12 text-center"><Mail className="mx-auto h-10 w-10 text-muted-foreground" /><p className="mt-3 text-sm text-muted-foreground">No internal messages yet.</p></div>}
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit xl:sticky xl:top-24">
          <CardHeader><CardTitle>New Internal Message</CardTitle></CardHeader>
          <CardContent>
            {colleagues.length ? (
              <form action={sendInternalMessage} className="space-y-4">
                <div className="space-y-2"><Label htmlFor="recipient_id">To *</Label><select id="recipient_id" name="recipient_id" required defaultValue="" className="h-10 w-full rounded-md border border-input bg-transparent px-3 text-sm"><option value="" disabled>Select a colleague</option>{colleagues.map((profile) => <option key={profile.id} value={profile.id}>{profile.full_name || profile.email}</option>)}</select></div>
                <div className="space-y-2"><Label htmlFor="subject">Subject</Label><Input id="subject" name="subject" /></div>
                <div className="space-y-2"><Label htmlFor="body">Message *</Label><Textarea id="body" name="body" rows={6} required /></div>
                <Button type="submit" className="w-full bg-gold text-card hover:bg-gold-dark"><Send className="mr-2 h-4 w-4" />Send Message</Button>
              </form>
            ) : <p className="text-sm leading-relaxed text-muted-foreground">No other active portal accounts are available yet. Colleagues appear here after their accounts are created.</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
