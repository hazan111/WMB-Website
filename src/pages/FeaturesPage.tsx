import { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import DemoModal from '../components/ui/DemoModal'
import FeatureHero from '../components/sections/features/FeatureHero'
import PillarSwitcher from '../components/sections/features/PillarSwitcher'
import ModuleSection from '../components/sections/features/ModuleSection'
import IntegrationGrid from '../components/sections/features/IntegrationGrid'
import SecurityCards from '../components/sections/features/SecurityCards'
import FeatureCTA from '../components/sections/features/FeatureCTA'
import FeatureFAQ from '../components/sections/features/FeatureFAQ'
import { 
  BarChart3, 
  Package, 
  LayoutGrid, 
  Users, 
  Building2,
  ShoppingCart,
  Clock,
  CreditCard,
  TrendingUp,
  AlertCircle,
  Banknote
} from 'lucide-react'

function FeaturesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Özellikler | WMB Tracker'
  }, [])

  // Web Panel Modules
  const webModules = [
    {
      id: 'raporlama',
      title: 'Raporlama & KPI',
      valueStatement: 'İşletmenizi sezgilerle değil, net KPI ve performans verileriyle yönetin.',
      bullets: [
        'Günlük, haftalık ve aylık özet raporlar',
        'Saat bazlı yoğunluk analizi',
        'İptal ve hata oranı takibi',
        'Masa ve garson performans metrikleri',
        'Excel ve PDF formatında dışa aktarım'
      ],
      imageOnLeft: false,
      icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
      customVisual: (
        <div className="aspect-video bg-[#0f172a] p-6 flex flex-col font-sans">
          {/* Top Row: KPI Chips */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Günlük Ciro', val: '₺15.4K', icon: Banknote, color: 'text-blue-400' },
              { label: 'Sipariş', val: '124', icon: ShoppingCart, color: 'text-emerald-400' },
              { label: 'İptal', val: '%1.2', icon: AlertCircle, color: 'text-rose-400' }
            ].map((kpi, i) => {
              const Icon = kpi.icon
              return (
                <div key={i} className="bg-slate-800/40 rounded-lg p-3 border border-slate-700/50 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className={`w-3.5 h-3.5 ${kpi.color}`} />
                    <span className="text-[10px] text-slate-400 font-medium">{kpi.label}</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-200">{kpi.val}</div>
                </div>
              )
            })}
          </div>

          {/* Middle: Hourly Bar Chart */}
          <div className="flex-1 bg-slate-800/20 rounded-lg border border-slate-700/30 p-4 mb-4 flex flex-col">
            {/* Chart Title */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">Saatlik Ciro Trendi</span>
              <span className="text-[10px] text-slate-500">₺ (Bin)</span>
            </div>
            
            {/* Chart Area with Grid Lines */}
            <div className="relative h-[140px] flex flex-col justify-end">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 25, 50, 75, 100].map((_, i) => (
                  <div key={i} className="h-px bg-slate-700/20"></div>
                ))}
              </div>
              
              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between pr-2">
                {['0', '2.5', '5', '7.5', '10'].map((label, i) => (
                  <span key={i} className="text-[8px] text-slate-500 font-medium">{label}</span>
                ))}
              </div>
              
              {/* Bars */}
              <div className="flex items-end justify-between gap-1.5 pl-8 relative z-10 h-full">
                {(() => {
                  // Data array with actual numeric values (in thousands)
                  const hourlyData = [
                    { hour: '17', value: 3.0, isPeak: false },
                    { hour: '18', value: 4.2, isPeak: false },
                    { hour: '19', value: 8.8, isPeak: false },
                    { hour: '20', value: 10.0, isPeak: true },
                    { hour: '21', value: 9.2, isPeak: false },
                    { hour: '22', value: 6.5, isPeak: false },
                    { hour: '23', value: 3.8, isPeak: false }
                  ]
                  
                  // Calculate max value for normalization
                  const maxValue = Math.max(...hourlyData.map(d => d.value))
                  
                  // Helper to clamp normalized size between min (12%) and max (100%)
                  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))
                  
                  return hourlyData.map((bar, i) => {
                    // Normalize value: 0-1 range
                    const normalized = bar.value / maxValue
                    // Convert to percentage and clamp to ensure minimum visible size (12%)
                    const heightPercent = clamp(normalized * 100, 12, 100)
                    
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end group h-full">
                        <div className="relative w-full h-full flex flex-col items-center justify-end">
                          <div 
                            className={`w-full rounded-t transition-all duration-500 animate-grow-up ${
                              bar.isPeak 
                                ? 'bg-blue-500 shadow-lg shadow-blue-500/30' 
                                : 'bg-blue-500/60 hover:bg-blue-500/80'
                            }`}
                            style={{ 
                              height: `${heightPercent}%`,
                              minHeight: '12px',
                              animationDelay: `${0.2 + i * 0.05}s`
                            }}
                          >
                            {/* Value Tooltip on Hover */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                              <div className="bg-slate-700 text-white text-[9px] px-1.5 py-0.5 rounded whitespace-nowrap shadow-lg">
                                ₺{bar.value.toFixed(1)}K
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className={`text-[9px] font-medium mt-1.5 ${bar.isPeak ? 'text-blue-400' : 'text-slate-500'}`}>
                          {bar.hour}:00
                        </span>
                      </div>
                    )
                  })
                })()}
              </div>
            </div>
          </div>

          {/* Bottom: Insight */}
          <div className="flex items-center gap-2 bg-blue-500/10 rounded-lg px-3 py-2 border border-blue-500/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] text-blue-200 font-medium">En yoğun saat: 19:00 – 21:00</span>
          </div>
        </div>
      )
    },
    {
      id: 'stok',
      title: 'Stok & Ürün Yönetimi',
      valueStatement: 'Stok durumunu anlık takip edin, kritik seviyelerde otomatik uyarı alın.',
      bullets: [
        'Otomatik stok düşümü',
        'Kritik stok uyarıları',
        'Ürün ve opsiyon yönetimi',
        'Fiyat güncelleme ve düzenleme',
        'Şube bazlı stok takibi'
      ],
      imageOnLeft: true,
      icon: <Package className="w-12 h-12 text-blue-400" />,
      customVisual: (
        <div className="aspect-video bg-[#0f172a] p-6 flex flex-col font-sans">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-semibold text-slate-200">Stok Durumu</h4>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">Tümü</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">Kritik</span>
            </div>
          </div>

          {/* Product List */}
          <div className="flex-1 space-y-4">
            {[
              { name: 'Tavuk Göğsü', percent: 18, color: 'bg-rose-500', text: 'text-rose-400', label: 'Kritik' },
              { name: 'Patates', percent: 42, color: 'bg-orange-500', text: 'text-orange-400', label: 'Düşük' },
              { name: 'Ayran', percent: 76, color: 'bg-emerald-500', text: 'text-emerald-400', label: 'Normal' }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-medium text-slate-300">{item.name}</span>
                  <span className={`text-[10px] font-medium ${item.text}`}>%{item.percent}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-700 ease-out ${item.color} opacity-90`}
                    style={{ width: `${item.percent}%`, transitionDelay: `${i * 0.15}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Warning */}
          <div className="mt-4 flex items-center gap-2 pt-4 border-t border-slate-800/50 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[10px] text-slate-400">
              <span className="text-rose-400 font-medium">2 ürün</span> kritik seviyenin altında.
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'menu',
      title: 'Menü & Kategori Kontrolü',
      valueStatement: 'Menünüzü şube bazlı yönetin, anlık fiyat ve ürün değişiklikleri yapın.',
      bullets: [
        'Kategori sıralama ve düzenleme',
        'Ürün görünürlük kontrolü',
        'Şube bazlı menü yönetimi',
        'Anlık fiyat ve ürün kapatma',
        'Kampanya ve etiket yönetimi'
      ],
      imageOnLeft: false,
      icon: <LayoutGrid className="w-12 h-12 text-blue-400" />,
      customVisual: (
        <div className="aspect-video bg-[#0f172a] p-6 flex flex-col font-sans">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-200">Menü Yönetimi</h4>
              <p className="text-[10px] text-slate-400">Şube: <span className="text-blue-400 font-medium">Merkez</span></p>
            </div>
            <div className="bg-blue-600/20 text-blue-400 p-1.5 rounded-lg border border-blue-600/30">
              <LayoutGrid className="w-4 h-4" />
            </div>
          </div>

          {/* Category List */}
          <div className="space-y-2 mb-4">
            {['Çorbalar', 'Ana Yemekler', 'Salatalar'].map((cat, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between bg-slate-800/30 rounded-lg p-2.5 border border-slate-700/50 hover:bg-slate-800/50 transition-colors group animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-600 group-hover:text-slate-400 transition-colors">
                    <div className="w-1 h-1 bg-current rounded-full mb-0.5"></div>
                    <div className="w-1 h-1 bg-current rounded-full mb-0.5"></div>
                    <div className="w-1 h-1 bg-current rounded-full"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-300">{cat}</span>
                </div>
                {/* Toggle Switch UI */}
                <div className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${i === 2 ? 'bg-slate-700' : 'bg-blue-600'}`}>
                  <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all duration-300 ${i === 2 ? 'left-0.5' : 'left-4.5'}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Edit Card (Focus) */}
          <div className="mt-auto bg-slate-800/80 rounded-lg p-3 border border-slate-700 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-xs font-semibold text-slate-200 block">Kıymalı Börek</span>
                <span className="text-[10px] text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">Geçici olarak kapalı</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-slate-500 line-through">₺140</span>
                <span className="block text-sm font-bold text-slate-200">₺160</span>
              </div>
            </div>
            <div className="h-1 w-full bg-slate-700/50 rounded-full overflow-hidden">
               <div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'yetkiler',
      title: 'Kullanıcı, Rol & Yetkiler',
      valueStatement: 'Rol bazlı yetkilendirme ile operasyonel güvenliği sağlayın.',
      bullets: [
        'Rol bazlı yetkilendirme',
        'İşlem logları ve izlenebilirlik',
        'Şube bazlı erişim kontrolü',
        'Güvenli oturum yönetimi'
      ],
      imageOnLeft: true,
      icon: <Users className="w-12 h-12 text-blue-400" />,
      customVisual: (
        <div className="aspect-video bg-[#0f172a] p-6 flex flex-col font-sans">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-200">Kullanıcı & Yetki Yönetimi</h4>
            <div className="p-1.5 bg-slate-800 rounded-lg border border-slate-700">
              <Users className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          {/* Role Cards */}
          <div className="flex-1 space-y-3">
            {[
              { 
                role: 'Yönetici', 
                perms: [
                  { label: 'Raporlar', ok: true },
                  { label: 'Menü & Fiyat', ok: true },
                  { label: 'Kullanıcı Yön.', ok: true }
                ],
                active: true
              },
              { 
                role: 'Şube Sorumlusu', 
                perms: [
                  { label: 'Siparişler', ok: true },
                  { label: 'Stok', ok: true },
                  { label: 'Kullanıcı Yön.', ok: false }
                ],
                active: false
              },
              { 
                role: 'Garson', 
                perms: [
                  { label: 'Sipariş', ok: true },
                  { label: 'Ödeme', ok: true },
                  { label: 'Raporlar', ok: false }
                ],
                active: false
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className={`p-3 rounded-lg border transition-all duration-300 animate-fade-in ${
                  card.active 
                    ? 'bg-blue-600/10 border-blue-500/30' 
                    : 'bg-slate-800/30 border-slate-700/30'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${card.active ? 'bg-blue-400' : 'bg-slate-600'}`}></div>
                  <span className={`text-xs font-semibold ${card.active ? 'text-blue-100' : 'text-slate-400'}`}>
                    {card.role}
                  </span>
                </div>
                <div className="flex gap-4">
                  {card.perms.map((perm, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center border ${
                        perm.ok 
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                          : 'bg-slate-700/50 border-slate-600/30 text-slate-500'
                      }`}>
                         {perm.ok ? (
                           <svg viewBox="0 0 12 12" className="w-2 h-2 fill-current"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                         ) : (
                           <svg viewBox="0 0 12 12" className="w-2 h-2 fill-current"><path d="M6 5.293l2.293-2.293a.5.5 0 11.707.707L6.707 6l2.293 2.293a.5.5 0 11-.707.707L6 6.707 3.707 9a.5.5 0 01-.707-.707L5.293 6 3 3.707a.5.5 0 01.707-.707L6 5.293z" /></svg>
                         )}
                      </div>
                      <span className={`text-[9px] ${perm.ok ? 'text-slate-300' : 'text-slate-600'}`}>
                        {perm.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'sube',
      title: 'Şube & Masa Yapısı',
      valueStatement: 'Tüm şubelerinizi ve masa yapılarını tek merkezden yönetin.',
      bullets: [
        'Şube ekleme ve yönetimi',
        'Masa grupları ve düzenleme',
        'Masa durumu takibi',
        'Rezervasyon akışı yönetimi',
        'Cihaz eşleştirme ve kontrolü'
      ],
      imageOnLeft: false,
      icon: <Building2 className="w-12 h-12 text-blue-400" />,
      customVisual: (
        <div className="aspect-video bg-[#0f172a] p-6 flex flex-col font-sans">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-200">Şube & Masa Yönetimi</h4>
            <div className="p-1.5 bg-slate-800 rounded-lg border border-slate-700">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          {/* Branch Selector */}
          <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar pb-1">
            {[
              { name: 'Merkez Şube', active: true },
              { name: 'Nilüfer Şube', active: false },
              { name: 'FSM Şube', active: false }
            ].map((branch, i) => (
              <div 
                key={i}
                className={`flex-shrink-0 px-3 py-2 rounded-lg border text-xs font-medium transition-all cursor-default ${
                  branch.active 
                    ? 'bg-blue-600/10 border-blue-500/50 text-blue-100 shadow-lg shadow-blue-500/10' 
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-600'
                }`}
              >
                {branch.name}
              </div>
            ))}
          </div>

          {/* Table Grid */}
          <div className="flex-1 grid grid-cols-2 gap-3">
            {[
              { id: 'M-1', status: 'Dolu', type: 'busy' },
              { id: 'M-2', status: 'Hazır', type: 'ready' },
              { id: 'M-3', status: 'Rezerve', type: 'reserved' },
              { id: 'M-4', status: 'Serviste', type: 'busy' }
            ].map((table, i) => (
              <div 
                key={i}
                className={`relative group rounded-lg border p-3 flex flex-col justify-between transition-all duration-300 animate-fade-in ${
                  table.type === 'busy' 
                    ? 'bg-blue-900/20 border-blue-500/30' 
                    : table.type === 'reserved'
                    ? 'bg-slate-800/40 border-slate-600/30 border-dashed'
                    : 'bg-slate-800/20 border-slate-700/30'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start">
                  <span className={`text-xs font-bold ${table.type === 'busy' ? 'text-blue-200' : 'text-slate-400'}`}>
                    {table.id}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    table.type === 'busy' ? 'bg-blue-400 animate-pulse' : 
                    table.type === 'reserved' ? 'bg-slate-500' : 'bg-slate-700'
                  }`}></div>
                </div>
                
                <div className="mt-2">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    table.type === 'busy' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : table.type === 'reserved'
                      ? 'bg-slate-700/50 text-slate-400'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {table.status}
                  </span>
                </div>

                {/* Hover Effect / Tooltip */}
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  // Mobile App Modules
  const mobileModules = [
    {
      id: 'masa-yonetimi',
      title: 'Masa Yönetimi',
      valueStatement: 'Masaların durumunu anlık görüntüleyin ve yönetin.',
      bullets: [
        'Boş, dolu ve rezerve masa görünümü',
        'Masa kartları ve detay bilgileri',
        'Hızlı arama ve filtreleme'
      ],
      imageOnLeft: false,
      icon: <LayoutGrid className="w-12 h-12 text-emerald-400" />,
      customVisual: (
        <div className="flex items-center justify-center py-4">
          <div className="w-[280px] h-[580px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 overflow-hidden relative shadow-2xl flex flex-col font-sans ring-1 ring-white/10">
            {/* Status Bar */}
            <div className="h-8 bg-slate-900 flex justify-between items-center px-6 pt-2">
               <span className="text-[10px] text-slate-400 font-medium tracking-wide">09:41</span>
               <div className="flex gap-1">
                 <div className="w-3.5 h-2 bg-slate-700 rounded-[1px]"></div>
                 <div className="w-2.5 h-2 bg-slate-700 rounded-[1px]"></div>
               </div>
            </div>
            
            {/* Header */}
            <div className="px-5 py-4 bg-slate-900 z-10 flex justify-between items-center border-b border-slate-800/50">
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">Masalar</h4>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">Bahçe Bölümü</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700/50">
                 <LayoutGrid className="w-4 h-4 text-slate-300"/>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="px-5 pt-3 pb-1 flex gap-2 overflow-x-auto no-scrollbar">
              <span className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-[10px] font-bold shadow-sm">Tümü</span>
              <span className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-medium border border-slate-700">Boş (4)</span>
              <span className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-medium border border-slate-700">Dolu (8)</span>
            </div>

            {/* Content Grid */}
            <div className="flex-1 p-4 overflow-y-auto no-scrollbar">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: 'M-1', s: 'Boş', c: 'bg-slate-800/40 border-slate-700 text-slate-400', i: null },
                  { n: 'M-2', s: 'Dolu', time: '12 dk', c: 'bg-blue-600/10 border-blue-500/30 text-blue-100', i: 'blue' },
                  { n: 'M-3', s: 'Dolu', time: '45 dk', c: 'bg-blue-600/10 border-blue-500/30 text-blue-100', i: 'blue' },
                  { n: 'M-4', s: 'Rezerve', time: '19:30', c: 'bg-purple-600/10 border-purple-500/30 text-purple-200', i: 'purple' },
                  { n: 'M-5', s: 'Boş', c: 'bg-slate-800/40 border-slate-700 text-slate-400', i: null },
                  { n: 'M-6', s: 'Ödeme', c: 'bg-emerald-600/10 border-emerald-500/30 text-emerald-200', i: 'emerald' },
                ].map((m, i) => (
                  <div 
                    key={i} 
                    className={`p-3.5 rounded-xl border flex flex-col justify-between h-24 relative overflow-hidden active:scale-95 transition-all duration-200 animate-fade-in ${m.c}`} 
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {m.i && (
                      <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent to-${m.i}-500/10 rounded-bl-3xl -mr-2 -mt-2`}></div>
                    )}
                    <div className="flex justify-between items-start z-10">
                      <span className="text-sm font-bold tracking-tight">{m.n}</span>
                      {m.i && <div className={`w-1.5 h-1.5 rounded-full bg-${m.i}-400 shadow-[0_0_8px_rgba(0,0,0,0.5)]`}></div>}
                    </div>
                    <div className="z-10">
                      <span className="block text-[11px] font-medium opacity-90">{m.s}</span>
                      {m.time && <span className="text-[9px] opacity-60 font-medium mt-0.5 block">{m.time}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'siparis-olusturma',
      title: 'Sipariş Oluşturma',
      valueStatement: 'Masada hızlı ve hatasız sipariş oluşturun.',
      bullets: [
        'Hızlı ürün arama',
        'Varyant ve opsiyon seçimi',
        'Not ekleme ve özel istekler',
        'Tek dokunuş ile gönderim'
      ],
      imageOnLeft: true,
      icon: <ShoppingCart className="w-12 h-12 text-emerald-400" />,
      customVisual: (
        <div className="flex items-center justify-center py-4">
          <div className="w-[280px] h-[580px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 overflow-hidden relative shadow-2xl flex flex-col font-sans ring-1 ring-white/10">
            {/* Status Bar */}
            <div className="h-8 bg-slate-900 flex justify-between items-center px-6 pt-2">
               <span className="text-[10px] text-slate-400 font-medium tracking-wide">12:30</span>
               <div className="flex gap-1">
                 <div className="w-3.5 h-2 bg-slate-700 rounded-[1px]"></div>
                 <div className="w-2.5 h-2 bg-slate-700 rounded-[1px]"></div>
               </div>
            </div>

            {/* Header: Table Info */}
            <div className="px-5 py-4 bg-slate-900 z-10 border-b border-slate-800/50 flex justify-between items-center">
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">Masa 8</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <p className="text-[10px] text-emerald-400 font-medium">Sipariş Alınıyor</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700/50">
                 <ShoppingCart className="w-4 h-4 text-slate-300"/>
              </div>
            </div>

            {/* Product List */}
            <div className="flex-1 overflow-hidden bg-slate-900">
              <div className="p-4 space-y-3">
                {[
                  { name: 'Mercimek Çorbası', price: 90, sub: 'Az Tuzlu', added: 1 },
                  { name: 'Adana Kebap', price: 320, sub: '1.5 Porsiyon, Acılı', added: 2 },
                  { name: 'Ayran', price: 45, sub: 'Kapalı', added: 2 },
                  { name: 'Künefe', price: 180, sub: 'Kaymaklı', added: 0 },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-xl border transition-all ${item.added > 0 ? 'bg-blue-600/10 border-blue-500/30' : 'bg-slate-800/40 border-slate-800'}`}>
                    <div>
                      <div className="text-sm font-medium text-slate-200">{item.name}</div>
                      {item.sub && <div className="text-[10px] text-slate-500 mt-0.5">{item.sub}</div>}
                      <div className={`text-[11px] font-medium mt-1 ${item.added > 0 ? 'text-blue-300' : 'text-slate-400'}`}>₺{item.price}</div>
                    </div>
                    
                    {item.added > 0 ? (
                      <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                        <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-xs font-medium">-</button>
                        <span className="text-xs font-bold w-4 text-center text-white">{item.added}</span>
                        <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-xs font-medium">+</button>
                      </div>
                    ) : (
                      <button className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Bottom Summary */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] z-20">
              <div className="flex justify-between items-center mb-3 px-1">
                <span className="text-xs text-slate-400 font-medium">Toplam Tutar</span>
                <span className="text-lg font-bold text-white tracking-tight">₺820</span>
              </div>
              <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2">
                <span>Siparişi Gönder</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'siparis-takibi',
      title: 'Sipariş Takibi',
      valueStatement: 'Siparişlerin durumunu gerçek zamanlı takip edin.',
      bullets: [
        'Hazırlanıyor ve hazır durumları',
        'Teslim etme işlemi',
        'İptal ve iade yönetimi',
        'Gecikme görünümü ve uyarılar'
      ],
      imageOnLeft: false,
      icon: <Clock className="w-12 h-12 text-emerald-400" />,
      customVisual: (
        <div className="flex items-center justify-center py-4">
           <div className="w-[280px] h-[580px] bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-[2.5rem] border-[6px] border-slate-800/60 overflow-hidden relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col font-sans ring-1 ring-white/5 backdrop-blur-sm">
            {/* Status Bar */}
            <div className="h-8 bg-gradient-to-b from-slate-900/95 to-slate-900/80 backdrop-blur-sm flex justify-between items-center px-6 pt-2 border-b border-white/5">
               <span className="text-[10px] text-slate-400/80 font-medium tracking-wide">12:45</span>
               <div className="flex gap-1">
                 <div className="w-3.5 h-2 bg-slate-700/60 rounded-[1px] blur-[0.5px]"></div>
                 <div className="w-2.5 h-2 bg-slate-700/60 rounded-[1px] blur-[0.5px]"></div>
               </div>
            </div>

            {/* Header */}
            <div className="px-5 pt-4 pb-2 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-transparent backdrop-blur-md z-10 border-b border-white/5">
               <div className="flex justify-between items-center mb-4">
                 <div>
                   <h4 className="text-lg font-bold text-white/95 tracking-tight drop-shadow-sm">Sipariş Takibi</h4>
                   <div className="flex items-center gap-1.5 mt-0.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse shadow-[0_0_6px_rgba(59,130,246,0.5)]"></div>
                     <p className="text-[10px] text-blue-400/90 font-medium">Canlı Akış</p>
                   </div>
                 </div>
                 <div className="px-2.5 py-1 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/40 text-[10px] font-medium text-slate-300/90 shadow-sm">
                   Tüm Masalar
                 </div>
               </div>

               {/* Segmented Control */}
               <div className="flex p-1 bg-slate-800/50 backdrop-blur-sm rounded-xl mb-2 border border-slate-700/30 shadow-inner">
                 <button className="flex-1 py-1.5 bg-slate-700/70 backdrop-blur-sm rounded-lg text-[10px] font-bold text-white shadow-sm transition-all duration-200">Hazırlanıyor</button>
                 <button className="flex-1 py-1.5 text-[10px] font-medium text-slate-400/80 hover:text-slate-200 transition-colors duration-200">Hazır</button>
                 <button className="flex-1 py-1.5 text-[10px] font-medium text-slate-400/80 hover:text-slate-200 transition-colors duration-200">Teslim</button>
               </div>
            </div>

            {/* Order List */}
            <div className="flex-1 overflow-y-auto no-scrollbar bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 pt-0 space-y-3">
              {[
                { table: 'M-5', items: '1x Adana Kebap, 1x Ayran', time: '14 dk', status: 'Gecikti', alert: true },
                { table: 'M-12', items: '2x Mercimek Çorbası', time: '2 dk', status: 'Hazırlanıyor', alert: false },
                { table: 'M-8', items: '1x Künefe (Kaymaklı)', time: '5 dk', status: 'Hazırlanıyor', alert: false },
                { table: 'M-3', items: '1x Mevsim Salata', time: '1 dk', status: 'Hazır', ready: true },
                { table: 'M-10', items: '3x Çay', time: '8 dk', status: 'Hazırlanıyor', alert: false },
              ].map((order, i) => (
                <div key={i} className={`p-3 rounded-2xl border flex flex-col gap-2 transition-all duration-300 backdrop-blur-sm ${order.ready ? 'bg-emerald-900/15 border-emerald-500/25 shadow-[0_4px_12px_rgba(16,185,129,0.15)]' : 'bg-slate-800/30 border-slate-700/30 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:border-slate-700/40'}`}>
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold backdrop-blur-sm transition-all duration-200 ${order.alert ? 'bg-orange-500/15 text-orange-400/90 border border-orange-500/25 shadow-[0_2px_6px_rgba(251,146,60,0.2)]' : 'bg-slate-800/60 text-slate-300/90 border border-slate-700/40 shadow-sm'}`}>
                        {order.table}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-200/90 line-clamp-1">{order.items}</div>
                        <div className="flex items-center gap-2 mt-1">
                          {order.alert && (
                            <div className="flex items-center gap-1 text-[9px] text-orange-400/90 font-bold px-1.5 py-0.5 bg-orange-500/15 backdrop-blur-sm rounded-lg border border-orange-500/20 shadow-sm">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                              Gecikme
                            </div>
                          )}
                          <span className="text-[10px] text-slate-500/70">{order.time}</span>
                        </div>
                      </div>
                    </div>
                    {order.ready ? (
                      <button className="px-2.5 py-1.5 bg-emerald-600/90 hover:bg-emerald-500 text-white text-[10px] font-bold rounded-xl shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_16px_rgba(16,185,129,0.4)] active:scale-95 transition-all duration-200 backdrop-blur-sm border border-emerald-500/20">
                        Teslim Et
                      </button>
                    ) : (
                      <span className={`text-[9px] px-2 py-1 rounded-full font-medium backdrop-blur-sm border transition-all duration-200 ${order.alert ? 'bg-orange-500/15 text-orange-400/90 border-orange-500/25 shadow-sm' : 'bg-blue-500/15 text-blue-300/90 border-blue-500/25 shadow-sm'}`}>
                        {order.status}
                      </span>
                    )}
                  </div>
                  {order.ready && (
                    <div className="w-full h-1 bg-emerald-500/20 rounded-full overflow-hidden mt-1 backdrop-blur-sm">
                      <div className="h-full w-full bg-emerald-500/80 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'odeme',
      title: 'Ödeme & Kapatma',
      valueStatement: 'Hızlı ödeme işlemleri ve masa kapatma.',
      bullets: [
        'Parçalı ödeme desteği',
        'Nakit ve kart ödeme seçenekleri',
        'Masa kapatma işlemleri',
        'Fiş ve özet yazdırma'
      ],
      imageOnLeft: true,
      icon: <CreditCard className="w-12 h-12 text-emerald-400" />,
      customVisual: (
        <div className="flex items-center justify-center py-4">
          <div className="w-[280px] h-[580px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 overflow-hidden relative shadow-2xl flex flex-col font-sans ring-1 ring-white/10">
            {/* Status Bar */}
            <div className="h-8 bg-slate-900 flex justify-between items-center px-6 pt-2">
               <span className="text-[10px] text-slate-400 font-medium tracking-wide">13:15</span>
               <div className="flex gap-1">
                 <div className="w-3.5 h-2 bg-slate-700 rounded-[1px]"></div>
                 <div className="w-2.5 h-2 bg-slate-700 rounded-[1px]"></div>
               </div>
            </div>

            {/* Header */}
            <div className="px-5 pt-2 pb-4 bg-slate-900 z-10 border-b border-slate-800/50">
               <div className="flex justify-between items-start mb-1">
                 <div>
                   <h4 className="text-lg font-bold text-white tracking-tight">Ödeme</h4>
                   <p className="text-[11px] text-slate-400 font-medium mt-0.5">Masa 12 • Adisyon Özeti</p>
                 </div>
                 <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold text-blue-300 uppercase tracking-wide">
                   Açık
                 </div>
               </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden bg-slate-900 p-4 pt-2 space-y-3 flex flex-col justify-between">
              
              {/* Receipt Summary */}
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="space-y-1.5 mb-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>2x Adana Kebap</span>
                    <span className="font-medium">₺320</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>1x Mevsim Salata</span>
                    <span className="font-medium">₺110</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>2x Ayran</span>
                    <span className="font-medium">₺45</span>
                  </div>
                </div>
                <div className="border-t border-slate-700/50 pt-2">
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                    <span>Ara Toplam</span>
                    <span>₺475</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white">
                    <span>Genel Toplam</span>
                    <span>₺475.00</span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5 pl-1">Ödeme Yöntemi</p>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:bg-slate-700 transition-colors flex flex-col items-center gap-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70"><rect x="2" y="4" width="20" height="12" rx="2"/><path d="M12 16v4"/><path d="M8 20h8"/></svg>
                    <span className="text-[10px] font-medium">Nakit</span>
                  </button>
                  <button className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/50 text-blue-100 flex flex-col items-center gap-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5"></div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                    <span className="text-[10px] font-bold">Kredi Kartı</span>
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  </button>
                </div>
              </div>

              {/* Split Payment Toggle */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div>
                  <span className="text-xs font-medium text-slate-200 block">Parçalı Ödeme</span>
                  <span className="text-[9px] text-slate-500">Tutarın bir kısmını al</span>
                </div>
                <div className="w-8 h-4 rounded-full bg-slate-700 relative">
                  <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-slate-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] z-20 space-y-2.5">
              <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2">
                <span>Ödemeyi Al & Masayı Kapat</span>
              </button>
              <button className="w-full py-2.5 border border-slate-700 hover:bg-slate-800 text-slate-300 text-[10px] font-medium rounded-lg active:scale-95 transition-all flex items-center justify-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
                <span>Fiş Yazdır</span>
              </button>
              <p className="text-[9px] text-center text-slate-500">İşlem onaylandıktan sonra geri alınamaz</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen overflow-x-hidden" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
        <FeatureHero onDemoClick={() => setIsDemoModalOpen(true)} />
        
        <PillarSwitcher />

        {/* Web Panel Modules */}
        <section id="web-panel" className="py-24 relative">
          {/* Divider & Glow */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-blue-500/5 blur-[80px] pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
                Web Paneli Özellikleri
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                İşletmenizin tüm operasyonlarını tek merkezden yönetin
              </p>
            </div>
          </div>
          <div className="space-y-24">
            {webModules.map((module) => (
              <ModuleSection
                key={module.id}
                id={module.id}
                title={module.title}
                valueStatement={module.valueStatement}
                bullets={module.bullets}
                imageOnLeft={module.imageOnLeft}
                icon={module.icon}
                customVisual={module.customVisual}
              />
            ))}
          </div>
        </section>

        {/* Mobile App Modules */}
        <section id="mobile-app" className="py-24 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
                Mobil Uygulama Özellikleri
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Sahada hızlı, hatasız ve pratik kullanım
              </p>
            </div>
          </div>
          <div className="space-y-24">
            {mobileModules.map((module) => (
              <ModuleSection
                key={module.id}
                id={module.id}
                title={module.title}
                valueStatement={module.valueStatement}
                bullets={module.bullets}
                imageOnLeft={module.imageOnLeft}
                icon={module.icon}
                customVisual={module.customVisual}
                rawVisual={true}
              />
            ))}
          </div>
        </section>

        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          <IntegrationGrid />
        </div>
        
        <SecurityCards />
        
        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          <FeatureCTA onDemoClick={() => setIsDemoModalOpen(true)} />
        </div>

        <FeatureFAQ />

        <DemoModal 
          isOpen={isDemoModalOpen} 
          onClose={() => setIsDemoModalOpen(false)} 
        />
      </div>
    </Layout>
  )
}

export default FeaturesPage
