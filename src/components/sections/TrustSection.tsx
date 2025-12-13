import { memo } from 'react'
import { Clock, Shield, HeadphonesIcon } from 'lucide-react'

const TrustSection = memo(() => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
            Güvenilir ve Ölçeklenebilir
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            İşletmenizin büyümesine uyum sağlayan güvenli ve kesintisiz hizmet.
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Gerçek Zamanlı Yönetim</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tüm operasyonlarınızı anlık olarak takip edin. Sipariş, stok ve ödeme bilgileri gerçek zamanlı senkronize olur.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Güvenli Veri</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              256-bit SSL şifreleme ile verileriniz korunur. KVKK uyumlu veri saklama ve yedekleme sistemi.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <HeadphonesIcon className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Kurulum ve Destek</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hızlı kurulum süreci ve 7/24 teknik destek. İşletmenizin ihtiyaçlarına göre özelleştirilmiş eğitim programları.
            </p>
          </div>
        </div>

        {/* Referanslar / Client Logos */}
        <div className="border-t border-slate-800 pt-12">
          <h3 className="text-lg font-medium text-slate-400 text-center mb-8">
            Güvenle Tercih Ediyorlar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {/* Placeholder logos - gray boxes */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-full max-w-[120px] h-16 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-xs text-slate-600 font-medium">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

TrustSection.displayName = 'TrustSection'

export default TrustSection
