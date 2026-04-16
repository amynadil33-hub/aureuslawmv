'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section, SectionHeader } from '@/components/ui/section'
import { blogPosts, practiceAreas, teamMembers } from '@/lib/demo-data'
import { formatDate } from '@/lib/utils'

const categories = ['All', ...new Set(blogPosts.map(p => p.category))]

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory && post.status === 'published'
  })

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

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
              Insights & Publications
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 text-balance">
              Legal Perspectives & Analysis
            </h1>
            <p className="text-xl text-stone-light/80 leading-relaxed">
              Expert commentary on legal developments, industry trends, and matters affecting 
              business and society in the Maldives and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <Section className="pb-0">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-navy hover:bg-navy-dark' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Post */}
      {featuredPost && (
        <Section className="pb-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 bg-card rounded-xl border border-border overflow-hidden"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto bg-stone">
              {featuredPost.featured_image ? (
                <Image
                  src={featuredPost.featured_image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
                  <span className="font-serif text-4xl text-navy/20">Aureus</span>
                </div>
              )}
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-gold/10 text-gold hover:bg-gold/20">
                  Featured
                </Badge>
                <Badge variant="outline">{featuredPost.category}</Badge>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-4 text-balance">
                <Link href={`/insights/${featuredPost.slug}`} className="hover:text-gold transition-colors">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(featuredPost.published_at || featuredPost.created_at)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.read_time} min read
                </span>
              </div>
              <Button asChild className="w-fit bg-navy hover:bg-navy-dark">
                <Link href={`/insights/${featuredPost.slug}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.article>
        </Section>
      )}

      {/* Posts Grid */}
      <Section className="pt-8">
        {remainingPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post, idx) => {
              const author = teamMembers.find(m => m.id === post.author_id)
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group"
                >
                  <Link href={`/insights/${post.slug}`}>
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-stone mb-4">
                      {post.featured_image ? (
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
                          <span className="font-serif text-2xl text-navy/20">Aureus</span>
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                    <Link href={`/insights/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.published_at || post.created_at)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.read_time} min
                    </span>
                  </div>
                </motion.article>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-navy text-stone-light">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Stay Informed
          </h2>
          <p className="text-stone-light/70 mb-8">
            Subscribe to our newsletter for the latest legal insights and updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-navy-light border-navy-light text-stone-light placeholder:text-stone-light/50"
            />
            <Button className="bg-gold hover:bg-gold-dark text-navy whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </Section>
    </main>
  )
}
