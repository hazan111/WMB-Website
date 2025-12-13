import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed w-full z-50 top-0 border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center group-hover:bg-blue-500 transition-colors">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">WMB TRACKER</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <Link 
            to="/product" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Nasıl Çalışır?
          </Link>
          <Link 
            to="/#features" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Özellikler
          </Link>
          <Link 
            to="/#pricing" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Fiyatlandırma
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="#pricing" 
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Giriş Yap
          </a>
          <a 
            href="#pricing" 
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/30"
          >
            Ücretsiz Dene
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
