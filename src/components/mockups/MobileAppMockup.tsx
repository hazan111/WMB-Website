import styles from './Mockups.module.css'

export default function MobileAppMockup() {
  return (
    <div className={`relative w-[320px] shrink-0 ${styles.animateFadeIn}`} style={{ animationDelay: '200ms' }} aria-hidden="true">
      {/* Mobile Frame */}
      <div className="relative rounded-[2.5rem] bg-[#0A0A0A] border-[6px] border-[#1f1f1f] shadow-2xl overflow-hidden h-[640px] flex flex-col ring-1 ring-white/10">
        {/* Notch area */}
        <div className="absolute top-0 inset-x-0 h-7 bg-black z-20 flex justify-center">
          <div className="w-24 h-5 bg-[#1f1f1f] rounded-b-xl"></div>
        </div>

        {/* Top Bar */}
        <div className="mt-8 px-5 py-3 flex items-center justify-between border-b border-white/5 bg-white/[0.02] backdrop-blur-md sticky top-0 z-10">
          <button type="button" className="text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
          </button>
          <div className="flex flex-col items-center">
            <h1 className="text-sm font-medium text-white tracking-tight">Masa 12</h1>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-[10px] text-green-500 font-medium">Online</span>
            </div>
          </div>
          <button type="button" className="text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className={`flex-1 overflow-y-auto ${styles.scrollbarHide} p-4 space-y-3 relative`}>
          {/* Section Title */}
          <div className={`flex justify-between items-end pb-1 ${styles.animateFadeIn}`} style={{ animationDelay: '100ms' }}>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sipariş Özeti</h2>
            <span className="text-[10px] text-slate-600">4 Ürün</span>
          </div>

          {/* Item 1 */}
          <div className={`flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] ${styles.animateFadeIn}`} style={{ animationDelay: '100ms' }}>
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4Z"></path><path d="M19 12v3a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-3"></path><path d="M14.4 12.6l-2-1.3l2-1.3"></path><path d="M12 21v-4"></path></svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-slate-200 font-medium">Kıymalı Börek</h3>
              <p className="text-[10px] text-slate-500">Porsiyon: Tam</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500">x1</span>
              <span className="text-xs font-medium text-white">₺140</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className={`flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] ${styles.animateFadeIn}`} style={{ animationDelay: '200ms' }}>
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8a2 2 0 0 0 2-2V5.414a2 2 0 0 0-.586-1.414l-1.414-1.414A2 2 0 0 0 14.586 2H9.414a2 2 0 0 0-1.414.586L6.586 4A2 2 0 0 0 6 5.414V19a2 2 0 0 0 2 2z"></path><line x1="12" y1="9" x2="12" y2="15"></line><line x1="9" y1="12" x2="15" y2="12"></line></svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-slate-200 font-medium">Ayran</h3>
              <p className="text-[10px] text-slate-500">Soğuk</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500">x2</span>
              <span className="text-xs font-medium text-white">₺40</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className={`flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] ${styles.animateFadeIn}`} style={{ animationDelay: '300ms' }}>
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-slate-200 font-medium">Mercimek Çorbası</h3>
              <p className="text-[10px] text-slate-500">Az Tuzlu</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500">x1</span>
              <span className="text-xs font-medium text-white">₺90</span>
            </div>
          </div>

          {/* Item 4 */}
          <div className={`flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] ${styles.animateFadeIn}`} style={{ animationDelay: '400ms' }}>
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"></path></svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-slate-200 font-medium">Salata</h3>
              <p className="text-[10px] text-slate-500">Mevsim</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500">x1</span>
              <span className="text-xs font-medium text-white">₺110</span>
            </div>
          </div>

          {/* Decorative Spacer */}
          <div className="h-24"></div>
        </div>

        {/* Bottom Sticky Action */}
        <div className={`absolute bottom-0 inset-x-0 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-white/10 p-4 pb-6 z-20 ${styles.animateFadeIn}`} style={{ animationDelay: '500ms' }}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-slate-400 font-medium">Genel Toplam</span>
            <span className="text-xl font-semibold text-white tracking-tight">₺380.00</span>
          </div>
          <button type="button" className={`w-full bg-green-600 hover:bg-green-500 text-white font-medium py-3 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.3)] border border-green-500 transition-all active:scale-[0.98] ${styles.animatePulseSoft} flex items-center justify-center gap-2 group`}>
            <span>Siparişi Gönder</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
          </button>
        </div>

        {/* Bottom Safe Area Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30"></div>
      </div>
    </div>
  )
}