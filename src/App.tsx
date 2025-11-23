import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import PhoneMockupSection from './components/sections/PhoneMockupSection'
import WebSection from './components/sections/WebSection'
import BentoGridSection from './components/sections/BentoGridSection'
import PricingSection from './components/sections/PricingSection'
import CTASection from './components/sections/CTASection'

function App() {
  return (
    <Layout>
      <div className="min-h-screen overflow-x-hidden">
        <HeroSection />
        <PhoneMockupSection />
        <WebSection />
        <BentoGridSection />
        <PricingSection />
        <CTASection />
      </div>
    </Layout>
  )
}

export default App

