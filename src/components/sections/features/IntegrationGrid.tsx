import { Printer, Monitor, CreditCard, QrCode } from 'lucide-react'
import { useInView } from '../../../hooks/useInView'

const IntegrationGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const integrations = [
    {
      icon: Printer,
      title: 'Yazıcı / Adisyon Çıktısı',
      description: 'Adisyon yazıcıları ile otomatik entegrasyon'
    },
    {
      icon: Monitor,
      title: 'Mutfak Ekranı (KDS)',
      description: 'Mutfak ekranı ile sipariş akışı senkronizasyonu'
    },
    {
      icon: CreditCard,
      title: 'POS / Kasa',
      description: 'POS cihazları ile ödeme entegrasyonu'
    },
    {
      icon: QrCode,
      title: 'QR Menü (opsiyonel)',
      description: 'Müşteriler için dijital menü deneyimi'
    }
  ]

  return (
    <section
      id="integrations"
      ref={ref}
      className={`py-20 md:py-32 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
            Entegrasyonlar & Ekosistem
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mevcut sistemlerinizle sorunsuz çalışır
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <div
                key={index}
                className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {integration.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {integration.description}
                </p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Entegrasyon kapsamı pakete göre değişebilir.
        </p>
      </div>
    </section>
  )
}

export default IntegrationGrid
