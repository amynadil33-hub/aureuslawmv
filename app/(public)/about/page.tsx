'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scale, Users, Globe, Award, Target, Heart, Shield, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SectionHeader } from '@/components/ui/section'
import { teamMembers, firmStats, firmValues } from '@/lib/demo-data'

const timeline = [
  {
    year: '2008',
    title: 'Foundation',
    description: 'Aureus Law was established in Malé with a vision to provide world-class legal services in the Maldives.'
  },
  {
    year: '2012',
    title: 'Corporate Practice Expansion',
    description: 'Expanded our corporate and commercial practice to serve growing international investment in the Maldives.'
  },
  {
    year: '2016',
    title: 'Tourism & Hospitality Focus',
    description: 'Became the leading firm for resort development and tourism-related legal matters.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched our client portal and modernized operations to better serve clients remotely.'
  },
  {
    year: '2024',
    title: 'Regional Recognition',
    description: 'Recognized as a leading law firm in the Maldives by international legal directories.'
  },
]

const valueIcons: Record<string, React.ElementType> = {
  'Excellence': Award,
  'Integrity': Shield,
  'Client Focus': Heart,
  'Innovation': Lightbulb,
}

export default function AboutPage() {
  const partners = teamMembers.filter(m => m.role_title?.toLowerCase().includes('partner'))

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy text-stone-light py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
              About Aureus Law
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 text-balance">
              Strategic Legal Counsel for the Maldives
            </h1>
            <p className="text-xl text-stone-light/80 leading-relaxed">
              For over 15 years, Aureus Law has been at the forefront of legal practice in the Maldives, 
              providing sophisticated counsel to individuals, businesses, and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gold py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {firmStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-4xl lg:text-5xl font-semibold text-navy">
                  {stat.value}
                </p>
                <p className="text-navy/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg">
                <Target className="h-6 w-6 text-gold" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-navy">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To provide exceptional legal services that empower our clients to achieve their goals, 
              while upholding the highest standards of professional integrity and contributing to the 
              development of legal practice in the Maldives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg">
                <Globe className="h-6 w-6 text-gold" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-navy">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To be the most trusted and respected law firm in the Maldives, recognized internationally 
              for our expertise, innovation, and commitment to client success in an evolving legal landscape.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-stone">
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do"
          centered
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {firmValues.map((value, idx) => {
            const Icon = valueIcons[value.title] || Scale
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-card p-8 rounded-lg border border-border"
              >
                <div className="p-3 bg-gold/10 rounded-lg w-fit mb-4">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader
          title="Our Journey"
          subtitle="Key milestones in our firm&apos;s history"
          centered
        />
        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
            
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Year circle */}
                <div className="absolute left-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <span className="font-serif text-sm font-semibold text-navy">{item.year}</span>
                </div>
                
                <div className="pt-3">
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section className="bg-navy text-stone-light">
        <SectionHeader
          title="Our Leadership"
          subtitle="Meet the partners guiding our firm"
          centered
          dark
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link href={`/team/${partner.slug}`} className="group block">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-navy-light mb-4">
                  {partner.photo_url ? (
                    <Image
                      src={partner.photo_url}
                      alt={partner.full_name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-serif text-gold">
                        {partner.full_name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-xl font-semibold group-hover:text-gold transition-colors">
                  {partner.full_name}
                </h3>
                <p className="text-gold text-sm mt-1">{partner.role_title}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-stone-light/30 text-stone-light hover:bg-stone-light hover:text-navy">
            <Link href="/team">View Full Team</Link>
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us today to discuss how Aureus Law can support your legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-card">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}
