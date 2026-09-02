import { Inbox, Mail, Send } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'

export default async function MessagesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data } = await supabase
    .from('portal_messages')
    .select('id, sender_id, recipient_id, subject, body, is_read, created_at')
    .order('created_at', { ascending: false })
  const messages = data || []

  return (
    <div className="space-y-6">
      <div><h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Messages</h1><p className="mt-1 text-muted-foreground">Private messages associated with your account</p></div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card><CardContent className="p-5"><Inbox className="h-5 w-5 text-gold" /><p className="mt-3 text-2xl font-semibold text-navy">{messages.filter((message) => message.recipient_id === user!.id).length}</p><p className="text-sm text-muted-foreground">Received</p></CardContent></Card>
        <Card><CardContent className="p-5"><Mail className="h-5 w-5 text-gold" /><p className="mt-3 text-2xl font-semibold text-navy">{messages.filter((message) => message.recipient_id === user!.id && !message.is_read).length}</p><p className="text-sm text-muted-foreground">Unread</p></CardContent></Card>
        <Card><CardContent className="p-5"><Send className="h-5 w-5 text-gold" /><p className="mt-3 text-2xl font-semibold text-navy">{messages.filter((message) => message.sender_id === user!.id).length}</p><p className="text-sm text-muted-foreground">Sent</p></CardContent></Card>
      </div>
      {messages.length ? (
        <Card><CardContent className="divide-y divide-border p-0">{messages.map((message) => <article key={message.id} className="p-5"><div className="flex items-center justify-between gap-3"><h2 className="font-medium text-navy">{message.subject || 'No subject'}</h2><div className="flex items-center gap-2">{message.recipient_id === user!.id && !message.is_read && <Badge>New</Badge>}<span className="text-xs text-muted-foreground">{new Date(message.created_at).toLocaleString()}</span></div></div><p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{message.body}</p><p className="mt-2 text-xs text-gold">{message.sender_id === user!.id ? 'Sent message' : 'Received message'}</p></article>)}</CardContent></Card>
      ) : (
        <Card><CardContent className="py-16 text-center"><Inbox className="mx-auto h-12 w-12 text-muted-foreground" /><h2 className="mt-4 font-medium text-navy">No messages</h2><p className="mt-1 text-sm text-muted-foreground">Your private conversations will appear here.</p></CardContent></Card>
      )}
    </div>
  )
}
