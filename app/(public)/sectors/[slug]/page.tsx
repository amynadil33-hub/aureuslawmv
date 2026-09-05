import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/ui/section'
import { practiceAreas, sectors } from '@/lib/demo-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

const sectorSupport: Record<string, string[]> = {
  'hospitality-resorts': [
    'Development, management, and operating agreements',
    'Tourism regulation and licensing support',
    'Employment and workplace advisory',
    'Commercial disputes and risk management',
  ],
  'construction-real-estate': [
    'Property acquisition and transaction support',
    'Construction and consultancy agreements',
    'Regulatory approvals and compliance',
    'Project and property dispute resolution',
  ],
  'smes-local-businesses': [
    'Business formation and governance',
    'Commercial contracts and negotiations',
    'Employment documentation and advice',
    'Regulatory compliance and dispute support',
  ],
  'financial-services': [
    'Regulatory reviews and compliance assessments',
    'Commercial and operational agreements',
    'Governance and risk management',
    'Investigations and dispute resolution',
  ],
  'international-clients': [
    'Foreign investment and business structuring',
    'Local regulatory and administrative guidance',
    'Commercial contracts and due diligence',
    'Cross-border transaction and dispute support',
  ],
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const sector = sectors.find((item) => item.slug === slug && item.is_visible)

  if (!sector) return { title: 'Sector Not Found | Aureus Law' }

  return {
    title: sector.meta_title || `${sector.name} | Aureus Law`,
    description:
      sector.meta_description ||
      sector.short_description ||
      `Legal services for the ${sector.name} sector in the Maldives.`,
  }
}

export function generateStaticParams() {
  return sectors.filter((sector) => sector.is_visible).map((sector) => ({ slug: sector.slug }))
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params
  const sector = sectors.find((item) => item.slug === slug && item.is_visible)

  if (!sector) notFound()

  const supportItems = sectorSupport[sector.slug] || []
  const relatedServices = practiceAreas.filter((area) => area.is_visible).slice(0, 4)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-bl-full border-r-2 border-t-2 border-gold" />
        </div>
        <Container className="relative z-10">
          <Link
            href="/sectors"
            className="mb-6 inline-flex items-center gap-2 text-stone-light/70 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            All Sectors
          </Link>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gold">
              Sector Focus
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-light md:text-5xl lg:text-6xl">
              {sector.name}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-stone-light/80">
              {sector.short_description}
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-medium text-navy">How We Support This Sector</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {sector.full_description}
              </p>

              {supportItems.length > 0 && (
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {supportItems.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-lg bg-stone p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                      <span className="text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-12">
                <h2 className="font-serif text-2xl font-medium text-navy">Relevant Practice Areas</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {relatedServices.map((area) => (
                    <Link
                      key={area.id}
                      href={`/services/${area.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-gold/40"
                    >
                      <span className="font-medium text-navy transition-colors group-hover:text-gold">
                        {area.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gold" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside>
              <div className="rounded-xl bg-navy p-6">
                <h2 className="font-serif text-xl font-medium text-stone-light">
                  Need Sector-Specific Advice?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-light/80">
                  Contact our team for practical guidance tailored to your organisation and objectives.
                </p>
                <Button asChild className="mt-6 w-full bg-gold text-navy hover:bg-gold-dark">
                  <Link href="/contact/book-consultation">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href="tel:+9603001000"
                  className="mt-4 flex items-center justify-center gap-2 text-stone-light/80 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4" />
                  +960 300 1000
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
