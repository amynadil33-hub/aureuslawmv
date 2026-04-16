'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { Section, SectionHeader, Container } from '@/components/ui/section'
import { articles } from '@/lib/demo-data'
import { formatDate } from '@/lib/utils'

export function InsightsSection() {
  const featured = articles.filter(a => a.status === 'published').slice(0, 3)

  return (
    <Section variant="stone">
      <Container>
        <SectionHeader
          subtitle="Latest Insights"
          title="Legal Updates & Analysis"
          description="Stay informed with our latest articles on legal developments, industry trends, and practical guidance."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/insights/${article.slug}`}>
                <article className="group h-full bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-2xl text-gold/30">Aureus</span>
                    </div>
                    {article.category && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold text-card text-xs font-medium rounded-full">
                          {article.category.name}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-lg font-medium text-navy group-hover:text-gold transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        {article.published_at && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(article.published_at)}
                          </span>
                        )}
                        {article.read_time_minutes && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {article.read_time_minutes} min
                          </span>
                        )}
                      </div>
                    </div>

                    {article.author && (
                      <div className="mt-3 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center">
                          <User className="h-3.5 w-3.5 text-gold" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {article.author.full_name}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
          >
            View All Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
