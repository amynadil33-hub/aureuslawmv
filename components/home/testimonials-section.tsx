'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Section, SectionHeader, Container } from '@/components/ui/section'
import { testimonials } from '@/lib/demo-data'

export function TestimonialsSection() {
  const featured = testimonials.filter(t => t.is_featured).slice(0, 3)

  return (
    <Section variant="navy">
      <Container>
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="We measure our success by the trust and satisfaction of those we serve."
          variant="light"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full p-6 bg-navy-light/50 rounded-xl border border-navy-light">
                <Quote className="h-8 w-8 text-gold/30 mb-4" />
                <blockquote className="text-stone-light/90 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-navy-light">
                  <div className="font-medium text-stone-light">
                    {testimonial.client_name}
                  </div>
                  <div className="text-sm text-stone-light/60">
                    {testimonial.client_title}
                    {testimonial.company_name && `, ${testimonial.company_name}`}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
