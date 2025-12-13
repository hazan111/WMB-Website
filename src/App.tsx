/**
 * WMB Tracker Landing Page
 * 
 * Changelog (Latest Updates):
 * - Hero section: Updated with corporate Turkish copy, new CTA strategy (Demo Talep Et, Fiyatlandırmayı İncele, WhatsApp)
 * - Added Demo Modal component with form validation
 * - Added Trust Section (Güvenilir ve Ölçeklenebilir) with client logos
 * - Added Persona-based Features Section (İşletme Sahibi/Garson tabs)
 * - Added FAQ Section with accordion
 * - Updated Pricing Section: clearer descriptions, comparison table, improved clarity
 * - Updated Footer: corporate content, company info, legal links (KVKK, Gizlilik Politikası)
 * - Accessibility improvements: button sizes (min 44px), aria-labels, better contrast
 * - All messaging updated to formal, corporate Turkish tone
 * - Performance: Existing reduced-motion and mobile fallback support maintained
 */

import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import TargetAudienceSection from './components/sections/TargetAudienceSection'
import SystemReliabilitySection from './components/sections/SystemReliabilitySection'
import PhoneMockupSection from './components/sections/PhoneMockupSection'
import SectionSkeleton from './components/ui/SectionSkeleton'

// Lazy load below-the-fold sections for better code splitting
const WebSection = lazy(() => import('./components/sections/WebSection'))
const PricingSection = lazy(() => import('./components/sections/PricingSection'))
const FAQSection = lazy(() => import('./components/sections/FAQSection'))
const CTASection = lazy(() => import('./components/sections/CTASection'))

function App() {
  return (
    <Layout>
      <div className="min-h-screen overflow-x-hidden">
        {/* Above-the-fold sections: EAGER loading */}
        <HeroSection />
        <TargetAudienceSection />
        <SystemReliabilitySection />
        <PhoneMockupSection />
        
        {/* Below-the-fold sections: LAZY loading with single Suspense boundary */}
        <Suspense fallback={<SectionSkeleton />}>
          <WebSection />
          <PricingSection />
          <FAQSection />
          <CTASection />
        </Suspense>
      </div>
    </Layout>
  )
}

export default App

