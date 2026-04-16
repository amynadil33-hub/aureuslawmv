import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, Scale, Shield, Heart, Users, Home, Landmark, MessageSquare, FileText, ClipboardCheck, Plane, Globe, CircleDollarSign, ScrollText, Search, HelpCircle } from 'lucide-react'
import { Section, SectionHeader, Container } from '@/components/ui/section'
import { practiceAreas } from '@/lib/demo-data'

export const metadata: Metadata = {
  title: 'Practice Areas | Aureus Law',
  description: 'Explore our comprehensive legal services covering corporate law, litigation, family matters, property transactions, and more.',
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Scale,
  Shield,
  Heart,
  Users,
  Home,
  Landmark,
  MessageSquare,
  FileText,
  ClipboardCheck,
  Plane,
  Globe,
  CircleDollarSign,
  ScrollText,
  Search,
  HelpCircle,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy to-navy-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 border-r-2 border-t-2 border-gold rounded-bl-full" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
              Practice Areas
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-stone-light tracking-tight">
              Comprehensive Legal Services
            </h1>
            <p className="mt-6 text-xl text-stone-light/80 leading-relaxed">
              Our team provides expert counsel across a full spectrum of legal disciplines, 
              tailored to the unique needs of the Maldives.
            </p>
          </div>
        </Container>
      </section>

      {/* Practice Areas Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => {
              const Icon = iconMap[area.icon_name || 'Scale'] || Scale
              
              return (
                <Link key={area.id} href={`/services/${area.slug}`}>
                  <div className="group h-full p-6 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                    <div className="p-3 bg-stone rounded-lg w-fit group-hover:bg-gold/10 transition-colors">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h2 className="mt-4 font-serif text-xl font-medium text-navy group-hover:text-gold transition-colors">
                      {area.name}
                    </h2>
                    <p className="mt-2 text-muted-foreground line-clamp-3">
                      {area.short_description}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="stone">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">
            Need Legal Assistance?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Contact us today to discuss how we can help with your legal needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact/book-consultation"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-dark text-card rounded-md font-medium transition-colors"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-navy/20 hover:bg-navy hover:text-card rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
