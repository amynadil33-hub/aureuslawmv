import { Building2, Mail, Phone, UserRound, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'

export default async function ClientsPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('clients')
    .select('id, name, client_type, email, phone, company_name, contact_person')
    .eq('is_active', true)
    .order('name')
  const clients = data || []

  return (
    <div className="space-y-6">
      <div><h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Clients</h1><p className="mt-1 text-muted-foreground">Clients available to your portal account</p></div>
      {clients.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((client) => (
            <Card key={client.id}>
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="rounded-lg bg-gold/10 p-3">{client.client_type === 'business' ? <Building2 className="h-5 w-5 text-gold" /> : <UserRound className="h-5 w-5 text-gold" />}</div>
                <div><CardTitle className="text-lg text-navy">{client.company_name || client.name}</CardTitle>{client.company_name && client.contact_person && <p className="mt-1 text-sm text-muted-foreground">{client.contact_person}</p>}</div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {client.email && <a href={`mailto:${client.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="h-4 w-4" />{client.email}</a>}
                {client.phone && <a href={`tel:${client.phone}`} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" />{client.phone}</a>}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card><CardContent className="py-16 text-center"><Users className="mx-auto h-12 w-12 text-muted-foreground" /><h2 className="mt-4 font-medium text-navy">No clients available</h2><p className="mt-1 text-sm text-muted-foreground">Client records permitted for your account will appear here.</p></CardContent></Card>
      )}
    </div>
  )
}
