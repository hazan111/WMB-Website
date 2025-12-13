import { memo } from 'react'
import { Check } from 'lucide-react'

const TargetAudienceSection = memo(() => {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white mb-4">
            Farklı roller için tek çözüm
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            WMB Adisyon, işletme yönetimi ve saha operasyonlarını aynı sistem üzerinden yönetmek için tasarlanmıştır.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Persona 1: İşletme Sahibi / Yönetici */}
          <div className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-slate-600 transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              İşletme Sahipleri ve Yöneticiler için
            </h3>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              İşletmenizin tüm operasyonlarını tek panel üzerinden izleyin ve yönetin. Gerçek zamanlı verilerle daha doğru kararlar alın.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Günlük ve aylık ciro takibi</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Şube bazlı performans karşılaştırmaları</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Ürün ve kategori satış analizleri</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Stok ve maliyet kontrolü</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Kullanıcı, rol ve yetki yönetimi</span>
              </li>
            </ul>
          </div>

          {/* Persona 2: Garson / Operasyon */}
          <div className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-slate-600 transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Garsonlar ve Operasyon Ekipleri için
            </h3>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              Sahada hızlı, hatasız ve pratik bir kullanım sunan mobil uygulama ile servis süreçlerini kolaylaştırın.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Mobil cihaz üzerinden hızlı sipariş oluşturma</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Masa durumu ve aktif sipariş takibi</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Ürün bazlı ve parçalı ödeme desteği</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Sipariş ve mutfak süreçlerinde anlık güncellemeler</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Hata riskini azaltan sade arayüz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
})

TargetAudienceSection.displayName = 'TargetAudienceSection'

export default TargetAudienceSection

