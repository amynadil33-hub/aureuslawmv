import { Hero } from '@/components/home/hero'
import { PracticeAreasSection } from '@/components/home/practice-areas-section'
import { AboutSection } from '@/components/home/about-section'
import { TeamSection } from '@/components/home/team-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { InsightsSection } from '@/components/home/insights-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreasSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <InsightsSection />
      <CTASection />
    </>
  )
}
