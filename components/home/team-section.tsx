'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Linkedin } from 'lucide-react'
import { Section, SectionHeader, Container } from '@/components/ui/section'
import { teamMembers } from '@/lib/demo-data'

export function TeamSection() {
  const featured = teamMembers.filter(m => m.is_featured).slice(0, 4)

  return (
    <Section>
      <Container>
        <SectionHeader
          subtitle="Our Team"
          title="Meet Our Legal Experts"
          description="Our team combines decades of experience with fresh perspectives, delivering exceptional results for every client."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/team/${member.slug}`}>
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
                        <a
                          href={`mailto:${member.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 bg-card/10 rounded-full hover:bg-gold hover:text-navy transition-colors"
                        >
                          <Mail className="h-5 w-5 text-stone-light" />
                        </a>
                      )}
                      {member.linkedin_url && (
                        <a
                          href={member.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 bg-card/10 rounded-full hover:bg-gold hover:text-navy transition-colors"
                        >
                          <Linkedin className="h-5 w-5 text-stone-light" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Info */}
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
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
          >
            Meet the Full Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
