import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { Section, SectionHeader, Container } from '@/components/ui/section'
import { teamMembers } from '@/lib/demo-data'

export const metadata: Metadata = {
  title: 'Our Team | Aureus Law',
  description: 'Meet the experienced legal professionals at Aureus Law who are dedicated to providing exceptional service to our clients.',
}

export default function TeamPage() {
  const partners = teamMembers.filter(m => m.is_partner)
  const associates = teamMembers.filter(m => !m.is_partner)

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
              Our Team
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-stone-light tracking-tight">
              Meet Our Legal Experts
            </h1>
            <p className="mt-6 text-xl text-stone-light/80 leading-relaxed">
              Our team combines decades of experience with fresh perspectives, 
              delivering exceptional results for every client.
            </p>
          </div>
        </Container>
      </section>

      {/* Partners */}
      <Section>
        <Container>
          <SectionHeader
            subtitle="Leadership"
            title="Partners"
            align="left"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((member) => (
              <Link key={member.id} href={`/team/${member.slug}`}>
                <div className="group">
                  {/* Photo Placeholder */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-navy to-navy-light rounded-xl overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="font-serif text-2xl font-semibold text-gold">
                          {member.full_name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {member.email && (
                        <span className="p-3 bg-card/10 rounded-full">
                          <Mail className="h-5 w-5 text-stone-light" />
                        </span>
                      )}
                      {member.phone && (
                        <span className="p-3 bg-card/10 rounded-full">
                          <Phone className="h-5 w-5 text-stone-light" />
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-serif text-lg font-medium text-navy group-hover:text-gold transition-colors">
                      {member.full_name}
                    </h3>
                    <p className="text-sm text-gold">{member.role_title}</p>
                    {member.years_experience && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {member.years_experience} years experience
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Associates */}
      {associates.length > 0 && (
        <Section variant="stone">
          <Container>
            <SectionHeader
              subtitle="Associates"
              title="Our Associates"
              align="left"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {associates.map((member) => (
                <Link key={member.id} href={`/team/${member.slug}`}>
                  <div className="group">
                    {/* Photo Placeholder */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-navy to-navy-light rounded-xl overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
                          <span className="font-serif text-2xl font-semibold text-gold">
                            {member.full_name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {member.email && (
                          <span className="p-3 bg-card/10 rounded-full">
                            <Mail className="h-5 w-5 text-stone-light" />
                          </span>
                        )}
                        {member.phone && (
                          <span className="p-3 bg-card/10 rounded-full">
                            <Phone className="h-5 w-5 text-stone-light" />
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-serif text-lg font-medium text-navy group-hover:text-gold transition-colors">
                        {member.full_name}
                      </h3>
                      <p className="text-sm text-gold">{member.role_title}</p>
                      {member.years_experience && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {member.years_experience} years experience
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Join Us CTA */}
      <Section>
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">
            Join Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re always looking for talented legal professionals to join our growing practice.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-gold hover:bg-gold-dark text-card rounded-md font-medium transition-colors"
          >
            View Career Opportunities
          </Link>
        </Container>
      </Section>
    </>
  )
}
