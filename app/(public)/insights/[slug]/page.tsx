import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/ui/section'
import { articles, teamMembers } from '@/lib/demo-data'
import { formatDate } from '@/lib/utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles
    .filter(article => article.status === 'published')
    .map(article => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find(item => item.slug === slug && item.status === 'published')

  if (!article) {
    return { title: 'Article Not Found | Aureus Law' }
  }

  return {
    title: article.meta_title || `${article.title} | Aureus Law`,
    description: article.meta_description || article.excerpt || undefined,
  }
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articles.find(item => item.slug === slug && item.status === 'published')

  if (!article) {
    notFound()
  }

  const author = teamMembers.find(member => member.id === article.author_id)

  return (
    <main>
      <section className="bg-navy py-16 text-stone-light md:py-24">
        <Container>
          <Link
            href="/insights"
            className="mb-8 inline-flex items-center gap-2 text-sm text-stone-light/70 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            All Insights
          </Link>

          <div className="max-w-4xl">
            {article.category && (
              <Badge className="mb-5 border-gold/30 bg-gold/10 text-gold hover:bg-gold/10">
                {article.category.name}
              </Badge>
            )}
            <h1 dir="auto" className="font-serif text-4xl font-semibold leading-tight text-balance md:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            {article.excerpt && (
              <p dir="auto" className="mt-6 max-w-3xl text-lg leading-8 text-stone-light/75">
                {article.excerpt}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-stone-light/70">
              {author && (
                author.is_visible ? (
                  <Link href={`/team/${author.slug}`} className="flex items-center gap-2 transition-colors hover:text-gold">
                    <User className="h-4 w-4" />
                    {author.full_name}
                  </Link>
                ) : (
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {author.full_name}
                  </span>
                )
              )}
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatDate(article.published_at || article.created_at)}
              </span>
              {article.read_time_minutes && (
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.read_time_minutes} min read
                </span>
              )}
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            {article.content && (
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            )}

            {author && (
              <div className="mt-14 border-t border-border pt-8">
                <p className="text-sm uppercase tracking-wider text-gold">Author</p>
                {author.is_visible ? (
                  <Link href={`/team/${author.slug}`} className="mt-3 block font-serif text-2xl font-semibold text-navy hover:text-gold">
                    {author.full_name}
                  </Link>
                ) : (
                  <p className="mt-3 font-serif text-2xl font-semibold text-navy">
                    {author.full_name}
                  </p>
                )}
                <p className="mt-1 text-sm text-muted-foreground">{author.role_title}</p>
              </div>
            )}

            <div className="mt-12">
              <Button asChild variant="outline">
                <Link href="/insights">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Insights
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
