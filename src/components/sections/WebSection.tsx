import { useState, useMemo, useCallback } from 'react'
import { Building2, MapPin, Package, ShoppingBag, Menu as MenuIcon, Users, Shield, BarChart3, UtensilsCrossed, Settings, Plus, Search, Edit, Trash2, TrendingUp, ShoppingCart, Folder, Calendar, X, ChevronDown } from 'lucide-react'

type TabType = 'dashboard' | 'companies' | 'branches' | 'menus' | 'products' | 'tables' | 'reports'

const WebSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [selectedReportType, setSelectedReportType] = useState('order')

  const tabs = useMemo(() => [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: BarChart3 },
    { id: 'companies' as TabType, label: 'Şirketler', icon: Building2 },
    { id: 'branches' as TabType, label: 'Şubeler', icon: MapPin },
    { id: 'menus' as TabType, label: 'Menüler', icon: MenuIcon },
    { id: 'products' as TabType, label: 'Ürünler', icon: ShoppingBag },
    { id: 'tables' as TabType, label: 'Masa Yönetimi', icon: UtensilsCrossed },
    { id: 'reports' as TabType, label: 'Raporlar', icon: BarChart3 }
  ], [])

  const features = useMemo(() => [
    {
      icon: Building2,
      title: 'Şirket Yönetimi',
      description: 'Çoklu şirket desteği ile tüm işletmelerinizi tek platformdan yönetin.'
    },
    {
      icon: MapPin,
      title: 'Şube Yönetimi',
      description: 'Her şube için bağımsız menü, ürün ve kullanıcı yönetimi.'
    },
    {
      icon: Package,
      title: 'Kategori & Ürün',
      description: 'Ürün kategorileri, fiyatlandırma ve stok takibi.'
    },
    {
      icon: MenuIcon,
      title: 'Menü Yönetimi',
      description: 'Dinamik menü oluşturma, şube bazlı menü atama.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Masa & Sipariş',
      description: 'Masa yönetimi, sipariş takibi ve gerçek zamanlı güncellemeler.'
    },
    {
      icon: BarChart3,
      title: 'Raporlama',
      description: 'Detaylı satış raporları, ürün performans analizi ve gelir takibi.'
    },
    {
      icon: Users,
      title: 'Kullanıcı Yönetimi',
      description: 'Personel yönetimi, şube atamaları ve yetkilendirme.'
    },
    {
      icon: Shield,
      title: 'Rol & İzin',
      description: 'Granüler izin sistemi ile detaylı erişim kontrolü.'
    }
  ], [])

  const renderContent = useCallback(() => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-medium text-white mb-2">Dashboard</h3>
              <p className="text-sm text-slate-400">Hoş geldiniz, Yönetici!</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-xs text-slate-400 mb-1">Toplam Şirket</div>
                <div className="text-2xl font-medium text-white">12</div>
                <div className="flex items-center gap-1 mt-2 text-emerald-500 text-xs">
                  <TrendingUp className="w-3 h-3" />
                  <span>+2 bu ay</span>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-xs text-slate-400 mb-1">Aktif Şubeler</div>
                <div className="text-2xl font-medium text-white">28</div>
                <div className="flex items-center gap-1 mt-2 text-emerald-500 text-xs">
                  <TrendingUp className="w-3 h-3" />
                  <span>+5 bu ay</span>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-xs text-slate-400 mb-1">Toplam Ürün</div>
                <div className="text-2xl font-medium text-white">342</div>
                <div className="flex items-center gap-1 mt-2 text-slate-500 text-xs">
                  <span>Son 30 gün</span>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-xs text-slate-400 mb-1">Aktif Menüler</div>
                <div className="text-2xl font-medium text-white">15</div>
                <div className="flex items-center gap-1 mt-2 text-slate-500 text-xs">
                  <span>8 şubede aktif</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <div className="text-sm text-slate-400 mb-4">Günlük Gelir Trendi</div>
              <div className="h-32 flex items-end gap-2">
                <div className="flex-1 bg-orange-500/40 rounded-t h-[30%]"></div>
                <div className="flex-1 bg-orange-500/50 rounded-t h-[50%]"></div>
                <div className="flex-1 bg-orange-500/60 rounded-t h-[70%]"></div>
                <div className="flex-1 bg-orange-500/70 rounded-t h-[60%]"></div>
                <div className="flex-1 bg-orange-500/80 rounded-t h-[80%]"></div>
                <div className="flex-1 bg-white rounded-t h-[90%] shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
                <div className="flex-1 bg-orange-500/60 rounded-t h-[55%]"></div>
              </div>
            </div>
          </>
        )

      case 'companies':
        return (
          <>
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Şirketler</h3>
                <p className="text-sm text-slate-400">Tüm şirketleri görüntüleyin ve yönetin</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                <Plus className="w-4 h-4" />
                Yeni Şirket
              </button>
            </div>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Şirket ara..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-600"
                />
              </div>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Lezzet Restoran Grubu', branches: 8, status: 'Aktif' },
                { name: 'Gourmet Yemekhane', branches: 5, status: 'Aktif' },
                { name: 'Fast Food Zinciri', branches: 12, status: 'Aktif' },
                { name: 'Cafe & Bistro', branches: 3, status: 'Aktif' }
              ].map((company, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:bg-slate-700/50 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium mb-1">{company.name}</div>
                      <div className="text-xs text-slate-400">{company.branches} şube</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">{company.status}</span>
                      <button className="p-2 hover:bg-white/10 rounded transition-colors">
                        <Edit className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )

      case 'branches':
        return (
          <>
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Şubeler</h3>
                <p className="text-sm text-neutral-400">Tüm şubeleri görüntüleyin ve yönetin</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                <Plus className="w-4 h-4" />
                Yeni Şube
              </button>
            </div>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Şube ara..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Lezzet - Kadıköy', address: 'Kadıköy, İstanbul', tables: 15, status: 'Aktif' },
                { name: 'Lezzet - Beşiktaş', address: 'Beşiktaş, İstanbul', tables: 20, status: 'Aktif' },
                { name: 'Gourmet - Şişli', address: 'Şişli, İstanbul', tables: 12, status: 'Aktif' },
                { name: 'Fast Food - Taksim', address: 'Taksim, İstanbul', tables: 8, status: 'Aktif' }
              ].map((branch, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:bg-slate-700/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-white font-medium mb-1">{branch.name}</div>
                      <div className="text-xs text-neutral-400">{branch.address}</div>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">{branch.status}</span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-2">{branch.tables} masa</div>
                </div>
              ))}
            </div>
          </>
        )

      case 'menus':
        return (
          <>
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Menüler</h3>
                <p className="text-sm text-neutral-400">Menüleri görüntüleyin ve düzenleyin</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                <Plus className="w-4 h-4" />
                Yeni Menü
              </button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Kahvaltı Menüsü', items: 24, branches: 5, status: 'Aktif' },
                { name: 'Öğle Yemeği Menüsü', items: 32, branches: 8, status: 'Aktif' },
                { name: 'Akşam Menüsü', items: 45, branches: 6, status: 'Aktif' },
                { name: 'Çocuk Menüsü', items: 12, branches: 3, status: 'Aktif' }
              ].map((menu, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:bg-slate-700/50 transition-colors">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="text-white font-medium mb-1">{menu.name}</div>
                      <div className="flex gap-4 text-xs text-neutral-400">
                        <span>{menu.items} ürün</span>
                        <span>{menu.branches} şubede aktif</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">{menu.status}</span>
                      <button className="p-2 hover:bg-white/10 rounded transition-colors">
                        <Edit className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )

      case 'products':
        return (
          <>
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">Ürünler</h3>
                <p className="text-sm text-neutral-400">Ürünleri görüntüleyin ve yönetin</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                <Plus className="w-4 h-4" />
                Yeni Ürün
              </button>
            </div>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Tavuk Şiş', category: 'Ana Yemek', price: '₺45', stock: 'Stokta' },
                { name: 'Köfte', category: 'Ana Yemek', price: '₺52', stock: 'Stokta' },
                { name: 'Mevsim Salatası', category: 'Salata', price: '₺25', stock: 'Stokta' },
                { name: 'Kola', category: 'İçecek', price: '₺15', stock: 'Stokta' },
                { name: 'Ayran', category: 'İçecek', price: '₺12', stock: 'Stokta' },
                { name: 'Baklava', category: 'Tatlı', price: '₺35', stock: 'Stokta' }
              ].map((product, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:bg-slate-700/50 transition-colors">
                  <div className="text-white font-medium mb-1">{product.name}</div>
                  <div className="text-xs text-neutral-400 mb-2">{product.category}</div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-white font-medium">{product.price}</div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">{product.stock}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )

      case 'tables':
        return (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-medium text-white mb-2">Masa Yönetimi</h3>
              <p className="text-sm text-slate-400">Masaları görüntüleyin ve siparişleri takip edin</p>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { number: 'M-01', status: 'Dolu', order: '₺125.50', time: '25dk' },
                { number: 'M-02', status: 'Boş', order: '-', time: '-' },
                { number: 'M-03', status: 'Dolu', order: '₺89.00', time: '15dk' },
                { number: 'M-04', status: 'Boş', order: '-', time: '-' },
                { number: 'M-05', status: 'Dolu', order: '₺142.00', time: '32dk' },
                { number: 'M-06', status: 'Boş', order: '-', time: '-' },
                { number: 'M-07', status: 'Dolu', order: '₺67.50', time: '8dk' },
                { number: 'M-08', status: 'Boş', order: '-', time: '-' }
              ].map((table, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg p-4 border transition-colors ${
                    table.status === 'Dolu'
                      ? 'bg-blue-600/20 border-blue-500/30 text-white'
                      : 'bg-slate-800/50 text-white border-slate-700/50 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-sm font-bold">{table.number}</div>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        table.status === 'Dolu'
                          ? 'bg-blue-500/30 text-blue-300'
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}
                    >
                      {table.status}
                    </span>
                  </div>
                  <div className="text-lg font-semibold mb-1">{table.order}</div>
                  <div className={`text-xs ${table.status === 'Dolu' ? 'text-slate-300' : 'text-slate-400'}`}>{table.time}</div>
                </div>
              ))}
            </div>
          </>
        )

      case 'reports':
        const reportTypes = [
          { id: 'order', label: 'Sipariş Raporu', icon: ShoppingCart },
          { id: 'category', label: 'Kategori Raporu', icon: Folder },
          { id: 'product', label: 'Ürün Raporu', icon: Package },
          { id: 'employee', label: 'Çalışan Raporu', icon: Users },
          { id: 'table', label: 'Masa Raporu', icon: UtensilsCrossed }
        ]
        
        const renderReportContent = () => {
          switch (selectedReportType) {
            case 'order':
              return (
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="text-xs text-slate-400 mb-1">Toplam Sipariş</div>
                      <div className="text-2xl font-medium text-white">1,247</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="text-xs text-slate-400 mb-1">Toplam Gelir</div>
                      <div className="text-2xl font-medium text-white">₺89,450</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="text-xs text-slate-400 mb-1">Ortalama Sipariş</div>
                      <div className="text-2xl font-medium text-white">₺71.70</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="text-sm font-medium text-white mb-4">Günlük Sipariş Trendi</div>
                    <div className="h-48 flex items-end gap-2">
                      {[65, 80, 45, 90, 75, 110, 95, 85, 70, 100, 88, 92].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-600 rounded-t" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            
            case 'category':
              return (
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="text-sm font-medium text-white mb-4">Kategori Bazlı Gelir Dağılımı</div>
                    <div className="space-y-4">
                      {[
                        { name: 'Ana Yemekler', amount: '₺45,200', percentage: 50.5, color: 'bg-blue-600' },
                        { name: 'İçecekler', amount: '₺18,500', percentage: 20.7, color: 'bg-emerald-500' },
                        { name: 'Tatlılar', amount: '₺12,300', percentage: 13.8, color: 'bg-amber-500' },
                        { name: 'Salatalar', amount: '₺8,900', percentage: 9.9, color: 'bg-purple-500' },
                        { name: 'Çorbalar', amount: '₺4,550', percentage: 5.1, color: 'bg-indigo-500' }
                      ].map((cat, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-white">{cat.name}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-slate-400">{cat.amount}</span>
                              <span className="text-xs text-slate-500">{cat.percentage}%</span>
                            </div>
                          </div>
                          <div className="w-full bg-slate-700/50 rounded-full h-2">
                            <div className={`${cat.color} h-2 rounded-full`} style={{ width: `${cat.percentage}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            
            case 'product':
              return (
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="text-sm font-medium text-white mb-4">En Çok Satan Ürünler</div>
                    <div className="space-y-3">
                      {[
                        { name: 'Tavuk Şiş', sales: 342, revenue: '₺15,390', trend: '+12%' },
                        { name: 'Köfte', sales: 298, revenue: '₺15,496', trend: '+8%' },
                        { name: 'Lahmacun', sales: 245, revenue: '₺12,250', trend: '+15%' },
                        { name: 'Pide', sales: 187, revenue: '₺11,220', trend: '+5%' },
                        { name: 'Mevsim Salatası', sales: 156, revenue: '₺3,900', trend: '+20%' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                          <div className="flex-1">
                            <div className="text-white font-medium mb-1">{item.name}</div>
                            <div className="text-xs text-slate-400">{item.sales} satış</div>
                          </div>
                          <div className="text-right mr-4">
                            <div className="text-white font-medium">{item.revenue}</div>
                            <div className="text-xs text-emerald-400">{item.trend}</div>
                          </div>
                          <div className="w-24 bg-slate-700/50 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(item.sales / 342) * 100}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            
            case 'employee':
              return (
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="text-sm font-medium text-white mb-4">Çalışan Performansı</div>
                    <div className="space-y-4">
                      {[
                        { name: 'Ahmet Yılmaz', orders: 142, revenue: '₺10,180', rating: 4.8 },
                        { name: 'Mehmet Demir', orders: 128, revenue: '₺9,216', rating: 4.6 },
                        { name: 'Ayşe Kaya', orders: 135, revenue: '₺9,720', rating: 4.9 },
                        { name: 'Fatma Şahin', orders: 118, revenue: '₺8,496', rating: 4.7 },
                        { name: 'Ali Çelik', orders: 95, revenue: '₺6,840', rating: 4.5 }
                      ].map((emp, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                              <Users className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{emp.name}</div>
                              <div className="text-xs text-slate-400">{emp.orders} sipariş</div>
                            </div>
                          </div>
                          <div className="text-right mr-4">
                            <div className="text-white font-medium">{emp.revenue}</div>
                            <div className="text-xs text-amber-400">⭐ {emp.rating}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            
            case 'table':
              return (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="text-xs text-slate-400 mb-1">Ortalama Masa Süresi</div>
                      <div className="text-2xl font-medium text-white">42 dk</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="text-xs text-slate-400 mb-1">Günlük Masa Devir</div>
                      <div className="text-2xl font-medium text-white">3.2x</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="text-sm font-medium text-white mb-4">Masa Kullanım İstatistikleri</div>
                    <div className="space-y-4">
                      {[
                        { table: 'M-01', usage: 85, revenue: '₺1,245' },
                        { table: 'M-02', usage: 78, revenue: '₺1,180' },
                        { table: 'M-03', usage: 92, revenue: '₺1,350' },
                        { table: 'M-04', usage: 65, revenue: '₺980' },
                        { table: 'M-05', usage: 88, revenue: '₺1,290' }
                      ].map((t, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-white">{t.table}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-slate-400">{t.usage}% kullanım</span>
                              <span className="text-sm text-white font-medium">{t.revenue}</span>
                            </div>
                          </div>
                          <div className="w-full bg-slate-700/50 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${t.usage}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            
            default:
              return null
          }
        }
        
        return (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-medium text-white mb-2">Raporlar</h3>
              <p className="text-sm text-slate-400">Detaylı raporlar oluşturun ve analiz edin</p>
            </div>
            
            {/* Rapor Türü Seçin */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-white mb-4">Rapor Türü Seçin</h4>
              <div className="grid grid-cols-3 gap-3">
                {reportTypes.map((type) => {
                  const Icon = type.icon
                  const isSelected = selectedReportType === type.id
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedReportType(type.id)}
                      className={`p-4 rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                        <span className="text-sm font-medium">{type.label}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
            
            {/* Rapor İçeriği */}
            {renderReportContent()}
          </>
        )

      default:
        return null
    }
  }, [activeTab, selectedReportType])

  return (
    <section id="web" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-blue-400 text-xs font-medium mb-6">
            <Settings className="w-3 h-3" />
            Web Yönetim Paneli
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
            Tüm operasyonlarınızı<br />tek yerden yönetin
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Modern, responsive web arayüzü ile masaüstü ve tablet cihazlardan tüm işlemlerinizi gerçekleştirin.
          </p>
        </div>

        {/* Desktop Mockup */}
        <div className="relative mb-16">
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
              <div className="h-[500px] md:h-[600px] relative">
                {/* Sidebar */}
                <div className="absolute left-0 top-0 w-64 h-full bg-[#1e293b] border-r border-slate-800 p-4 overflow-y-auto">
                  <div className="space-y-1">
                    {tabs.map((tab) => {
                      const Icon = tab.icon
                      const isActive = activeTab === tab.id
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-3 p-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? 'bg-slate-800/50 text-white'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{tab.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Main Content */}
                <div className="ml-64 h-full p-6 overflow-y-auto">
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-[#1e293b]/60 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Icon className="text-white w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WebSection
