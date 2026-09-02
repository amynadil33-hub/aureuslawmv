import { Download, FileText, FolderOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'

export default async function DocumentsPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('case_documents')
    .select('id, name, file_url, file_type, file_size, category, created_at, cases(case_number, title)')
    .order('created_at', { ascending: false })
  const documents = data || []

  return (
    <div className="space-y-6">
      <div><h1 className="font-serif text-2xl font-semibold text-navy lg:text-3xl">Documents</h1><p className="mt-1 text-muted-foreground">Documents from matters available to your account</p></div>
      {documents.length ? <div className="space-y-3">{documents.map((document) => {
        const matter = Array.isArray(document.cases) ? document.cases[0] : document.cases
        return <Card key={document.id}><CardContent className="flex items-center gap-4 p-5"><div className="rounded-lg bg-gold/10 p-3"><FileText className="h-5 w-5 text-gold" /></div><div className="min-w-0 flex-1"><p className="truncate font-medium text-navy">{document.name}</p><div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">{document.category && <Badge variant="secondary">{document.category.replaceAll('_', ' ')}</Badge>}<span>{new Date(document.created_at).toLocaleDateString()}</span>{matter && <span>{matter.case_number}</span>}</div></div><Button asChild size="icon" variant="ghost"><a href={document.file_url} target="_blank" rel="noopener noreferrer" aria-label={`Download ${document.name}`}><Download className="h-4 w-4" /></a></Button></CardContent></Card>
      })}</div> : <Card><CardContent className="py-16 text-center"><FolderOpen className="mx-auto h-12 w-12 text-muted-foreground" /><h2 className="mt-4 font-medium text-navy">No documents available</h2><p className="mt-1 text-sm text-muted-foreground">Files attached to your permitted matters will appear here.</p></CardContent></Card>}
    </div>
  )
}
