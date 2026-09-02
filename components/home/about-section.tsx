'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, Container } from '@/components/ui/section'

const features = [
  'Integrity',
  'Professionalism',
  'Accountability',
]

export function AboutSection() {
  return (
    <Section variant="stone">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-navy rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6">
                      <span className="font-serif text-3xl font-bold text-gold">A</span>
                    </div>
                    <p className="text-stone-light/80 text-lg max-w-xs">
                      Principled, practical, and client-focused legal services
                    </p>
                  </div>
                </div>
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-gold/30" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-gold/30" />
              </div>

              {/* Establishment Card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                <div className="text-center">
                  <div className="text-3xl font-serif font-medium text-navy">2025</div>
                  <div className="text-xs text-muted-foreground mt-1">Established</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-medium tracking-wider uppercase text-gold mb-3">
              About Aureus Law
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-navy text-balance">
              A Different Kind of Law Firm
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Established on 8 December 2025, Aureus Law Firm LLP is a Maldivian law firm
              committed to providing principled, practical, and client-focused legal services.
              Built on the values of integrity, professionalism, and accountability, the firm
              strives to deliver accessible and reliable legal support tailored to the evolving
              needs of individuals, businesses, and institutions across the Maldives.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded by legal professionals with experience across government and regulatory
              sectors, Aureus Law Firm LLP combines legal expertise, sound judgment, and a strong
              understanding of the Maldivian legal and administrative framework.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-navy">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                asChild
                className="bg-navy hover:bg-navy-dark text-card"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
