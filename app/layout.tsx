import type { Metadata } from 'next'
import { Montserrat, EB_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
})

const ebGaramond = EB_Garamond({ 
  subsets: ["latin"],
  variable: '--font-eb-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aureus Law | Strategic Legal Counsel for the Maldives',
  description: 'Aureus Law is a premier Maldivian law firm providing expert legal counsel to individuals, businesses, and institutions across corporate law, litigation, family matters, and more.',
  keywords: ['Maldives law firm', 'legal counsel Maldives', 'corporate law', 'litigation', 'family law', 'Aureus Law'],
  authors: [{ name: 'Aureus Law' }],
  openGraph: {
    title: 'Aureus Law | Strategic Legal Counsel for the Maldives',
    description: 'Premier Maldivian law firm providing expert legal counsel to individuals, businesses, and institutions.',
    url: 'https://aureuslaw.mv',
    siteName: 'Aureus Law',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aureus Law | Strategic Legal Counsel for the Maldives',
    description: 'Premier Maldivian law firm providing expert legal counsel.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${ebGaramond.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
