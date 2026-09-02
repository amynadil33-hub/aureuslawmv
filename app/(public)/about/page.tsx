'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SectionHeader } from '@/components/ui/section'
import { teamMembers } from '@/lib/demo-data'

const values = [
  {
    title: 'Integrity',
    description: 'Principled advice and representation grounded in honesty and sound professional judgment.',
    icon: ShieldCheck,
  },
  {
    title: 'Professionalism',
    description: 'Clear, dependable legal service delivered with care, discretion, and respect.',
    icon: Scale,
  },
  {
    title: 'Accountability',
    description: 'A strong commitment to our clients, their objectives, and the quality of every engagement.',
    icon: Users,
  },
]

const practiceAreas = [
  {
    title: 'Litigation & Dispute Resolution',
    description:
      'We advise, assist, and represent clients in legal disputes, tribunal proceedings, and court litigation, including:',
    icon: Landmark,
    services: [
      'Civil and commercial disputes',
      'Employment and labour matters',
      'Family and personal matters',
      'Criminal defence matters',
      'Contractual disputes',
      'Mediation and negotiated settlements',
      'Tribunal and appellate matters',
      'Judicial review and administrative law matters',
    ],
  },
  {
    title: 'Corporate, Regulatory & Advisory Services',
    description:
      'We provide legal advisory services to businesses, institutions, and private clients, including:',
    icon: BriefcaseBusiness,
    services: [
      'Commercial contract drafting, review and negotiation',
      'Employment documentation and human resources advisory',
      'Governance and administrative advisory',
      'Procurement and policy-related legal support',
      'Foreign investment and business structuring support',
      'Legal research and strategic advisory services',
      'Regulatory reviews and compliance assessments',
      'Risk management and legal due diligence',
      'Tax advisory and regulatory tax compliance',
    ],
  },
]

export default function AboutPage() {
  const partners = teamMembers.filter((member) =>
    member.role_title?.toLowerCase().includes('partner'),
  )

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light py-20 text-stone-light lg:py-32">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-gold" />
          <div className="absolute right-20 top-20 h-64 w-64 rounded-full border border-gold" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gold">
              About Aureus Law
            </p>
            <h1 className="text-balance font-serif text-4xl font-semibold lg:text-5xl xl:text-6xl">
              Principled counsel. Practical solutions.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-light/80 lg:text-xl">
              Established on 8 December 2025, Aureus Law Firm LLP is a Maldivian law firm
              committed to providing principled, practical, and client-focused legal services.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gold">
              Firm Profile &amp; Overview
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-navy lg:text-4xl">
              Legal service built around clarity and trust
            </h2>
            <div className="mt-6 h-px w-20 bg-gold" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Aureus Law Firm LLP is a growing full-service Maldivian law firm providing legal
              advisory and dispute resolution services across a broad range of practice areas.
            </p>
            <p>
              The firm was established with the objective of delivering modern, accessible, and
              professional legal services founded on integrity, clarity, and strong client
              relationships.
            </p>
            <p>
              Founded by legal professionals with experience across government and regulatory
              sectors, Aureus Law Firm LLP combines legal expertise, sound judgment, and a strong
              understanding of the Maldivian legal and administrative framework.
            </p>
            <p>
              Our lawyers bring experience from government legal and regulatory institutions,
              providing practical insight into administrative processes, regulatory compliance,
              investigations, policy interpretation, and dispute resolution within the Maldivian
              context.
            </p>
            <p>
              We understand that legal matters are often complex, sensitive, and high stakes.
              Whether assisting individuals, businesses, or institutions, we are committed to
              providing clear legal advice, practical solutions, and dependable representation
              tailored to each client&apos;s specific needs and circumstances.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-stone">
        <SectionHeader
          title="Our Values"
          subtitle="The principles at the foundation of our practice"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="mb-5 w-fit rounded-lg bg-gold/10 p-3">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.article>
            )
          })}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Practice Areas"
          subtitle="Practical advice and dependable representation for individuals, businesses, and institutions"
          align="center"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-7 shadow-sm lg:p-9"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-gold/10 p-3">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-navy">
                      {area.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{area.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 border-t border-border pt-6">
                  {area.services.map((service) => (
                    <li key={service} className="flex gap-3 text-sm leading-relaxed text-navy/80 sm:text-base">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/services">
              Explore all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {partners.length > 0 && (
        <Section className="bg-navy text-stone-light">
          <SectionHeader
            title="Our Leadership"
            subtitle="Meet the partners guiding our firm"
            align="center"
            variant="light"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/team/${partner.slug}`} className="group block">
                  <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-lg bg-navy-light">
                    {partner.photo_url ? (
                      <Image
                        src={partner.photo_url}
                        alt={partner.full_name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-5xl text-gold">
                          {partner.full_name
                            .split(' ')
                            .map((name) => name[0])
                            .join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-semibold transition-colors group-hover:text-gold">
                    {partner.full_name}
                  </h3>
                  <p className="mt-1 text-sm text-gold">{partner.role_title}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-stone-light/30 text-stone-light hover:bg-stone-light hover:text-navy"
            >
              <Link href="/team">View Full Team</Link>
            </Button>
          </div>
        </Section>
      )}

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy lg:text-4xl">
            How Can We Help?
          </h2>
          <p className="mb-8 mt-4 text-muted-foreground">
            Contact us to discuss how Aureus Law Firm LLP can support your legal needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-gold text-card hover:bg-gold-dark">
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
