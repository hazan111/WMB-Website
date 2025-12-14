import { useState } from 'react'
import DemoModal from '../ui/DemoModal'

/**
 * Custom Pricing Section - Temporarily replaces PricingSection
 * This section explains custom, consultation-based pricing without showing fixed prices.
 * 
 * TO RE-ENABLE PRICING: 
 * 1. Comment out CustomPricingSection import in LandingPage.tsx
 * 2. Uncomment PricingSection import in LandingPage.tsx
 * 3. Replace <CustomPricingSection /> with <PricingSection />
 */
const CustomPricingSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
            İşletmenize Özel Fiyatlandırma
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Fiyatlandırma; şube sayısı, masa yapısı ve operasyonel ihtiyaçlara göre belirlenir.
          </p>
        </div>

        {/* Custom Pricing Explanation */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-8 md:p-12 mb-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Her İşletme Farklıdır
              </h3>
              <p className="text-slate-300 leading-relaxed">
                WMB Tracker, işletmenizin özel ihtiyaçlarına göre özelleştirilebilir bir çözümdür. 
                Şube sayınız, masa kapasiteniz, entegrasyon gereksinimleriniz ve destek seviyesi 
                fiyatlandırmayı etkiler.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Şube Sayısı</h4>
                <p className="text-xs text-slate-400">Operasyonel ölçeğinize göre</p>
              </div>

              <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Masa Yapısı</h4>
                <p className="text-xs text-slate-400">Kapasite ve operasyon modeli</p>
              </div>

              <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Operasyonel İhtiyaçlar</h4>
                <p className="text-xs text-slate-400">Entegrasyonlar ve özelleştirmeler</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl text-base font-medium hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 min-h-[52px]"
            aria-label="Demo talep formunu aç"
          >
            Demo Talep Et
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <a
            href="mailto:info@wmbyazilim.com"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800/80 text-white border border-white/20 rounded-xl text-base font-medium hover:bg-slate-700/80 hover:border-white/30 transition-all active:scale-95 backdrop-blur-sm min-h-[52px] flex items-center justify-center"
          >
            Bizimle İletişime Geçin
          </a>
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-slate-400 mt-8">
          14 gün ücretsiz deneme. Kredi kartı gerekmez. İstediğiniz zaman iptal edebilirsiniz.
        </p>
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}

export default CustomPricingSection
