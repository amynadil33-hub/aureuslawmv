'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Scale, Shield, Heart, Users, Home, Landmark, MessageSquare } from 'lucide-react'
import { Section, SectionHeader, Container } from '@/components/ui/section'
import { practiceAreas } from '@/lib/demo-data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Scale,
  Shield,
  Heart,
  Users,
  Home,
  Landmark,
  MessageSquare,
}

export function PracticeAreasSection() {
  const featured = practiceAreas.filter(p => p.is_featured).slice(0, 6)

  return (
    <Section>
      <Container>
        <SectionHeader
          subtitle="Practice Areas"
          title="Comprehensive Legal Services"
          description="From corporate transactions to personal matters, our team provides expert counsel across a full spectrum of legal disciplines."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((area, index) => {
            const Icon = iconMap[area.icon_name || 'Scale'] || Scale
            
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/services/${area.slug}`}>
                  <div className="group h-full p-6 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-stone rounded-lg group-hover:bg-gold/10 transition-colors">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg font-medium text-navy group-hover:text-gold transition-colors">
                          {area.name}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {area.short_description}
                        </p>
                        <div className="mt-4 flex items-center text-sm font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
          >
            View All Practice Areas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
