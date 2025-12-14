import { useState } from 'react'
import { 
  Building2, 
  BarChart3, 
  Package, 
  Users,
  Smartphone,
  LayoutGrid,
  RefreshCw,
  CreditCard
} from 'lucide-react'

type PillarType = 'web' | 'mobile'

interface PillarSwitcherProps {
  onPillarChange?: (pillar: PillarType) => void
}

const PillarSwitcher = ({ onPillarChange }: PillarSwitcherProps) => {
  const [activePillar, setActivePillar] = useState<PillarType>('web')

  const handlePillarChange = (pillar: PillarType) => {
    setActivePillar(pillar)
    onPillarChange?.(pillar)
  }

  const webHighlights = [
    {
      icon: Building2,
      title: 'Şube & Şirket Yönetimi',
      description: 'Tüm şube ve franchise ağını tek merkezden, tek ekrandan yönetin.'
    },
    {
      icon: BarChart3,
      title: 'Raporlama & Analiz',
      description: 'Ciro, satış ve performans verilerini gerçek zamanlı izleyin.'
    },
    {
      icon: Package,
      title: 'Stok & Menü Kontrolü',
      description: 'Reçete bazlı maliyet takibi ile stok kaçağını önleyin.'
    },
    {
      icon: Users,
      title: 'Kullanıcı & Yetki Yönetimi',
      description: 'Personel erişimini kişiye değil, tanımlı role göre sınırlandırın.'
    }
  ]

  const mobileHighlights = [
    {
      icon: Smartphone,
      title: 'Hızlı Sipariş',
      description: 'Masada saniyeler içinde, hatasız sipariş oluşturun.'
    },
    {
      icon: LayoutGrid,
      title: 'Masa Yönetimi',
      description: 'Boş, dolu ve rezerve masaları tek bakışta ayırt edin.'
    },
    {
      icon: RefreshCw,
      title: 'Offline & Senkron',
      description: 'İnternet kesilse bile sipariş almaya devam edin, veri kaybetmeyin.'
    },
    {
      icon: CreditCard,
      title: 'Ödeme & Kapanış',
      description: 'Parçalı ödeme ve hesap kapamayı masada hızla tamamlayın.'
    }
  ]

  const activeHighlights = activePillar === 'web' ? webHighlights : mobileHighlights

  return (
    <section className="py-20 md:py-32 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-slate-900/40 border border-white/5 p-1.5 gap-1 backdrop-blur-sm shadow-xl shadow-black/20">
            <button
              onClick={() => handlePillarChange('web')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 min-h-[48px] relative z-10 ${
                activePillar === 'web'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              aria-selected={activePillar === 'web'}
            >
              Web Paneli
            </button>
            <button
              onClick={() => handlePillarChange('mobile')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 min-h-[48px] relative z-10 ${
                activePillar === 'mobile'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              aria-selected={activePillar === 'mobile'}
            >
              Mobil Uygulama
            </button>
          </div>
        </div>

        {/* Content with animation */}
        <div className="relative min-h-[400px]">
          <div
            key={activePillar}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in"
          >
            {activeHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className="group bg-[#1e293b]/40 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-[#1e293b]/80 transition-all duration-150 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mb-4 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors duration-150">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-150" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-white transition-colors duration-150">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-150">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PillarSwitcher
