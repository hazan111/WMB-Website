import { Users, BarChart3, Shield, Database } from 'lucide-react'

const BentoGridSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-medium tracking-tight text-white mb-12 text-center">
          Restoran yönetimi için tasarlandı
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Dashboard & Analytics */}
          <div className="col-span-1 md:col-span-2 bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-colors group">
            <div className="flex items-start justify-between mb-8">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/10">
                <BarChart3 className="text-emerald-500 w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-500">Analitik</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Kapsamlı Dashboard ve Raporlama</h3>
            <p className="text-sm text-slate-400 max-w-md">
              Gerçek zamanlı gelir takibi, ürün performans analizi, masa devir oranları ve detaylı satış raporları ile işletmenizi optimize edin.
            </p>
            {/* Chart Visual */}
            <div className="mt-8 h-32 flex items-end gap-2 opacity-50 group-hover:opacity-80 transition-opacity">
              <div className="w-full bg-blue-500/20 rounded-t-sm h-[40%]"></div>
              <div className="w-full bg-blue-500/40 rounded-t-sm h-[60%]"></div>
              <div className="w-full bg-blue-500/30 rounded-t-sm h-[30%]"></div>
              <div className="w-full bg-blue-500/60 rounded-t-sm h-[80%]"></div>
              <div className="w-full bg-blue-500/20 rounded-t-sm h-[50%]"></div>
              <div className="w-full bg-white rounded-t-sm h-[70%] shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
            </div>
          </div>
          
          
          {/* Card 3 - Role & Permission */}
          <div className="col-span-1 bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-colors relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/10">
                <Shield className="text-blue-500 w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Rol ve İzin Yönetimi</h3>
              <p className="text-sm text-slate-400">
                Detaylı rol tabanlı erişim kontrolü. Her kullanıcı için özelleştirilebilir izinler ve güvenlik.
              </p>
            </div>
          </div>
          
          {/* Card 4 - Multi-tenant */}
          <div className="col-span-1 bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-8 border border-indigo-500/10">
              <Users className="text-indigo-400 w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Çoklu Şirket Desteği</h3>
            <p className="text-sm text-slate-400">
              Birden fazla şirket ve şube yönetimi. Her şube için bağımsız menü, ürün ve kullanıcı yönetimi.
            </p>
          </div>
          
          
          {/* Card 6 - Modern Stack */}
          <div className="col-span-1 md:col-span-2 bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-colors flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-8 border border-amber-500/10">
                <Database className="text-amber-500 w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Modern Teknoloji Yığını</h3>
              <p className="text-sm text-slate-400">
                React 19, TypeScript, Hono, Bun, MongoDB. Hızlı, güvenli ve ölçeklenebilir mimari.
              </p>
            </div>
            <div className="bg-[#0f172a] border border-slate-700/50 rounded-lg p-4 w-full max-w-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs text-white">Sistem Aktif</span>
                </div>
                <span className="text-xs text-slate-500">Şimdi</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Backend</span>
                  <span className="text-white">Bun + Hono</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Frontend</span>
                  <span className="text-white">React 19</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Mobile</span>
                  <span className="text-white">React Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoGridSection
