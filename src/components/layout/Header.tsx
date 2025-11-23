const Header = () => {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center relative">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-sm font-medium tracking-tight text-white">WMB TRACKER</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#web" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">
            Web
          </a>
          <a href="#mobile" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">
            Mobil
          </a>
          <a href="#features" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">
            Özellikler
          </a>
          <a href="#pricing" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">
            Fiyatlandırma
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
