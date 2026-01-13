import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#0f172a] py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          {/* Left Section - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">WMB TRACKER</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              WMB Adisyon, restoran operasyonlarını dijitalleştirmek için geliştirilmiş web ve mobil tabanlı bir yönetim sistemidir.
            </p>
          </div>

          {/* Middle Section - Kurumsal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Kurumsal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/hakkimizda" 
                  className="text-xs text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-1"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link 
                  to="/iletisim" 
                  className="text-xs text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-1"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link 
                  to="/sss" 
                  className="text-xs text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-1"
                >
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link 
                  to="/destek" 
                  className="text-xs text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-1"
                >
                  Destek
                </Link>
              </li>
            </ul>
        </div>
        
          {/* Right Section - Hukuki */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Hukuki</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/gizlilik" 
                  className="text-xs text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-1"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link 
                  to="/kvkk" 
                  className="text-xs text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-1"
                >
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link 
                  to="/kullanim-sartlari" 
                  className="text-xs text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-1"
                >
                  Kullanım Şartları
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact & Trust Microcopy */}
        <div className="pt-5 md:pt-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-0">
            <div className="text-center md:text-left">
              <p className="text-xs text-slate-400 mb-0.5">
                Satış ve destek için: <a href="mailto:wmbyazilim@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-1">wmbyazilim@gmail.com</a>
              </p>
              <p className="text-xs text-slate-500">
                Türkiye merkezli geliştirilmiştir.
              </p>
            </div>
        <p className="text-xs text-slate-600">© 2024 WMB Tracker. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
