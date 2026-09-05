import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Building,
  Globe,
  HardHat,
  Store,
  TrendingUp,
  Scale,
} from 'lucide-react'
import { Container, Section } from '@/components/ui/section'
import { sectors } from '@/lib/demo-data'

export const metadata: Metadata = {
  title: 'Sectors | Aureus Law',
  description:
    'Explore the industries and client sectors supported by Aureus Law Firm LLP in the Maldives.',
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building,
  Globe,
  HardHat,
  Store,
  TrendingUp,
}

export default function SectorsPage() {
  const visibleSectors = sectors
    .filter((sector) => sector.is_visible)
    .sort((a, b) => a.sort_order - b.sort_order)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-bl-full border-r-2 border-t-2 border-gold" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gold">
              Sectors
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-light md:text-5xl lg:text-6xl">
              Industry-Focused Legal Support
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-stone-light/80">
              Practical legal advice shaped around the commercial, regulatory, and operational
              realities of the sectors we serve in the Maldives.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleSectors.map((sector) => {
              const Icon = iconMap[sector.icon_name || ''] || Scale

              return (
                <Link key={sector.id} href={`/sectors/${sector.slug}`} className="group">
                  <article className="h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg">
                    <div className="w-fit rounded-lg bg-stone p-3 transition-colors group-hover:bg-gold/10">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h2 className="mt-4 font-serif text-xl font-medium text-navy transition-colors group-hover:text-gold">
                      {sector.name}
                    </h2>
                    <p className="mt-2 text-muted-foreground">{sector.short_description}</p>
                    <div className="mt-5 flex items-center text-sm font-medium text-gold">
                      Explore this sector
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section variant="stone">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl font-medium text-navy md:text-4xl">
            Discuss Your Legal Needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Speak with our team about legal support tailored to your organisation or industry.
          </p>
          <Link
            href="/contact/book-consultation"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-medium text-card transition-colors hover:bg-gold-dark"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Container>
      </Section>
    </>
  )
}
