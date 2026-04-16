'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { practiceAreas, sectors } from '@/lib/demo-data'

const mainNavItems = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: practiceAreas.filter(p => p.is_featured).map(p => ({
      label: p.name,
      href: `/services/${p.slug}`,
      description: p.short_description
    }))
  },
  {
    label: 'Sectors',
    href: '/sectors',
    children: sectors.filter(s => s.is_featured).map(s => ({
      label: s.name,
      href: `/sectors/${s.slug}`,
      description: s.short_description
    }))
  },
  { label: 'Team', href: '/team' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-navy text-navy-light">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+9603001000" className="flex items-center gap-2 text-stone-light/80 hover:text-gold transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span>+960 300 1000</span>
              </a>
              <a href="mailto:contact@aureuslaw.mv" className="flex items-center gap-2 text-stone-light/80 hover:text-gold transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span>contact@aureuslaw.mv</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/portal/login" className="text-stone-light/80 hover:text-gold transition-colors">
                Lawyer Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-card/95 backdrop-blur-md shadow-sm' : 'bg-card'
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wide text-navy">
                  AUREUS
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
                  Law Firm
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-gold'
                        : 'text-navy hover:text-gold'
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-4 w-4" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-80 bg-card rounded-md shadow-lg border border-border overflow-hidden"
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block p-3 rounded-md hover:bg-stone transition-colors"
                            >
                              <div className="font-medium text-navy text-sm">
                                {child.label}
                              </div>
                              {child.description && (
                                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ))}
                          <Link
                            href={item.href}
                            className="block p-3 mt-2 border-t border-border text-sm text-gold hover:text-gold-dark transition-colors"
                          >
                            View all {item.label.toLowerCase()} →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Button
                asChild
                className="hidden lg:inline-flex bg-gold hover:bg-gold-dark text-card"
              >
                <Link href="/contact/book-consultation">Book Consultation</Link>
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-navy"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4">
                <nav className="flex flex-col gap-1">
                  {mainNavItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block py-3 text-base font-medium transition-colors',
                          pathname === item.href
                            ? 'text-gold'
                            : 'text-navy hover:text-gold'
                        )}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t border-border">
                    <Link
                      href="/portal/login"
                      className="block py-3 text-base text-muted-foreground hover:text-navy transition-colors"
                    >
                      Lawyer Portal
                    </Link>
                    <Button
                      asChild
                      className="w-full mt-4 bg-gold hover:bg-gold-dark text-card"
                    >
                      <Link href="/contact/book-consultation">Book Consultation</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
