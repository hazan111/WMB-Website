import { memo } from 'react'

const CTASection = memo(() => {
  return (
    <section className="py-32 relative">
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
          Başlamaya hazır mısınız?
        </h2>
        <p className="text-slate-400 mb-10 text-lg">
          Web, mobil ve backend - tam entegre restoran yönetim sistemi. Modern teknolojilerle güçlendirilmiş çözüm.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#pricing" className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-500 transition-colors text-center shadow-lg shadow-blue-500/20">
            Fiyatlandırmayı Gör
          </a>
        </div>
      </div>
    </section>
  )
})

CTASection.displayName = 'CTASection'

export default CTASection
