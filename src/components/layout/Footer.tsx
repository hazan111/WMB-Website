const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#0f172a] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">WMB TRACKER</span>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Destek</a>
          <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">API</a>
          <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Durum</a>
        </div>
        
        <p className="text-xs text-slate-600">© 2024 WMB Tracker. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer
