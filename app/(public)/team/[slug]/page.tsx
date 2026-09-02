'use client'

import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, ArrowLeft, BookOpen, Briefcase, Languages, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { teamMembers } from '@/lib/demo-data'
import { fullBios } from '@/lib/team-bios'

export default function TeamMemberPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const member = teamMembers.find(m => m.slug === slug)
  
  if (!member) {
    notFound()
  }

  const memberPracticeAreas = member.practice_areas ?? []
  const fullBio = fullBios[member.slug] || member.bio

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-navy text-stone-light py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <Link 
            href="/team"
            className="inline-flex items-center gap-2 text-stone-light/70 hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-navy-light">
                {member.photo_url ? (
                  <Image
                    src={member.photo_url}
                    alt={member.full_name}
                    fill
                    priority
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-serif text-gold">
                      {member.full_name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-2">
                {member.full_name}
              </h1>
              <p className="text-gold text-xl mb-6">{member.role_title}</p>
              
              {/* Contact */}
              <div className="flex flex-wrap gap-4 mb-8">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light rounded-md hover:bg-gold hover:text-navy transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light rounded-md hover:bg-gold hover:text-navy transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                )}
                {member.linkedin_url && (
                  <a
                    href={member.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light rounded-md hover:bg-gold hover:text-navy transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                )}
              </div>

              {/* Practice Areas */}
              {memberPracticeAreas.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-stone-light/60 uppercase tracking-wider mb-3">
                    Practice Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {memberPracticeAreas.map(area => (
                      <Link key={area.id} href={`/services/${area.slug}`}>
                        <Badge
                          variant="secondary"
                          className="bg-navy-light hover:bg-gold hover:text-navy transition-colors cursor-pointer"
                        >
                          {area.name}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        </div>
      </section>

      {/* About and facts */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">Profile</p>
            <h2 className="font-serif text-3xl font-semibold text-navy mb-6">About</h2>
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {fullBio || `${member.full_name} is a member of the Aureus Law Firm team.`}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-stone-dark bg-stone p-6"
          >
            <h2 className="font-serif text-2xl font-semibold text-navy">Profile facts</h2>
            <dl className="mt-6 space-y-5">
              <div className="flex gap-3">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Role</dt>
                  <dd className="mt-1 text-sm font-medium text-navy">{member.role_title}</dd>
                </div>
              </div>
              {member.years_experience && (
                <div className="flex gap-3">
                  <Scale className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Experience</dt>
                    <dd className="mt-1 text-sm font-medium text-navy">{member.years_experience}+ years</dd>
                  </div>
                </div>
              )}
              {member.languages && member.languages.length > 0 && (
                <div className="flex gap-3">
                  <Languages className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Languages</dt>
                    <dd className="mt-1 text-sm font-medium text-navy">{member.languages.join(', ')}</dd>
                  </div>
                </div>
              )}
              {member.admissions && member.admissions.length > 0 && (
                <div className="flex gap-3">
                  <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Admissions</dt>
                    <dd className="mt-1 text-sm font-medium text-navy">{member.admissions.join(', ')}</dd>
                  </div>
                </div>
              )}
            </dl>
          </motion.aside>
        </div>
      </Section>

      {/* Education */}
      {member.education && member.education.length > 0 && (
        <Section className="bg-stone">
          <div className="max-w-4xl mx-auto">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gold/10 rounded-md">
                    <BookOpen className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-navy">Education</h3>
                </div>
                <ul className="space-y-4">
                  {member.education.map((education, idx) => (
                    <li key={idx} className="pl-4 border-l-2 border-gold/30">
                      <p className="font-medium text-navy">{education}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-navy text-stone-light">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Work with {member.full_name.split(' ')[0]}
          </h2>
          <p className="text-stone-light/70 mb-8">
            Schedule a consultation to discuss how {member.full_name.split(' ')[0]} can help with your legal needs.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-navy">
            <Link href="/contact/book-consultation">Book a Consultation</Link>
          </Button>
        </div>
      </Section>
    </main>
  )
}
