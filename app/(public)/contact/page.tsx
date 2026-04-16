'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Section, SectionHeader } from '@/components/ui/section'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { contactInfo, practiceAreas } from '@/lib/demo-data'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy text-stone-light py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 text-balance">
              Contact Aureus Law
            </h1>
            <p className="text-xl text-stone-light/80 leading-relaxed">
              We&apos;re here to help. Reach out to discuss your legal needs or schedule 
              a consultation with one of our experienced attorneys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-gold py-12">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-navy rounded-lg">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-medium text-navy mb-1">Phone</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-navy/70 hover:text-navy transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-navy rounded-lg">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-medium text-navy mb-1">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-navy/70 hover:text-navy transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-navy rounded-lg">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-medium text-navy mb-1">Address</h3>
                <p className="text-navy/70">{contactInfo.address}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-navy rounded-lg">
                <Clock className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-medium text-navy mb-1">Office Hours</h3>
                <p className="text-navy/70">{contactInfo.hours}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-semibold text-navy mb-2">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-green-800 mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-green-700">
                  Thank you for contacting us. We&apos;ll respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select name="subject" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="consultation">Schedule Consultation</SelectItem>
                      {practiceAreas.slice(0, 6).map(area => (
                        <SelectItem key={area.id} value={area.slug}>
                          {area.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    placeholder="Please describe how we can help you..."
                  />
                </div>

                <div className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-gold hover:bg-gold-dark text-card"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="aspect-square lg:aspect-[4/3] bg-stone rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.741064066783!2d73.50876797496554!3d4.175496395850088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7e5f2e6d2c4d%3A0x5a9c0e5e3c3b3c3b!2sMal%C3%A9%2C%20Maldives!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>

            {/* Quick Links */}
            <div className="bg-stone rounded-lg p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link 
                  href="/contact/book-consultation"
                  className="flex items-center justify-between p-4 bg-card rounded-md hover:bg-gold/10 transition-colors group"
                >
                  <span className="font-medium text-navy">Book a Consultation</span>
                  <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/team"
                  className="flex items-center justify-between p-4 bg-card rounded-md hover:bg-gold/10 transition-colors group"
                >
                  <span className="font-medium text-navy">Find a Lawyer</span>
                  <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/careers"
                  className="flex items-center justify-between p-4 bg-card rounded-md hover:bg-gold/10 transition-colors group"
                >
                  <span className="font-medium text-navy">View Career Opportunities</span>
                  <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  )
}
