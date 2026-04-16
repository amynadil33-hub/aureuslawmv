'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight, Briefcase, Users, Heart, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Section, SectionHeader } from '@/components/ui/section'
import { jobOpenings } from '@/lib/demo-data'

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs for you and your family.'
  },
  {
    icon: GraduationCap,
    title: 'Professional Development',
    description: 'Continuing legal education, mentorship programs, and career advancement opportunities.'
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work alongside experienced professionals in a supportive, team-oriented environment.'
  },
  {
    icon: Briefcase,
    title: 'Challenging Work',
    description: 'Engage with complex legal matters across diverse practice areas and industries.'
  },
]

export default function CareersPage() {
  const activeJobs = jobOpenings.filter(j => j.is_active)

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
              Join Our Team
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 text-balance">
              Build Your Legal Career with Aureus Law
            </h1>
            <p className="text-xl text-stone-light/80 leading-relaxed">
              Join a team of dedicated professionals committed to excellence in legal practice. 
              We offer challenging work, professional growth, and a collaborative environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <Section>
        <SectionHeader
          title="Why Work With Us"
          subtitle="We invest in our people and foster a culture of excellence"
          centered
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="p-3 bg-gold/10 rounded-lg w-fit mb-4">
                    <benefit.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="bg-stone">
        <SectionHeader
          title="Open Positions"
          subtitle={`${activeJobs.length} opportunities available`}
          centered
        />
        <div className="max-w-4xl mx-auto mt-12 space-y-4">
          {activeJobs.length > 0 ? (
            activeJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.employment_type.replace('_', ' ')}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-3 line-clamp-2">
                          {job.description}
                        </p>
                      </div>
                      <Button asChild className="bg-navy hover:bg-navy-dark whitespace-nowrap">
                        <Link href={`/careers/${job.slug}`}>
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                  No Open Positions
                </h3>
                <p className="text-muted-foreground mb-4">
                  We don&apos;t have any open positions at the moment, but we&apos;re always interested in 
                  hearing from talented legal professionals.
                </p>
                <Button asChild variant="outline">
                  <Link href="/contact">Send Your Resume</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy text-stone-light">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Don&apos;t See a Fit?
          </h2>
          <p className="text-stone-light/70 mb-8">
            We&apos;re always looking for exceptional talent. Send us your resume and 
            we&apos;ll keep you in mind for future opportunities.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-navy">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </Section>
    </main>
  )
}
