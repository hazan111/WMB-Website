import { lazy, Suspense, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/sections/HeroSection'
import TargetAudienceSection from '../components/sections/TargetAudienceSection'
import SystemReliabilitySection from '../components/sections/SystemReliabilitySection'
import SimpleDashboardSection from '../components/sections/SimpleDashboardSection'
import SectionSkeleton from '../components/ui/SectionSkeleton'

// Lazy load below-the-fold sections
// Temporarily using CustomPricingSection instead of PricingSection
// TO RE-ENABLE PRICING: Replace CustomPricingSection with PricingSection below
const CustomPricingSection = lazy(() => import('../components/sections/CustomPricingSection'))
// const PricingSection = lazy(() => import('../components/sections/PricingSection'))
const FAQSection = lazy(() => import('../components/sections/FAQSection'))
const CTASection = lazy(() => import('../components/sections/CTASection'))

function LandingPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className="min-h-screen overflow-x-hidden">
        {/* Above-the-fold sections: EAGER loading */}
        <HeroSection />
        <TargetAudienceSection />
        <SystemReliabilitySection />
        <SimpleDashboardSection />
        
        {/* Below-the-fold sections: LAZY loading */}
        <Suspense fallback={<SectionSkeleton />}>
          <CustomPricingSection />
          {/* <PricingSection /> */}
          <FAQSection />
          <CTASection />
        </Suspense>
      </div>
    </Layout>
  )
}

export default LandingPage
