import { type ReactNode } from 'react'
import { useInView } from '../../../hooks/useInView'

interface ModuleSectionProps {
  id?: string
  title: string
  valueStatement: string
  bullets: string[]
  imageSrc?: string
  imageAlt?: string
  imageOnLeft?: boolean
  icon?: ReactNode
  customVisual?: ReactNode
  rawVisual?: boolean
}

const ModuleSection = ({
  id,
  title,
  valueStatement,
  bullets,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  icon,
  customVisual,
  rawVisual = false
}: ModuleSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.05, rootMargin: '50px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-opacity transition-transform duration-700`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 md:items-center">
          {/* Text Content Column */}
          <div className={imageOnLeft ? 'md:order-2' : 'md:order-1'}>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              {title}
            </h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              {valueStatement}
            </p>
            <ul className="space-y-3">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <span className="text-slate-300 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup Column */}
          <div className={`w-full ${imageOnLeft ? 'md:order-1' : 'md:order-2'}`}>
            {customVisual ? (
              rawVisual ? (
                <div className="relative flex items-center justify-center">
                  {customVisual}
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-800/50">
                  {customVisual}
                </div>
              )
            ) : imageSrc ? (
              <div className="relative rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="relative rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-800/50">
                <div className="aspect-video bg-slate-900/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    {icon && <div className="mb-4 flex justify-center">{icon}</div>}
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-700/30 rounded w-3/4 mx-auto"></div>
                      <div className="h-3 bg-slate-700/20 rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModuleSection
