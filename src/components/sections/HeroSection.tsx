import { memo } from 'react'
// import OptimizedImage from '../ui/OptimizedImage'

const HeroSection = memo(() => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
      
      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/[0.05] rounded-[100%] blur-3xl pointer-events-none"></div>
      
      {/* 
        Example LCP Image Usage (when adding hero image):
        <OptimizedImage
          src="/images/hero-image.jpg"
          srcSet="/images/hero-image-800w.jpg 800w, /images/hero-image-1200w.jpg 1200w, /images/hero-image-1600w.jpg 1600w"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          alt="WMB Tracker - Modern Restoran Yönetim Sistemi"
          width={1200}
          height={600}
          isLCP={true}
          className="w-full h-auto"
        />
      */}
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-blue-400 text-xs font-medium mb-8 animate-fade-in opacity-0">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Web, Mobil ve Backend - Tam Entegre Sistem
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-6 max-w-4xl mx-auto animate-fade-in delay-100 opacity-0">
          Restoranınızı<br />dijitalleştirin.
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in delay-200 opacity-0">
          Modern restoran ve yemekhane yönetim sistemi. Web paneli, mobil uygulama ve güçlü backend API ile tüm operasyonlarınızı tek platformda yönetin.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300 opacity-0">
          <a 
            href="#" 
            className="group h-14 px-5 rounded-xl bg-black text-white flex items-center gap-3 hover:bg-neutral-900 transition-all active:scale-95 shadow-lg border border-neutral-800"
            aria-label="App Store'dan indir"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-neutral-400 leading-tight">Download on the</span>
              <span className="text-lg font-semibold leading-tight tracking-tight">App Store</span>
            </div>
          </a>
          <a 
            href="#" 
            className="group h-14 px-5 rounded-xl bg-black text-white flex items-center gap-3 hover:bg-neutral-900 transition-all active:scale-95 shadow-lg border border-neutral-800"
            aria-label="Google Play'den indir"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L14.54,17.15L6.05,2.66L20.16,10.81M6.05,21.34L14.54,12.85L16.81,15.12L20.16,13.19C20.5,12.92 20.75,12.5 20.75,12C20.75,11.5 20.5,11.08 20.16,10.81L16.81,8.88L14.54,11.15L6.05,21.34Z" />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-neutral-400 leading-tight">Get it on</span>
              <span className="text-lg font-semibold leading-tight tracking-tight">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export default HeroSection
