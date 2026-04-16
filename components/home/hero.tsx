'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroContent } from '@/lib/demo-data'

const stats = [
  { icon: Award, value: '20+', label: 'Years of Excellence' },
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Clock, value: '24/7', label: 'Client Support' },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-stone-light via-stone to-stone-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23203151' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full mb-6">
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-sm font-medium text-navy">Maldives Premier Law Firm</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-navy leading-[1.1] text-balance">
              {heroContent.headline}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {heroContent.subheadline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-card text-base px-8"
              >
                <Link href={heroContent.cta_link}>
                  {heroContent.cta_text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 border-navy/20 hover:bg-navy hover:text-card"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 bg-navy/5 rounded-lg">
                      <stat.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-medium text-navy">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-gold" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-gold" />
                  </div>
                  <div className="text-center p-8 relative z-10">
                    <div className="font-serif text-4xl font-semibold text-stone-light tracking-wide mb-2">
                      AUREUS
                    </div>
                    <div className="text-sm tracking-[0.3em] text-gold uppercase">
                      Law Firm
                    </div>
                    <div className="mt-6 text-stone-light/60 text-sm">
                      Excellence in Maldivian Law
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-stone rounded-lg">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Practice Areas
                    </div>
                    <div className="text-2xl font-serif font-medium text-navy">16+</div>
                  </div>
                  <div className="p-4 bg-stone rounded-lg">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Legal Experts
                    </div>
                    <div className="text-2xl font-serif font-medium text-navy">8</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gold text-card p-4 rounded-xl shadow-lg">
                <div className="text-xs font-medium uppercase tracking-wider mb-1">
                  Established
                </div>
                <div className="text-2xl font-serif font-semibold">2004</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
