import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { Shield, Globe } from 'lucide-react'

type Language = 'en' | 'tr'

const translations = {
  en: {
    title: 'Privacy Policy',
    subtitle: 'This is a placeholder privacy policy page. The full privacy policy will be available soon.',
    dataCollection: 'Data Collection',
    dataCollectionText: 'WMB Yazilim collects and processes personal data in accordance with applicable data protection laws.',
    dataUsage: 'Data Usage',
    dataUsageText: 'Your data is used solely for providing and improving our services.',
    contact: 'Contact',
    contactText: 'For privacy-related inquiries, please contact us at',
    lastUpdated: 'Last updated:'
  },
  tr: {
    title: 'Gizlilik Politikasi',
    subtitle: 'Bu bir yer tutucu gizlilik politikasi sayfasidir. Tam gizlilik politikasi yakinda hazir olacaktir.',
    dataCollection: 'Veri Toplama',
    dataCollectionText: 'WMB Yazilim, gecerli veri koruma yasalarina uygun olarak kisisel verileri toplar ve isler.',
    dataUsage: 'Veri Kullanim',
    dataUsageText: 'Verileriniz yalnizca hizmetlerimizi saglamak ve gelistirmek icin kullanilir.',
    contact: 'Iletisim',
    contactText: 'Gizlilik ile ilgili sorulariniz icin lutfen bizimle iletisime gecin',
    lastUpdated: 'Son guncelleme:'
  }
}

function PrivacyPage() {
  const [language, setLanguage] = useState<Language>('en')
  const t = translations[language]

  useEffect(() => {
    document.title = 'Privacy Policy | WMB'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for WMB-MobileApp and WMB Yazilim services.')
    }
    window.scrollTo(0, 0)
  }, [language])

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-400" />
                <h1 className="text-3xl font-bold text-white">{t.title}</h1>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-slate-400" />
                <button
                  onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-sm rounded-lg transition-colors border border-slate-600"
                >
                  {language === 'en' ? 'TR' : 'EN'}
                </button>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-400 mb-6">
                {t.subtitle}
              </p>
              
              <div className="space-y-6 text-slate-300">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t.dataCollection}</h2>
                  <p className="text-slate-400">
                    {t.dataCollectionText}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t.dataUsage}</h2>
                  <p className="text-slate-400">
                    {t.dataUsageText}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t.contact}</h2>
                  <p className="text-slate-400">
                    {t.contactText}{' '}
                    <a href="mailto:wmbyazilim@gmail.com" className="text-blue-400 hover:underline">
                      wmbyazilim@gmail.com
                    </a>
                  </p>
                </section>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-slate-400 text-sm">
                  {t.lastUpdated} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPage
