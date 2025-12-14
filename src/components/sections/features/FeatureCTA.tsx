import { CheckCircle2 } from 'lucide-react'
import { useInView } from '../../../hooks/useInView'

interface FeatureCTAProps {
  onDemoClick: () => void
}

const FeatureCTA = ({ onDemoClick }: FeatureCTAProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const trustPoints = [
    'Kurulum desteği',
    'Şube bazlı yapı',
    'Raporlama ile görünürlük'
  ]

  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white mb-6">
            İşletmenize Uygun Kurulumu 10 Dakikada Planlayalım
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onDemoClick}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 shadow-lg shadow-blue-500/30"
            aria-label="Canlı demo al"
          >
            Canlı Demo Al
          </button>
          <a
            href="https://wa.me/905511730475?text=Merhaba%20WMB%20Tracker%20hakkında%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 border border-white/20 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 inline-flex items-center"
          >
            WhatsApp ile Sor
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCTA
