import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react'
import { contactInfo, practiceAreas } from '@/lib/demo-data'

const footerLinks = {
  services: practiceAreas.slice(0, 6).map(p => ({
    label: p.name,
    href: `/services/${p.slug}`
  })),
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Lawyer Portal', href: '/portal/login' },
  ]
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-stone-light">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wide text-stone-light">
                  AUREUS
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
                  Law Firm
                </span>
              </div>
            </Link>
            <p className="text-stone-light/70 text-sm leading-relaxed mb-6">
              Strategic legal counsel for individuals, businesses, and institutions across the Maldives.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/aureuslaw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-light rounded-md hover:bg-gold hover:text-navy transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/aureuslaw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-light rounded-md hover:bg-gold hover:text-navy transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6 text-stone-light">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-light/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gold hover:text-gold-light transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6 text-stone-light">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-light/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6 text-stone-light">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start gap-3 text-sm text-stone-light/70 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-sm text-stone-light/70 hover:text-gold transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-light/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="text-sm text-stone-light/70 pl-7">
                {contactInfo.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-stone-light/60">
              © {currentYear} Aureus Law. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-stone-light/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
