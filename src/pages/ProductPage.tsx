import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import DemoModal from '../components/ui/DemoModal'
import { ShoppingCart, ChefHat, Monitor, Smartphone, CheckCircle2, Receipt, ArrowRightLeft, BarChart3, Shield, ChevronDown, ArrowRight, FileText, Tablet, User, CreditCard, Users } from 'lucide-react'

// Solution Cards Component with animations
function SolutionCards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const iconRefs = useRef<(HTMLDivElement | null)[]>([])
  const miniIconRefs = useRef<(HTMLDivElement | null)[][]>([
    [null, null, null], // Card 1: FileText, ArrowRight, Tablet
    [null, null, null], // Card 2: User, ChefHat, CreditCard
    [], // Card 3: bars (handled differently)
    [null, null, null], // Card 4: Users, Shield, Users
  ])

  useEffect(() => {

    // IntersectionObserver for card enter animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting && cardRefs.current[idx]) {
            cardRefs.current[idx]?.classList.add('is-visible')
            // Trigger mini icon animations after card appears
            setTimeout(() => {
              const miniIcons = miniIconRefs.current[idx] || []
              miniIcons.forEach((iconRef, iconIdx) => {
                if (iconRef) {
                  setTimeout(() => {
                    iconRef.classList.add('is-visible')
                  }, iconIdx * 80)
                }
              })
            }, 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1 - Manuel Adisyon Hataları (PRIMARY EMPHASIS) */}
      <div
        ref={(el) => { 
          if (el) cardRefs.current[0] = el
        }}
        className="solution-card relative p-7 bg-slate-800/60 rounded-2xl border border-white/10 shadow-xl shadow-black/15 backdrop-blur-sm transform md:scale-105 md:z-10 opacity-0 translate-y-3 transition-all duration-[400ms] ease-out"
      >
        <div className="flex items-start gap-4">
          <div
            ref={(el) => { 
              if (el) iconRefs.current[0] = el
            }}
            className="card-icon w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 transition-transform duration-200 ease-out cursor-pointer"
          >
            <Receipt className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-white mb-2">
              Manuel adisyon hatalarını ortadan kaldırır
            </h3>
            <p className="text-sm text-slate-300 mb-1.5">
              Tüm siparişler doğrudan sistem üzerinden oluşturulur
            </p>
            <p className="text-xs text-slate-500/70 mb-4">
              Yanlış hesap, eksik ürün ve manuel hata riski ortadan kalkar
            </p>
            {/* Mini visual: Paper receipt → Digital order */}
            <div className="mt-3 flex items-center gap-3">
              <div
                ref={(el) => { 
                  if (el) {
                    if (!miniIconRefs.current[0]) {
                      miniIconRefs.current[0] = []
                    }
                    miniIconRefs.current[0][0] = el
                  }
                }}
                className="mini-icon w-10 h-10 bg-slate-700/60 rounded-lg border border-slate-600/40 opacity-0 scale-90 flex items-center justify-center transition-all duration-300 ease-out"
              >
                <FileText className="w-5 h-5 text-slate-400" />
              </div>
              <div
                ref={(el) => { 
                  if (el) {
                    if (!miniIconRefs.current[0]) {
                      miniIconRefs.current[0] = []
                    }
                    miniIconRefs.current[0][1] = el
                  }
                }}
                className="mini-icon w-4 h-4 opacity-0 scale-90 transition-all duration-300 ease-out flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4 text-blue-400/60" />
              </div>
              <div
                ref={(el) => { 
                  if (el) {
                    if (!miniIconRefs.current[0]) {
                      miniIconRefs.current[0] = []
                    }
                    miniIconRefs.current[0][2] = el
                  }
                }}
                className="mini-icon w-10 h-10 bg-blue-500/20 rounded-lg border border-blue-500/40 opacity-0 scale-90 flex items-center justify-center transition-all duration-300 ease-out"
              >
                <Tablet className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 - Kopukluk (SECONDARY EMPHASIS) */}
      <div
        ref={(el) => { 
          if (el) cardRefs.current[1] = el
        }}
        className="solution-card relative p-7 bg-slate-800/50 rounded-2xl border border-white/10 shadow-lg shadow-black/10 backdrop-blur-sm opacity-0 translate-y-3 transition-all duration-[400ms] ease-out delay-100"
      >
        <div className="flex items-start gap-4">
          <div
            ref={(el) => { 
              if (el) iconRefs.current[1] = el
            }}
            className="card-icon w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/10 transition-transform duration-200 ease-out cursor-pointer"
          >
            <ArrowRightLeft className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-white mb-2">
              Sipariş–mutfak–kasa kopukluğunu bitirir
            </h3>
            <p className="text-sm text-slate-300 mb-1.5">
              Garson, mutfak ve kasa aynı veri akışıyla çalışır
            </p>
            <p className="text-xs text-slate-500/70 mb-4">
              Bilgi kaybı ve iletişim gecikmeleri yaşanmaz
            </p>
            {/* Mini visual: Flow indicator - Garson → Mutfak → Kasa */}
            <div className="mt-3 flex items-center gap-2">
              <div
                ref={(el) => { 
                  if (el) {
                    if (!miniIconRefs.current[1]) {
                      miniIconRefs.current[1] = []
                    }
                    miniIconRefs.current[1][0] = el
                  }
                }}
                className="mini-icon w-9 h-9 rounded-lg bg-blue-500/30 border border-blue-500/50 opacity-0 scale-90 flex items-center justify-center transition-all duration-300 ease-out"
              >
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 h-0.5 bg-slate-700/60"></div>
              <div
                ref={(el) => { 
                  if (el) {
                    if (!miniIconRefs.current[1]) {
                      miniIconRefs.current[1] = []
                    }
                    miniIconRefs.current[1][1] = el
                  }
                }}
                className="mini-icon w-9 h-9 rounded-lg bg-slate-700/60 border border-slate-600/50 opacity-0 scale-90 flex items-center justify-center transition-all duration-300 ease-out"
              >
                <ChefHat className="w-5 h-5 text-slate-400" />
              </div>
              <div className="flex-1 h-0.5 bg-slate-700/60"></div>
              <div
                ref={(el) => { 
                  if (el) {
                    if (!miniIconRefs.current[1]) {
                      miniIconRefs.current[1] = []
                    }
                    miniIconRefs.current[1][2] = el
                  }
                }}
                className="mini-icon w-9 h-9 rounded-lg bg-slate-700/60 border border-slate-600/50 opacity-0 scale-90 flex items-center justify-center transition-all duration-300 ease-out"
              >
                <CreditCard className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 - Veri */}
      <div
        ref={(el) => { 
          if (el) cardRefs.current[2] = el
        }}
        className="solution-card relative p-7 bg-slate-800/40 rounded-2xl border border-white/10 shadow-md shadow-black/5 backdrop-blur-sm opacity-0 translate-y-3 transition-all duration-[400ms] ease-out delay-200"
      >
        <div className="flex items-start gap-4">
          <div
            ref={(el) => { 
              if (el) iconRefs.current[2] = el
            }}
            className="card-icon w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/5 transition-transform duration-200 ease-out cursor-pointer"
          >
            <BarChart3 className="w-6 h-6 text-amber-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-white mb-2">
              Anlık, net ve ölçülebilir operasyon verisi sunar
            </h3>
            <p className="text-sm text-slate-300 mb-1.5">
              Ciro, sipariş ve performans gerçek zamanlı izlenir
            </p>
            <p className="text-xs text-slate-500/70 mb-4">
              Kararlar sezgiyle değil veriye dayalı alınır
            </p>
            {/* Mini visual: Mini bar chart */}
            <div className="mt-3">
              <div className="w-28 h-12 flex items-end gap-2">
                <div className="flex-1 bg-blue-500/30 rounded-t h-[30%] opacity-50"></div>
                <div className="flex-1 bg-blue-500/40 rounded-t h-[45%] opacity-50"></div>
                <div className="flex-1 bg-blue-500 rounded-t h-[75%] opacity-90"></div>
                <div className="flex-1 bg-blue-500/50 rounded-t h-[55%] opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 - Sistem Kontrolü (SECONDARY EMPHASIS) */}
      <div
        ref={(el) => { 
          if (el) cardRefs.current[3] = el
        }}
        className="solution-card relative p-7 bg-slate-800/50 rounded-2xl border border-white/10 shadow-lg shadow-black/10 backdrop-blur-sm opacity-0 translate-y-3 transition-all duration-[400ms] ease-out delay-300"
      >
        <div className="flex items-start gap-4">
          <div
            ref={(el) => { 
              if (el) iconRefs.current[3] = el
            }}
            className="card-icon w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/10 transition-transform duration-200 ease-out cursor-pointer"
          >
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-white mb-2">
              Operasyonel kontrolü kişisel inisiyatife değil, tanımlı sisteme bağlar
            </h3>
            <p className="text-sm text-slate-300 mb-1.5">
              Yetkiler rol bazlı tanımlanır
            </p>
            <p className="text-xs text-slate-500/70 mb-4">
              Operasyon kişiye değil kurala bağlı ilerler
            </p>
            {/* Mini visual: Role structure with shield - users connected to role */}
            <div className="mt-3">
              <div className="flex items-center justify-center gap-3">
                <div
                  ref={(el) => { 
                    if (el) {
                      if (!miniIconRefs.current[3]) {
                        miniIconRefs.current[3] = []
                      }
                      miniIconRefs.current[3][0] = el
                    }
                  }}
                  className="mini-icon w-9 h-9 rounded-lg bg-slate-700/60 border border-slate-600/40 opacity-0 scale-90 flex items-center justify-center transition-all duration-300 ease-out"
                >
                  <Users className="w-5 h-5 text-slate-400" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-0.5 h-3 bg-slate-600/50"></div>
                  <div
                    ref={(el) => { 
                      if (el) {
                        if (!miniIconRefs.current[3]) {
                          miniIconRefs.current[3] = []
                        }
                        miniIconRefs.current[3][1] = el
                      }
                    }}
                    className="mini-icon w-10 h-10 rounded-lg bg-purple-500/30 border border-purple-500/60 opacity-0 scale-90 flex items-center justify-center transition-all duration-300 ease-out"
                  >
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="w-0.5 h-3 bg-slate-600/50"></div>
                </div>
                <div
                  ref={(el) => { 
                    if (el) {
                      if (!miniIconRefs.current[3]) {
                        miniIconRefs.current[3] = []
                      }
                      miniIconRefs.current[3][2] = el
                    }
                  }}
                  className="mini-icon w-9 h-9 rounded-lg bg-slate-700/60 border border-slate-600/40 opacity-0 scale-90 flex items-center justify-center transition-all duration-300 ease-out"
                >
                  <Users className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-48 md:pb-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6">
              WMB Tracker Nasıl Çalışır?
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              WMB Tracker, restoran operasyonlarını web paneli ve mobil uygulama üzerinden tek merkezden yönetmenizi sağlar.
              <br />
              Siparişten raporlamaya tüm süreçler gerçek zamanlı olarak takip edilir.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 shadow-lg shadow-blue-500/30"
                aria-label="Ücretsiz demo talep et"
              >
                Ücretsiz Demo Talep Et
              </button>
              <Link
                to="/#features"
                className="px-6 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 border border-white/20 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 inline-flex items-center gap-2"
              >
                Özellikleri İncele
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Operational Flow Section */}
        <section id="operational-flow" className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-24 md:space-y-32">
              {/* Step 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <ShoppingCart className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-400">1</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Sipariş Oluşturma</h3>
                  <div className="space-y-3 text-slate-400 leading-relaxed">
                    <p>Garson mobil uygulamadan siparişi oluşturur</p>
                    <p>Sipariş masa ile eşleştirilir</p>
                    <p>Anında sisteme düşer</p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  {/* Mobile App Screenshot */}
                  <div className="relative max-w-[300px] w-full">
                    <img
                      src="/siprais_ss.png"
                      alt="Mobil Garson Uygulaması - Masa Yönetimi Ekranı"
                      className="w-full h-auto rounded-lg shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                  {/* Mobile Kitchen App Screenshot */}
                  <div className="relative max-w-[300px] w-full">
                    <img
                      src="/mutfak_ss.png"
                      alt="Mutfak Ekranı - Mobil Uygulama Görünümü"
                      className="w-full h-auto rounded-lg shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <ChefHat className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center">
                      <span className="text-lg font-bold text-emerald-400">2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Mutfak & Hazırlık Süreci</h3>
                  <div className="space-y-3 text-slate-400 leading-relaxed">
                    <p>Siparişler mutfak ekranına (KDS) düşer</p>
                    <p>Durumlar güncellenir (Hazırlanıyor / Hazır)</p>
                    <p>Hatalar ve gecikmeler azaltılır</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center">
                      <span className="text-lg font-bold text-amber-400">3</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Gerçek Zamanlı Takip & Kontrol</h3>
                  <div className="space-y-3 text-slate-400 leading-relaxed">
                    <p>Yönetici web panelinden tüm süreci izler</p>
                    <p>Ciro, masa durumu ve performans anlık görünür</p>
                    <p>Operasyon tek merkezden kontrol edilir</p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  {/* Web Admin Panel Screenshot */}
                  <div className="relative w-full max-w-[600px]">
                    <img
                      src="/Rapor_ss.png"
                      alt="Web Yönetim Paneli - Raporlama ve Analiz Ekranı"
                      className="w-full h-auto rounded-xl shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Panel vs Mobile App Comparison */}
        <section className="py-20 md:py-32 bg-slate-900/30">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left: Web Panel */}
              <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6 shadow-lg shadow-black/5">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
                      <Monitor className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Yönetici için Web Paneli</h3>
                  </div>
                  <p className="text-slate-400 text-sm pl-[60px]">
                    İşletmenin tamamı tek merkezden kontrol edilir
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white font-medium">Tüm şubeleri ve şirket yapısını tek ekrandan yönet</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white font-medium">Gerçek zamanlı ciro, performans ve sipariş raporlarını analiz et</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-blue-400/70 mt-0.5 flex-shrink-0" />
                    <span>Kullanıcı ve yetki yönetimi ile kontrolü kişilere değil sisteme bağla</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-blue-400/70 mt-0.5 flex-shrink-0" />
                    <span>Stok ve menü durumunu anlık olarak takip et</span>
                  </li>
                </ul>
              </div>

              {/* Right: Mobile App */}
              <div className="bg-slate-800/40 rounded-2xl border border-slate-700/30 p-6 shadow-lg shadow-black/5">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                      <Smartphone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Sahada Garson için Mobil Uygulama</h3>
                  </div>
                  <p className="text-slate-400 text-sm pl-[60px]">
                    Sipariş, masa ve ödeme süreçleri sahada yönetilir
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white font-medium">Masada hızlı ve hatasız sipariş oluştur</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white font-medium">Masa durumlarını (boş / dolu / rezerve) anında gör</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400/70 mt-0.5 flex-shrink-0" />
                    <span>İnternet kesilse bile sipariş almaya devam et (offline destek)</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400/70 mt-0.5 flex-shrink-0" />
                    <span>Siparişleri mutfakla gerçek zamanlı senkronize et</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Connecting Micro CTA */}
            <div className="mt-12 text-center">
              <a
                href="#operational-flow"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
              >
                <span>Bu iki ekran nasıl birlikte çalışır?</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-12 text-center">
              Bu Sistem Neyi Çözer?
            </h2>
            <SolutionCards />
            
            {/* Connector to next section */}
            <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
              <a
                href="#operational-flow"
                className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
              >
                <span>Bu problemler sahada nasıl çözülür?</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white mb-6">
              10 Dakikada Anlaşılır, Günlerce Kazandırır
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 shadow-lg shadow-blue-500/30"
                aria-label="Ücretsiz deneyin"
              >
                Ücretsiz Deneyin
              </button>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-4 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 border border-white/20 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Canlı demo alın"
              >
                Canlı Demo Alın
              </button>
            </div>
          </div>
        </section>

        <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      </div>
    </Layout>
  )
}

export default ProductPage
