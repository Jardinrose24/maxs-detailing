import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { PaintProtectionSection } from "@/components/home/paint-protection-section"
import { PaintCorrectionSection } from "@/components/home/paint-correction-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <PaintProtectionSection />
      <PaintCorrectionSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
