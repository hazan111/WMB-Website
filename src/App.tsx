import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import PhoneMockupSection from './components/sections/PhoneMockupSection'
import SectionSkeleton from './components/ui/SectionSkeleton'

// Lazy load below-the-fold sections for better code splitting
const WebSection = lazy(() => import('./components/sections/WebSection'))
const BentoGridSection = lazy(() => import('./components/sections/BentoGridSection'))
const PricingSection = lazy(() => import('./components/sections/PricingSection'))
const CTASection = lazy(() => import('./components/sections/CTASection'))

function App() {
  return (
    <Layout>
      <div className="min-h-screen overflow-x-hidden">
        {/* Above-the-fold sections: EAGER loading */}
        <HeroSection />
        <PhoneMockupSection />
        
        {/* Below-the-fold sections: LAZY loading with single Suspense boundary */}
        <Suspense fallback={<SectionSkeleton />}>
          <WebSection />
          <BentoGridSection />
          <PricingSection />
          <CTASection />
        </Suspense>
      </div>
    </Layout>
  )
}

export default App

