import { BarChart2, ChefHat, LayoutGrid, UtensilsCrossed, Receipt } from 'lucide-react'

const PhoneMockupSection = () => {
  return (
    <section id="mobile" className="pb-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-0 md:gap-12">
          
          {/* Left Side Text (Desktop) */}
          <div className="hidden lg:block w-64 space-y-8 pt-12">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <BarChart2 className="text-emerald-500 w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight">Web Dashboard</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Kapsamlı yönetim paneli. Şirket, şube, menü, ürün yönetimi ve detaylı raporlama ile tüm operasyonlarınızı kontrol edin.
              </p>
            </div>
          </div>
          
          {/* The Phones Container (Fan Layout) */}
          <div className="relative w-full max-w-[340px] md:max-w-[400px] h-[640px] md:h-[680px] flex justify-center items-center phone-fan-container group z-10">
            
            {/* Screen 1: Analytics (Left) */}
            <div className="phone-left absolute md:left-0 top-0 md:top-8 w-[300px] h-[600px] bg-[#020617] rounded-[3rem] border-[6px] border-[#1e293b] shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-slate-800 transform md:-translate-x-12 md:scale-[0.95] md:opacity-75 transition-all duration-500 ease-out z-10 mb-12 md:mb-0 hidden md:block" style={{ willChange: 'transform', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}>
              {/* Status Bar */}
              <div className="absolute top-0 left-0 w-full h-12 flex justify-between items-center px-6 z-20">
                <span className="text-[10px] font-medium text-slate-400">9:41</span>
                <div className="flex gap-1.5">
                  <div className="w-5 h-3 rounded-full bg-slate-700"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative w-full h-full bg-[#0f172a] pt-14 px-5 flex flex-col">
                <h2 className="text-lg font-medium text-white mb-6">Dashboard</h2>
                <div className="mb-6 space-y-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">Toplam Şirket</div>
                    <div className="text-2xl font-medium text-white">12</div>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">Aktif Şubeler</div>
                    <div className="text-2xl font-medium text-white">28</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Hızlı Erişim</div>
                  <div className="space-y-2">
                    <div className="p-2 bg-slate-800/50 rounded text-sm text-white">📊 Raporlar</div>
                    <div className="p-2 bg-slate-800/50 rounded text-sm text-white">👥 Kullanıcılar</div>
                    <div className="p-2 bg-slate-800/50 rounded text-sm text-white">🍽️ Menüler</div>
                    <div className="p-2 bg-slate-800/50 rounded text-sm text-white">📦 Ürünler</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Screen 2: Main POS (Center) */}
            <div className="relative w-[300px] h-[600px] bg-[#020617] rounded-[3rem] border-[6px] border-[#1e293b] shadow-2xl shadow-blue-500/10 overflow-hidden ring-1 ring-slate-700 z-20 transform transition-all duration-500 hover:scale-[1.02]">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 w-full h-12 flex justify-between items-center px-6 z-20">
                <span className="text-[10px] font-medium text-slate-300">19:42</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-transparent border border-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-transparent border border-slate-600"></div>
                  <div className="w-5 h-3 rounded-full bg-slate-500"></div>
                </div>
              </div>
              
              {/* App Content */}
              <div className="relative w-full h-full bg-[#0f172a] pt-14 px-4 pb-8 flex flex-col">
                {/* App Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-medium text-white tracking-tight">Masa Yönetimi</h2>
                  </div>
                </div>
                
                {/* Table Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {/* Table 1 (Occupied) */}
                  <div className="p-3 bg-blue-600/20 rounded-xl text-white border border-blue-500/30">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold">M-01</span>
                      <span className="text-[10px] font-medium opacity-80">15dk</span>
                    </div>
                    <div className="text-lg font-semibold tracking-tight">₺85.00</div>
                    <div className="mt-2 text-[10px] font-medium px-2 py-1 bg-blue-500/30 text-blue-300 rounded-full inline-block">
                      Aktif Sipariş
                    </div>
                  </div>
                  
                  {/* Table 2 (Free) */}
                  <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-slate-300">M-02</span>
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] rounded-full">Boş</span>
                    </div>
                    <div className="text-lg font-medium text-slate-400">-</div>
                    <div className="mt-2 text-[10px] text-slate-500">
                      4 Kişi
                    </div>
                  </div>
                </div>
                
                {/* Active Order Panel */}
                <div className="flex-1 bg-[#1e293b] rounded-t-2xl border-t border-slate-700/50 -mx-4 px-4 pt-4 pb-20 relative overflow-y-auto">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-600 rounded-full"></div>
                  
                  <div className="flex justify-between items-center mb-4 mt-2">
                    <span className="text-sm font-medium text-white">Masa 01 - Sipariş</span>
                    <span className="text-xs text-slate-400">#8923</span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                      <div>
                        <p className="text-sm text-slate-200">Tavuk Şiş</p>
                        <p className="text-[10px] text-slate-500">2x • Orta Baharatlı</p>
                      </div>
                      <span className="text-sm font-medium text-slate-200">₺45</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                      <div>
                        <p className="text-sm text-slate-200">Mevsim Salatası</p>
                        <p className="text-[10px] text-slate-500">1x • Zeytinyağlı</p>
                      </div>
                      <span className="text-sm font-medium text-slate-200">₺25</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <p className="text-sm text-slate-200">Kola</p>
                        <p className="text-[10px] text-slate-500">2x</p>
                      </div>
                      <span className="text-sm font-medium text-slate-200">₺15</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pb-4 border-b border-slate-700/50 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Ara Toplam</span>
                      <span className="text-white">₺85.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">KDV</span>
                      <span className="text-white">₺15.30</span>
                    </div>
                    <div className="flex justify-between text-base font-bold pt-2 border-t border-slate-700/50">
                      <span className="text-white">Toplam</span>
                      <span className="text-white">₺100.30</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-blue-600 text-white text-xs font-bold uppercase tracking-wide rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                    Siparişi Tamamla
                  </button>
                </div>
                
                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-[#0f172a] border-t border-slate-800 flex justify-around items-center z-30">
                  <LayoutGrid className="w-5 h-5 text-blue-500" />
                  <UtensilsCrossed className="w-5 h-5 text-slate-500" />
                  <Receipt className="w-5 h-5 text-slate-500" />
                </div>
              </div>
            </div>
            
            {/* Screen 3: Kitchen Display (Right) */}
            <div className="phone-right absolute md:right-0 top-0 md:top-8 w-[300px] h-[600px] bg-[#020617] rounded-[3rem] border-[6px] border-[#1e293b] shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-slate-800 transform md:translate-x-12 md:scale-[0.95] md:opacity-75 transition-all duration-500 ease-out z-10 mt-12 md:mt-0 hidden md:block" style={{ willChange: 'transform', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}>
              {/* Status Bar */}
              <div className="absolute top-0 left-0 w-full h-12 flex justify-between items-center px-6 z-20">
                <span className="text-[10px] font-medium text-slate-400">19:42</span>
                <div className="flex gap-1.5">
                  <div className="w-5 h-3 rounded-full bg-slate-700"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative w-full h-full bg-[#0f172a] pt-14 px-4 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-white">KDS Görünümü</h2>
                  <div className="px-2 py-1 rounded bg-slate-800 text-[10px] text-white border border-slate-700">Acil</div>
                </div>
                
                {/* Ticket 1 */}
                <div className="bg-[#1e293b] border-l-4 border-amber-500 rounded-r-lg p-3 mb-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-white">Masa 5</span>
                    <span className="text-xs font-mono text-amber-500">12:00</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-slate-300 flex gap-2"><span className="text-white font-medium">1x</span> Ribeye (OA)</div>
                    <div className="text-sm text-slate-300 flex gap-2"><span className="text-white font-medium">2x</span> C-Salata</div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 py-1.5 bg-slate-700 hover:bg-slate-600 text-[10px] text-white rounded">Beklet</button>
                    <button className="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-[10px] text-white rounded">Hazır</button>
                  </div>
                </div>
                
                {/* Ticket 2 */}
                <div className="bg-[#1e293b] border-l-4 border-red-500 rounded-r-lg p-3 mb-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-white">Masa 8</span>
                    <span className="text-xs font-mono text-red-500 animate-pulse">24:00</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-slate-300 flex gap-2"><span className="text-white font-medium">1x</span> Istakoz Risotto</div>
                  </div>
                  <div className="mt-3 w-full py-1.5 bg-red-500/20 text-red-400 text-[10px] text-center rounded border border-red-500/20 uppercase font-medium">
                    Acil
                  </div>
                </div>
                
                {/* Ticket 3 */}
                <div className="bg-[#1e293b] border-l-4 border-emerald-500 rounded-r-lg p-3 opacity-60">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-white">Masa 3</span>
                    <span className="text-xs font-mono text-emerald-500">02:30</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-slate-300 flex gap-2"><span className="text-white font-medium">4x</span> İstiridye</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Only Stack */}
            <div className="md:hidden mt-12 w-full space-y-12 block">
              {/* Dashboard for Mobile */}
              <div className="w-[300px] h-[600px] bg-[#020617] rounded-[3rem] border-[6px] border-[#1e293b] shadow-2xl mx-auto overflow-hidden ring-1 ring-slate-800">
                <div className="relative w-full h-full bg-[#0f172a] pt-14 px-5 flex flex-col">
                  <h2 className="text-lg font-medium text-white mb-6">Dashboard</h2>
                  <div className="mb-6 space-y-3">
                    <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                      <div className="text-xs text-slate-400 mb-1">Toplam Şirket</div>
                      <div className="text-2xl font-medium text-white">12</div>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                      <div className="text-xs text-slate-400 mb-1">Aktif Şubeler</div>
                      <div className="text-2xl font-medium text-white">28</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Hızlı Erişim</div>
                    <div className="space-y-2">
                      <div className="p-2 bg-slate-800/50 rounded text-sm text-white">📊 Raporlar</div>
                      <div className="p-2 bg-slate-800/50 rounded text-sm text-white">👥 Kullanıcılar</div>
                      <div className="p-2 bg-slate-800/50 rounded text-sm text-white">🍽️ Menüler</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Kitchen for Mobile */}
              <div className="w-[300px] h-[600px] bg-[#020617] rounded-[3rem] border-[6px] border-[#1e293b] shadow-2xl mx-auto overflow-hidden ring-1 ring-slate-800">
                <div className="relative w-full h-full bg-[#0f172a] pt-14 px-4 flex flex-col">
                  <h2 className="text-lg font-medium text-white mb-4">KDS Görünümü</h2>
                  <div className="bg-[#1e293b] border-l-4 border-amber-500 rounded-r-lg p-3 mb-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-white">Masa 5</span>
                      <span className="text-xs font-mono text-amber-500">12:00</span>
                    </div>
                    <div className="text-sm text-slate-300">1x Ribeye (OA)</div>
                  </div>
                  <div className="bg-[#1e293b] border-l-4 border-red-500 rounded-r-lg p-3 mb-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-white">Masa 8</span>
                      <span className="text-xs font-mono text-red-500 animate-pulse">24:00</span>
                    </div>
                    <div className="text-sm text-slate-300">1x Istakoz Risotto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side Text (Desktop) */}
          <div className="hidden lg:block w-64 space-y-8 text-right pt-12">
            <div className="space-y-2 flex flex-col items-end">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <ChefHat className="text-indigo-400 w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight">Mobil Garson Uygulaması</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                React Native ile geliştirilmiş mobil uygulama. Masaları görüntüleyin, sipariş oluşturun ve gerçek zamanlı takip edin.
              </p>
            </div>
          </div>
        </div>
        
        {/* Caption for Mobile */}
        <div className="md:hidden text-center mt-12">
          <p className="text-sm text-slate-500">Web Dashboard, Mobil Garson Uygulaması ve Mutfak Ekranını görmek için kaydırın</p>
        </div>
      </div>
    </section>
  )
}

export default PhoneMockupSection
