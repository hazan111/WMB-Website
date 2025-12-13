import { memo } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, Building2, Users, TrendingUp } from 'lucide-react'

const SimpleDashboardSection = memo(() => {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white mb-4">
            Profesyonel Yönetim Paneli
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Restoran operasyonlarınızı tek merkezden yönetin. Gerçek zamanlı veri ve kapsamlı raporlama ile işletmenizi optimize edin.
          </p>
        </div>

        {/* Dashboard Preview - Same as Product Page */}
        <div className="relative mb-12">
          <div className="relative mx-auto max-w-5xl">
            {/* Browser Frame */}
            <div className="bg-[#1e293b] rounded-t-lg border border-slate-700/50 p-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1 bg-[#0f172a] rounded px-4 py-1.5 mx-4">
                  <span className="text-xs text-slate-500">wmb-tracker.local</span>
                </div>
              </div>
            </div>
            
            {/* Screen Content */}
            <div className="bg-[#0f172a] border-x border-b border-slate-700/50 rounded-b-lg overflow-hidden">
              <div className="relative">
                {/* Main Content - Dashboard (no sidebar) */}
                <div className="p-6">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-1">Dashboard</h3>
                    <p className="text-xs text-slate-500">14 Aralık 2024</p>
                  </div>

                  {/* KPI Cards - 6 cards max */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30">
                      <div className="text-xs text-slate-500 mb-2">Toplam Gelir</div>
                      <div className="text-2xl font-bold text-white mb-1">₺24.5K</div>
                      <div className="flex items-center gap-1 text-xs">
                        <TrendingUp className="w-3 h-3 text-emerald-400/70" />
                        <span className="text-emerald-400/70">+12%</span>
                        <span className="text-slate-500 ml-1">dün</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30">
                      <div className="text-xs text-slate-500 mb-2">Aktif Siparişler</div>
                      <div className="text-2xl font-bold text-white mb-1">47</div>
                      <div className="text-xs text-slate-500">
                        <span>15 bekleyen</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30">
                      <div className="text-xs text-slate-500 mb-2">Aktif Şubeler</div>
                      <div className="text-2xl font-bold text-white mb-1">28</div>
                      <div className="flex items-center gap-1 text-xs">
                        <TrendingUp className="w-3 h-3 text-emerald-400/70" />
                        <span className="text-emerald-400/70">+5</span>
                        <span className="text-slate-500 ml-1">bu ay</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30">
                      <div className="text-xs text-slate-500 mb-2">Ortalama Sepet</div>
                      <div className="text-2xl font-bold text-white mb-1">₺145</div>
                      <div className="text-xs text-slate-500">
                        <span>Son 7 gün</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30">
                      <div className="text-xs text-slate-500 mb-2">Aylık Gelir</div>
                      <div className="text-2xl font-bold text-white mb-1">₺682K</div>
                      <div className="flex items-center gap-1 text-xs">
                        <TrendingUp className="w-3 h-3 text-emerald-400/70" />
                        <span className="text-emerald-400/70">+18%</span>
                        <span className="text-slate-500 ml-1">geçen ay</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30">
                      <div className="text-xs text-slate-500 mb-2">Toplam Ürün</div>
                      <div className="text-2xl font-bold text-white mb-1">342</div>
                      <div className="text-xs text-slate-500">
                        <span>Son 30 gün</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Chart + Secondary Insight */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Chart - Takes 2 columns */}
                    <div className="lg:col-span-2 bg-slate-800/40 rounded-lg p-6 border border-slate-700/30">
                      <div className="text-sm font-medium text-white mb-6">Günlük Gelir Trendi</div>
                      <div className="h-48 flex items-end gap-2">
                        <div className="flex-1 bg-blue-500/30 rounded-t h-[35%]"></div>
                        <div className="flex-1 bg-blue-500/40 rounded-t h-[48%]"></div>
                        <div className="flex-1 bg-blue-500/50 rounded-t h-[62%]"></div>
                        <div className="flex-1 bg-blue-500/40 rounded-t h-[55%]"></div>
                        <div className="flex-1 bg-blue-500/50 rounded-t h-[72%]"></div>
                        <div className="flex-1 bg-blue-400 rounded-t h-[88%]"></div>
                        <div className="flex-1 bg-blue-500/40 rounded-t h-[58%]"></div>
                      </div>
                    </div>

                    {/* Secondary Insight - Category Distribution */}
                    <div className="bg-slate-800/40 rounded-lg p-6 border border-slate-700/30">
                      <div className="text-sm font-medium text-white mb-6">Kategori Dağılımı</div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-slate-400">Ana Yemekler</span>
                            <span className="text-xs text-slate-500">52%</span>
                          </div>
                          <div className="w-full bg-slate-700/30 rounded-full h-1.5">
                            <div className="bg-slate-500 h-1.5 rounded-full" style={{ width: '52%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-slate-400">İçecekler</span>
                            <span className="text-xs text-slate-500">21%</span>
                          </div>
                          <div className="w-full bg-slate-700/30 rounded-full h-1.5">
                            <div className="bg-slate-500 h-1.5 rounded-full" style={{ width: '21%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-slate-400">Tatlılar</span>
                            <span className="text-xs text-slate-500">14%</span>
                          </div>
                          <div className="w-full bg-slate-700/30 rounded-full h-1.5">
                            <div className="bg-slate-500 h-1.5 rounded-full" style={{ width: '14%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-slate-400">Salatalar</span>
                            <span className="text-xs text-slate-500">10%</span>
                          </div>
                          <div className="w-full bg-slate-700/30 rounded-full h-1.5">
                            <div className="bg-slate-500 h-1.5 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Merkezi Yönetim</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tüm şubelerinizi tek platformdan kontrol edin ve performansı karşılaştırın.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Gerçek Zamanlı Raporlama</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Anlık verilerle karar verin ve işletme performansınızı optimize edin.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ölçeklenebilir Yapı</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              İşletmeniz büyüdükçe sistem de sizinle birlikte büyür.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/product" 
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Detaylı Ürün Bilgisi →
          </Link>
        </div>
      </div>
    </section>
  )
})

SimpleDashboardSection.displayName = 'SimpleDashboardSection'

export default SimpleDashboardSection
