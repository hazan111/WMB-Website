import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed w-full z-50 top-0 border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center group-hover:bg-blue-500 transition-colors">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">WMB TRACKER</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <Link 
            to="/" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Ana Sayfa
          </Link>
          <Link 
            to="/product" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Nasıl Çalışır?
          </Link>
          <Link 
            to="/features" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Özellikler
          </Link>
          {/* Pricing link temporarily removed - TO RE-ENABLE: Uncomment below */}
          {/* <Link 
            to="/#pricing" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Fiyatlandırma
          </Link> */}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="mailto:info@wmbyazilim.com" 
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            İletişim
          </a>
          <a 
            href="#pricing" 
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/30"
          >
            Demo Talep Et
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Menüyü aç/kapat"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="md:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0f172a] backdrop-blur-xl border-b border-slate-800 shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-1">
              <Link
              to="/"
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/product"
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Nasıl Çalışır?
            </Link>
            <Link
              to="/features"
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Özellikler
            </Link>
            <div className="pt-2 mt-2 border-t border-slate-800 space-y-1">
              <a
                href="mailto:info@wmbyazilim.com"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                İletişim
              </a>
              <a
                href="#pricing"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-center"
              >
                Demo Talep Et
              </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
