import { memo, useState } from 'react'
import { 
  BarChart3, 
  Package, 
  Users, 
  Building2,
  Smartphone,
  UtensilsCrossed,
  ShoppingCart,
  CreditCard
} from 'lucide-react'

type PersonaType = 'owner' | 'waiter'

const PersonaFeaturesSection = memo(() => {
  const [activePersona, setActivePersona] = useState<PersonaType>('owner')

  const ownerFeatures = [
    {
      icon: BarChart3,
      title: 'Detaylı Raporlama ve Analiz',
      description: 'Günlük, haftalık, aylık satış raporları. Ürün performans analizi, kategori bazlı gelir dağılımı ve kar marjı hesaplamaları.'
    },
    {
      icon: Package,
      title: 'Stok Yönetimi',
      description: 'Otomatik stok takibi, düşük stok uyarıları ve tedarikçi yönetimi ile stok maliyetlerinizi optimize edin.'
    },
    {
      icon: Users,
      title: 'Kullanıcı ve Rol Yönetimi',
      description: 'Personel yetkilendirme, şube bazlı kullanıcı atamaları ve detaylı erişim kontrolü ile operasyonel güvenliği sağlayın.'
    },
    {
      icon: Building2,
      title: 'Şube Karşılaştırma',
      description: 'Birden fazla şubenizin performansını karşılaştırın, en iyi uygulamaları belirleyin ve verimliliği artırın.'
    }
  ]

  const waiterFeatures = [
    {
      icon: Smartphone,
      title: 'Mobil Sipariş Alma',
      description: 'Mobil uygulama üzerinden hızlı sipariş oluşturun. Ürün varyantları, notlar ve özel istekleri kolayca ekleyin.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Masa Durumu Takibi',
      description: 'Anlık masa durumu görünümü. Hangi masaların dolu, boş veya rezerve olduğunu gerçek zamanlı takip edin.'
    },
    {
      icon: ShoppingCart,
      title: 'Sipariş Takibi',
      description: 'Siparişlerin durumunu mutfak ile senkronize takip edin. Hazırlanan siparişleri anında görün.'
    },
    {
      icon: CreditCard,
      title: 'Çoklu Ödeme Yöntemleri',
      description: 'Nakit, kredi kartı, mobil ödeme ve QR kod ile hızlı ödeme işlemleri. Sepet bölme ve hesap birleştirme seçenekleri.'
    }
  ]

  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
            Kimler İçin?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            İşletmenizin farklı ihtiyaçlarına göre tasarlanmış özellikler.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-slate-800/50 border border-slate-700/50 p-1.5 gap-2">
            <button
              onClick={() => setActivePersona('owner')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all min-h-[44px] ${
                activePersona === 'owner'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
              aria-selected={activePersona === 'owner'}
              aria-controls="persona-content"
            >
              İşletme Sahibi / Yönetici
            </button>
            <button
              onClick={() => setActivePersona('waiter')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all min-h-[44px] ${
                activePersona === 'waiter'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
              aria-selected={activePersona === 'waiter'}
              aria-controls="persona-content"
            >
              Garson / Operasyon
            </button>
          </div>
        </div>

        {/* Content */}
        <div id="persona-content" role="tabpanel">
          {activePersona === 'owner' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ownerFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {waiterFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
})

PersonaFeaturesSection.displayName = 'PersonaFeaturesSection'

export default PersonaFeaturesSection
