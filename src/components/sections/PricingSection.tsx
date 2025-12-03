import { useState, useMemo, useCallback } from 'react'
import { Check, Zap, Building2, Crown } from 'lucide-react'

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = useMemo(() => [
    {
      name: 'Başlangıç',
      icon: Zap,
      description: 'Küçük işletmeler için ideal',
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
        'API Erişimi',
        'Özel Entegrasyonlar'
      ],
      popular: true
    },
    {
      name: 'Kurumsal',
      icon: Crown,
      description: 'Büyük organizasyonlar için',
      monthlyPrice: 1299,
      yearlyPrice: 12990, // 1299 x 10 (2 ay ücretsiz)
      features: [
        'Sınırsız Şirket',
        'Sınırsız Şube',
        'Sınırsız Kullanıcı',
        'Özel Raporlama',
        'Mobil Uygulama',
        '7/24 Destek',
        'API Erişimi',
        'Özel Entegrasyonlar',
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
            Basit ve şeffaf fiyatlandırma
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            İhtiyacınıza uygun planı seçin. Yıllık ödemede %20 tasarruf edin.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 relative">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-slate-500'}`}>
              Aylık
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
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
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-medium text-sm transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    Planı Seç
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">
            Tüm planlar 14 gün ücretsiz deneme içerir. İstediğiniz zaman iptal edebilirsiniz.
          </p>
          <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            SSS'yi görüntüle →
          </a>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

