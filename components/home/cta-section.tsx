'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, Container } from '@/components/ui/section'
import { contactInfo } from '@/lib/demo-data'

export function CTASection() {
  return (
    <Section className="py-20 md:py-32">
      <Container>
        <div className="relative bg-navy rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 border-r-4 border-t-4 border-gold rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 border-l-4 border-b-4 border-gold rounded-tr-full" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-light leading-tight">
                Ready to Discuss Your Legal Needs?
              </h2>
              <p className="mt-4 text-lg text-stone-light/80">
                Schedule a confidential consultation with our team. We&apos;re here to provide 
                the clarity and guidance you need.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-navy font-medium"
                >
                  <Link href="/contact/book-consultation">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-stone-light/30 text-stone-light hover:bg-stone-light/10"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-light rounded-lg">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-stone-light/60 mb-1">Call Us</div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-lg text-stone-light hover:text-gold transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-light rounded-lg">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-stone-light/60 mb-1">Email Us</div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg text-stone-light hover:text-gold transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-light rounded-lg">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-stone-light/60 mb-1">Visit Us</div>
                  <address className="text-stone-light not-italic">
                    {contactInfo.address}
                  </address>
                  <div className="text-sm text-stone-light/60 mt-1">
                    {contactInfo.hours}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
