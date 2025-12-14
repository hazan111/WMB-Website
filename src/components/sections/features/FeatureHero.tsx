import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

interface FeatureHeroProps {
  onDemoClick: () => void
}

const FeatureHero = ({ onDemoClick }: FeatureHeroProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScrollToFeatures = () => {
    const element = document.getElementById('web-panel')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6">
              Tüm Operasyonunuzu Uçtan Uca Yönetin
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
              WMB Tracker; web paneli ve mobil uygulamasıyla siparişten raporlamaya, stoktan yetkilendirmeye kadar tüm restoran operasyonunu modüler bir yapıda sunar.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <button
                onClick={onDemoClick}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 shadow-lg shadow-blue-500/30"
                aria-label="Ücretsiz demo talep et"
              >
                Ücretsiz Demo Talep Et
              </button>
              <button
                onClick={handleScrollToFeatures}
                className="px-6 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 border border-white/20 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 inline-flex items-center gap-2"
                aria-label="Özellikleri incele"
              >
                Özellikleri İncele
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Enhanced Device Duo Visual - Optimized for Landing */}
          <div className="relative hidden lg:block opacity-90 transition-opacity duration-700 hover:opacity-100">
            <div className="flex items-center gap-6 justify-center">
              {/* Browser Frame - Web Panel with animation */}
              <div className="hero-web-mockup relative w-[320px] transform transition-transform hover:scale-[1.01] duration-500">
                <div className="bg-[#0f172a] rounded-lg shadow-xl border border-slate-800/60 ring-1 ring-white/5">
                  {/* Browser Chrome */}
                  <div className="h-10 bg-slate-800/30 rounded-t-lg flex items-center gap-2 px-4 border-b border-slate-800/50">
                    <div className="flex gap-1.5 opacity-60">
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    </div>
                    <div className="flex-1 h-5 bg-slate-800/50 rounded mx-4 opacity-50"></div>
                  </div>
                  {/* Browser Content - Dashboard Mock */}
                  <div className="h-[400px] bg-[#0f172a] rounded-b-lg p-5 overflow-hidden font-sans relative flex flex-col">
                    {/* Subtle Grid Background */}
                    <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
                    
                    <div className="space-y-5 relative z-10 flex-1 opacity-90">
                      {/* Header Bar - Compact & Clear */}
                      <div className="flex items-center justify-between pt-1 opacity-80">
                        <div>
                          <div className="text-[9px] text-blue-400/80 font-medium tracking-wide uppercase mb-0.5">Yönetim Paneli</div>
                          <h2 className="text-sm font-semibold text-slate-200 tracking-tight">Genel Bakış</h2>
                        </div>
                        <div className="flex items-center gap-3 opacity-60">
                          <div className="flex -space-x-2 scale-90">
                            <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-[#0f172a]"></div>
                            <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-[#0f172a]"></div>
                          </div>
                          <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center text-[10px] font-bold text-blue-400 shadow-lg shadow-blue-500/10">YO</div>
                        </div>
                      </div>

                      {/* KPI Cards - Subtle & Clean */}
                      <div className="grid grid-cols-4 gap-2.5">
                        {[
                          { label: 'Günlük Ciro', val: '₺15.4K', trend: '↑', color: 'text-slate-200', sub: 'vs. dün' },
                          { label: 'Aktif Masa', val: '18/24', trend: '•', color: 'text-slate-200', sub: 'Anlık' },
                          { label: 'Sipariş', val: '124', trend: '↑', color: 'text-slate-200', sub: 'Bugün' },
                          { label: 'Açık', val: '₺2.8K', trend: '→', color: 'text-slate-200', sub: 'Bekleyen' }
                        ].map((stat, i) => (
                          <div key={i} className="bg-slate-800/20 rounded-lg border border-slate-800/50 p-2.5 relative group hover:bg-slate-800/40 transition-all">
                            <div className="text-[8px] text-slate-500 font-medium mb-1 uppercase tracking-wide">{stat.label}</div>
                            <div className={`text-xs font-semibold ${stat.color} mb-1 tracking-tight`}>{stat.val}</div>
                            <div className="flex items-center justify-between opacity-60">
                              <div className="text-[7px] text-slate-600 font-medium">{stat.sub}</div>
                              <div className={`text-[7px] ${i === 3 ? 'text-slate-500' : 'text-emerald-500/80'} font-bold`}>{stat.trend}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Chart Area - Soft & Integrated */}
                      <div className="bg-slate-800/10 rounded-xl border border-slate-800/40 p-4 flex-1 flex flex-col">
                        <div className="flex justify-between items-center mb-4 opacity-80">
                          <div className="flex items-center gap-2">
                            <div className="text-[10px] font-medium text-slate-400">Haftalık Gelir</div>
                            <div className="px-1.5 py-0.5 rounded bg-emerald-500/5 text-[8px] text-emerald-500/80 font-medium">+12.5%</div>
                          </div>
                          <div className="flex gap-1">
                            {['Gün', 'Hafta', 'Ay'].map((t, i) => (
                              <div key={i} className={`text-[8px] px-1.5 py-0.5 rounded cursor-default ${i === 1 ? 'bg-slate-800 text-slate-300' : 'text-slate-600'}`}>{t}</div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex-1 relative min-h-[100px] w-full opacity-90">
                          {/* Subtle Grid Lines */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
                            <div className="w-full h-px bg-slate-800"></div>
                            <div className="w-full h-px bg-slate-800"></div>
                            <div className="w-full h-px bg-slate-800"></div>
                            <div className="w-full h-px bg-slate-800"></div>
                          </div>

                          <div className="absolute inset-0 flex items-end justify-between gap-3 px-1 pt-2">
                            {[45, 60, 50, 80, 65, 95, 40].map((h, i) => {
                              const isActive = i === 5;
                              return (
                                <div key={i} className="w-full h-full flex items-end group relative">
                                  <div 
                                    className={`w-full rounded-t-[2px] transition-all duration-1000 animate-grow-up relative ${isActive ? 'bg-blue-600/80' : 'bg-slate-800/40 group-hover:bg-slate-700/60'}`}
                                    style={{ height: `${h}%`, animationDelay: `${0.2 + i * 0.1}s` }}
                                  >
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        
                        <div className="flex justify-between mt-2 px-1 border-t border-slate-800/30 pt-2 opacity-60">
                          {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((d, i) => (
                            <span key={i} className={`text-[8px] font-medium ${i === 5 ? 'text-blue-400' : 'text-slate-600'}`}>{d}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Frame - Mobile App with animation */}
              <div className="hero-mobile-mockup relative w-[160px] transform transition-transform hover:scale-[1.01] duration-500 mt-12">
                <div className="bg-[#0f172a] rounded-[2.5rem] shadow-xl border border-slate-800/60 ring-1 ring-white/5 p-2.5">
                  {/* Phone Screen */}
                  <div className="bg-[#0f172a] rounded-[2rem] overflow-hidden h-[340px] font-sans relative border-r border-slate-800/30 flex flex-col opacity-95">
                    {/* Subtle Grid Background */}
                    <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

                    {/* Status Bar */}
                    <div className="h-6 w-full flex justify-between items-center px-5 pt-3 z-10 opacity-40 shrink-0">
                      <div className="text-[8px] font-medium text-slate-400">09:41</div>
                      <div className="flex gap-1">
                        <div className="w-2.5 h-1 rounded-full bg-slate-600"></div>
                        <div className="w-2.5 h-1 rounded-full bg-slate-600"></div>
                      </div>
                    </div>

                    <div className="flex-1 p-4 pb-0 flex flex-col relative z-10 overflow-hidden">
                      {/* Header */}
                      <div className="flex justify-between items-end mb-3 border-b border-slate-800/50 pb-2 shrink-0">
                        <div>
                          <div className="text-[8px] text-blue-400/80 font-medium tracking-wide uppercase mb-0.5">Sipariş Özeti</div>
                          <div className="text-sm font-semibold text-slate-200 tracking-tight">Masa 12</div>
                        </div>
                        <div className="text-right opacity-60">
                          <div className="text-[7px] text-slate-500 mb-0.5 font-medium">Garson</div>
                          <div className="text-[8px] font-medium text-slate-400">Ahmet Y.</div>
                        </div>
                      </div>

                      {/* Order List - Fixed Height, No Scroll */}
                      <div className="space-y-2 overflow-hidden">
                        {[
                          { name: 'Hamburger', variant: 'Ekstra Peynirli', qty: '1', price: '₺280' },
                          { name: 'Coca Cola', variant: 'Soğuk', qty: '2', price: '₺90' },
                          { name: 'Patates', variant: 'Baharatlı', qty: '1', price: '₺90' },
                          { name: 'Su', variant: 'Cam Şişe', qty: '2', price: '₺50' }
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="bg-slate-800/20 rounded-lg px-2.5 py-2 border border-slate-800/50 flex justify-between items-center group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 flex-1">
                              <div className="w-5 h-5 rounded bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-[9px] font-semibold text-blue-400/80 shrink-0">
                                {item.qty}x
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-[9px] font-medium text-slate-300 leading-tight truncate">{item.name}</div>
                                <div className="text-[7px] text-slate-600 leading-tight mt-0.5 truncate">{item.variant}</div>
                              </div>
                            </div>
                            <div className="text-[9px] font-medium text-slate-400 tabular-nums shrink-0 ml-2">{item.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action - Integrated */}
                    <div className="p-4 pt-3 bg-[#0f172a] border-t border-slate-800/50 z-20 shrink-0 mt-auto">
                      <div className="flex justify-between items-center mb-2.5 px-1 opacity-80">
                        <span className="text-[8px] text-slate-500 font-medium uppercase tracking-wide">Toplam</span>
                        <span className="text-xs font-semibold text-slate-200 tracking-tight">₺510.00</span>
                      </div>
                      <div className="bg-blue-600/90 rounded-lg py-2 px-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-600 transition-colors active:scale-[0.98] shadow-lg shadow-blue-900/20">
                        <span className="text-[9px] font-semibold text-white/90">Onayla</span>
                        <ArrowRight className="w-2.5 h-2.5 text-white/90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce-slow opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Özellikleri keşfedin</span>
          <ChevronDown className="w-4 h-4 text-slate-500" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default FeatureHero
