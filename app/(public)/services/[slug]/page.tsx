import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from 'lucide-react'
import { Section, Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { practiceAreas, teamMembers, articles } from '@/lib/demo-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const area = practiceAreas.find(a => a.slug === slug)
  
  if (!area) {
    return { title: 'Practice Area Not Found | Aureus Law' }
  }

  return {
    title: `${area.name} | Aureus Law`,
    description: area.short_description || `Expert legal services in ${area.name} from Aureus Law, Maldives.`,
  }
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }))
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const area = practiceAreas.find(a => a.slug === slug)

  if (!area) {
    notFound()
  }

  // Get related lawyers (in production, this would come from junction table)
  const relatedLawyers = teamMembers.slice(0, 3)
  
  // Get related articles
  const relatedArticles = articles.filter(a => a.status === 'published').slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy to-navy-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 border-r-2 border-t-2 border-gold rounded-bl-full" />
        </div>
        <Container className="relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-stone-light/70 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Practice Areas
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-stone-light tracking-tight">
              {area.name}
            </h1>
            <p className="mt-6 text-xl text-stone-light/80 leading-relaxed">
              {area.short_description}
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-2xl font-medium text-navy">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {area.full_description}
                </p>
              </div>

              {/* Common Needs */}
              {area.common_needs && area.common_needs.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-serif text-2xl font-medium text-navy mb-6">
                    How We Can Help
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {area.common_needs.map((need, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-stone rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-navy">{need}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process */}
              <div className="mt-12">
                <h2 className="font-serif text-2xl font-medium text-navy mb-6">
                  Our Approach
                </h2>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Initial Consultation', description: 'We begin with a thorough discussion of your situation to understand your needs and objectives.' },
                    { step: '02', title: 'Strategy Development', description: 'Our team develops a tailored legal strategy aligned with your goals and circumstances.' },
                    { step: '03', title: 'Implementation', description: 'We execute the strategy with precision, keeping you informed at every stage.' },
                    { step: '04', title: 'Resolution', description: 'We work diligently to achieve the best possible outcome for your matter.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 border border-border rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                        <span className="text-gold font-medium">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-navy">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-navy p-6 rounded-xl">
                <h3 className="font-serif text-xl font-medium text-stone-light mb-4">
                  Need Legal Assistance?
                </h3>
                <p className="text-stone-light/80 text-sm mb-6">
                  Contact our {area.name.toLowerCase()} team for expert guidance.
                </p>
                <Button
                  asChild
                  className="w-full bg-gold hover:bg-gold-dark text-navy"
                >
                  <Link href="/contact/book-consultation">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href="tel:+9603001000"
                  className="mt-4 flex items-center justify-center gap-2 text-stone-light/80 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +960 300 1000
                </a>
              </div>

              {/* Related Lawyers */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg font-medium text-navy mb-4">
                  Related Lawyers
                </h3>
                <div className="space-y-4">
                  {relatedLawyers.map((lawyer) => (
                    <Link
                      key={lawyer.id}
                      href={`/team/${lawyer.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-gold text-sm font-medium">
                          {lawyer.full_name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-navy group-hover:text-gold transition-colors text-sm">
                          {lawyer.full_name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {lawyer.role_title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              {area.related_services && area.related_services.length > 0 && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg font-medium text-navy mb-4">
                    Related Services
                  </h3>
                  <div className="space-y-2">
                    {area.related_services.map((service) => (
                      <div
                        key={service}
                        className="text-sm text-muted-foreground py-2 border-b border-border last:border-0"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section variant="stone">
          <Container>
            <h2 className="font-serif text-2xl font-medium text-navy mb-8">
              Related Insights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((article) => (
                <Link key={article.id} href={`/insights/${article.slug}`}>
                  <article className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-serif text-lg font-medium text-navy group-hover:text-gold transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 text-sm text-gold">
                      Read more →
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
