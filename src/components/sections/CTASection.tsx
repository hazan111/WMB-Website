import { memo, useState } from 'react'
import DemoModal from '../ui/DemoModal'

const CTASection = memo(() => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
            İşletmenizi Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-slate-300 mb-4 text-lg max-w-2xl mx-auto">
            Operasyonel verimliliğinizi artırın, maliyetlerinizi optimize edin ve müşteri deneyimini geliştirin.
          </p>
          <p className="text-slate-500 mb-10 text-sm">
            14 gün ücretsiz deneme ile tüm özellikleri test edin. Kredi kartı gerekmez.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl text-base font-medium hover:bg-blue-500 transition-all active:scale-95 text-center shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 min-h-[52px]"
              aria-label="Demo talep formunu aç"
            >
              Demo Talep Et
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a 
              href="#pricing" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-800/80 text-white border border-slate-700 rounded-xl text-base font-medium hover:bg-slate-700/80 hover:border-slate-600 transition-all active:scale-95 text-center backdrop-blur-sm min-h-[52px] flex items-center justify-center"
            >
              Fiyatlandırmayı İncele
            </a>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <p className="text-xs text-slate-500 mb-4">Kurumsal çözümler için:</p>
            <a 
              href="#" 
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium inline-flex items-center gap-2"
            >
              Özel Teklif İsteyin
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  )
})

CTASection.displayName = 'CTASection'

export default CTASection
