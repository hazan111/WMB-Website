import { memo } from 'react'
import { Check } from 'lucide-react'

const SystemReliabilitySection = memo(() => {
  return (
    <section className="py-20 md:py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white mb-4">
            Güvenilir, ölçeklenebilir ve desteklenen bir sistem
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            WMB Adisyon, restoran operasyonlarını güvenli ve sürdürülebilir şekilde yönetmek için tasarlanmıştır.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {/* Card 1: Güvenli Altyapı */}
          <div className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-slate-600 transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Güvenli Altyapı
            </h3>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              Verileriniz modern altyapı üzerinde güvenli şekilde saklanır ve düzenli olarak yedeklenir.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Yetkilendirme ve rol bazlı erişim</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Güvenli veri saklama</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Düzenli yedekleme</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Kurulum ve Destek */}
          <div className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-slate-600 transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Kurulum ve Destek
            </h3>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              Sisteme hızlı geçiş ve sorunsuz kullanım için kurulum ve destek süreci sunulur.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Kurulum desteği</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Eğitim ve onboarding</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Teknik destek kanalları</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Ölçeklenebilir Yapı */}
          <div className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-slate-600 transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Ölçeklenebilir Yapı
            </h3>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              İşletmeniz büyüdükçe sistem de sizinle birlikte büyür.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Çoklu şirket ve şube yapısı</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Kullanıcı ve rol esnekliği</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 text-base leading-relaxed">Artan operasyonlara uyum</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Reference Strip */}
        <div className="border-t border-slate-800 pt-12">
          <h3 className="text-lg md:text-xl font-medium text-slate-300 text-center mb-8">
            Bize güvenen işletmeler
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 items-center justify-items-center mb-4 max-w-md mx-auto">
            <img
              src="/ortakoy_logo.jpeg"
              alt="Ortaköy Logo"
              className="w-full max-w-[180px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/pastaci_naim_logo.jpeg"
              alt="Pastacı Naim Logo"
              className="w-full max-w-[180px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  )
})

SystemReliabilitySection.displayName = 'SystemReliabilitySection'

export default SystemReliabilitySection

