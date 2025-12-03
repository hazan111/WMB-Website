import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'

// Lazy load section components for better code splitting
const PhoneMockupSection = lazy(() => import('./components/sections/PhoneMockupSection'))
const WebSection = lazy(() => import('./components/sections/WebSection'))
const BentoGridSection = lazy(() => import('./components/sections/BentoGridSection'))
const PricingSection = lazy(() => import('./components/sections/PricingSection'))
const CTASection = lazy(() => import('./components/sections/CTASection'))

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <Layout>
      <div className="min-h-screen overflow-x-hidden">
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <PhoneMockupSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WebSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BentoGridSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTASection />
        </Suspense>
      </div>
    </Layout>
  )
}

export default App

