import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { WhyMeSection } from '@/components/sections/WhyMeSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CalendlySection } from '@/components/sections/CalendlySection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <WhyMeSection />
        <PricingSection />
        <FAQSection />
        <CalendlySection />
      </main>
      <Footer />
    </>
  )
}