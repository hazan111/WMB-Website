import { useState, useMemo, useCallback } from 'react'
import { Check, Zap, Building2, Crown } from 'lucide-react'
import PricingComparison from './PricingComparison'
import DemoModal from '../ui/DemoModal'

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const plans = useMemo(() => [
    {
      name: 'Başlangıç',
      icon: Zap,
      description: 'Küçük ölçekli işletmeler için',
      monthlyPrice: 299,
      yearlyPrice: 2990, // 299 x 10 (2 ay ücretsiz)
      features: [
        '1 Şirket',
        '3 Şube',
        'Sınırsız Kullanıcı',
        'Temel Raporlama',
        'Mobil Uygulama',
        'E-posta Desteği'
      ],
      popular: false
    },
    {
      name: 'Profesyonel',
      icon: Building2,
      description: 'Büyüyen işletmeler için',
      monthlyPrice: 599,
      yearlyPrice: 5990, // 599 x 10 (2 ay ücretsiz)
      features: [
        '3 Şirket',
        '10 Şube',
        'Sınırsız Kullanıcı',
        'Gelişmiş Raporlama',
        'Mobil Uygulama',
        'Öncelikli Destek',
        'API Erişimi (plan kapsamına göre)',
        'Talebe bağlı entegrasyonlar (tekliflendirilir)'
      ],
      popular: true
    },
    {
      name: 'Kurumsal',
      icon: Crown,
      description: 'Çok şubeli ve büyük organizasyonlar için',
      monthlyPrice: 1299,
      yearlyPrice: 12990, // 1299 x 10 (2 ay ücretsiz)
      features: [
        'Sınırsız Şirket',
        'Sınırsız Şube',
        'Sınırsız Kullanıcı',
        'İhtiyaca özel rapor çıktıları',
        'Mobil Uygulama',
        '7/24 Destek',
        'API Erişimi (plan kapsamına göre)',
        'Talebe bağlı entegrasyonlar (tekliflendirilir)',
        'Özel Eğitim',
        'Dedike Hesap Yöneticisi'
      ],
      popular: false
    }
  ], [])

  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0
    }).format(price)
  }, [])

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
            İşletmenize Uygun Planı Seçin
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Öngörülebilir maliyetlerle ölçeklenebilir çözümler. Yıllık ödemede %20 tasarruf edin ve işletmenizin büyümesine odaklanın.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 relative">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-slate-500'}`}>
              Aylık
            </span>
            <label className="relative inline-flex items-center cursor-pointer" aria-label="Ödeme dönemi seçimi: Aylık veya Yıllık">
              <input
                type="checkbox"
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
                className="sr-only peer"
                aria-label={isYearly ? 'Yıllık ödeme seçili' : 'Aylık ödeme seçili'}
              />
              <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2 peer-focus:ring-offset-slate-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Yıllık
            </span>
            <span className={`ml-2 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full transition-opacity duration-200 ${
              isYearly ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              %20 Tasarruf
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const monthlyEquivalent = isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice
            
            return (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all ${
                  plan.popular
                    ? 'bg-[#1e293b]/80 border-blue-500/50 shadow-lg shadow-blue-500/20 scale-105'
                    : 'bg-[#1e293b]/60 border-slate-700/50 hover:border-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    En Popüler
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      plan.popular ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-slate-800/50 border border-slate-700/50'
                    }`}>
                      <Icon className={`w-6 h-6 ${plan.popular ? 'text-blue-400' : 'text-slate-300'}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">{plan.name}</h3>
                      <p className="text-xs text-slate-500">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">
                        {formatPrice(price)}
                      </span>
                      <span className="text-slate-500 text-sm">
                        /{isYearly ? 'yıl' : 'ay'}
                      </span>
                    </div>
                    {isYearly ? (
                      <p className="text-xs text-slate-500 mt-1">
                        Aylık {formatPrice(Math.round(monthlyEquivalent))} ödeme
                      </p>
                    ) : (
                      <p className="text-xs text-slate-500 mt-1">
                        Yıllık {formatPrice(plan.yearlyPrice)} ödeme
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-slate-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className={`w-full py-3 rounded-xl font-medium text-sm transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30 active:scale-95'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-white/20 active:scale-95'
                    }`}
                    aria-label={`${plan.name} planını seç - Demo talep et`}
                  >
                    {plan.popular ? 'En Popüler Planı Seç' : 'Planı Seç ve Başla'}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-2">
                    Kurulum desteği dahildir.
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Decision Helper */}
        <div className="mt-16 mb-12">
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Hangi plan size uygun?
            </h3>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              İşletmenizin şube sayısı, kullanıcı ihtiyacı ve raporlama gereksinimlerine göre planınızı kolayca seçebilirsiniz.
            </p>
          </div>
        </div>

        {/* Pricing Comparison Table */}
        <div id="pricing-comparison">
          <PricingComparison />
        </div>

        {/* Risk Reduction Copy */}
        <div className="mt-16 text-center">
          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Tüm planlar 14 gün ücretsiz deneme içerir. İstediğiniz zaman iptal edebilirsiniz. Kredi kartı gerekmez.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#faq" className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-2 py-1">
              Sıkça Sorulan Sorular →
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a href="#pricing-comparison" className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-2 py-1">
              Plan Karşılaştırması →
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-2 py-1">
              Kurumsal Teklif İste →
            </a>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}

export default PricingSection

