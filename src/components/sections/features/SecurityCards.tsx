import { Shield, Lock, Activity } from 'lucide-react'
import { useInView } from '../../../hooks/useInView'

const SecurityCards = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Yetkilendirme',
      description: 'Rol bazlı erişim kontrolü ile operasyonel güvenlik sağlanır. Her kullanıcı yetkisi dahilindeki işlemlere erişebilir.',
      color: 'blue'
    },
    {
      icon: Lock,
      title: 'Veri Güvenliği',
      description: 'Veriler şifrelenmiş kanallar üzerinden iletilir ve güvenli sunucularda saklanır. Düzenli yedekleme ile veri kaybı riski minimize edilir.',
      color: 'emerald'
    },
    {
      icon: Activity,
      title: 'Stabilite',
      description: 'Gerçek zamanlı senkronizasyon ve sürekli izleme ile sistem stabilitesi sağlanır. Kesintisiz operasyon garantisi.',
      color: 'amber'
    }
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/30',
      text: 'text-blue-400'
    },
    emerald: {
      bg: 'bg-emerald-500/20',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400'
    },
    amber: {
      bg: 'bg-amber-500/20',
      border: 'border-amber-500/30',
      text: 'text-amber-400'
    }
  }

  return (
    <section
      id="security"
      ref={ref}
      className={`py-20 md:py-32 bg-slate-900/30 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
            Güvenlik & Güvenilirlik
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            İşletmenizin verileri ve operasyonel süreçleri güvende
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            return (
              <div
                key={index}
                className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SecurityCards
