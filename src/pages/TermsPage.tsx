import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { FileText, Globe, Scale } from 'lucide-react'

type Language = 'en' | 'tr'

const translations = {
  en: {
    title: 'Terms of Use',
    subtitle: 'Terms and conditions for using WMB services and applications.',
    acceptance: 'Acceptance of Terms',
    acceptanceText: 'By accessing and using WMB services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.',
    services: 'Services',
    servicesText: 'WMB Yazilim provides web and mobile-based management systems for restaurants and food service businesses. Our services include software applications, web panels, and related support services.',
    userObligations: 'User Obligations',
    userObligationsText: 'Users are responsible for maintaining the confidentiality of their account credentials, using the services in accordance with applicable laws, and not engaging in any activities that may harm the system or other users.',
    intellectualProperty: 'Intellectual Property',
    intellectualPropertyText: 'All content, features, and functionality of WMB services are owned by WMB Yazilim and are protected by copyright, trademark, and other intellectual property laws.',
    limitations: 'Limitations of Liability',
    limitationsText: 'WMB Yazilim shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services.',
    modifications: 'Modifications to Terms',
    modificationsText: 'WMB Yazilim reserves the right to modify these Terms of Use at any time. Users will be notified of significant changes, and continued use of services constitutes acceptance of modified terms.',
    termination: 'Termination',
    terminationText: 'WMB Yazilim reserves the right to suspend or terminate user accounts that violate these terms or engage in fraudulent or illegal activities.',
    contact: 'Contact',
    contactText: 'For questions regarding these Terms of Use, please contact us at',
    lastUpdated: 'Last updated:'
  },
  tr: {
    title: 'Kullanim Sartlari',
    subtitle: 'WMB hizmetleri ve uygulamalari kullanim kosullari.',
    acceptance: 'Kosullarin Kabulu',
    acceptanceText: 'WMB hizmetlerine eriserek ve kullanarak, bu Kullanim Sartlarini kabul eder ve bunlara bagli kalmayi kabul edersiniz. Bu kosullari kabul etmiyorsaniz, lutfen hizmetlerimizi kullanmayin.',
    services: 'Hizmetler',
    servicesText: 'WMB Yazilim, restoran ve gida hizmetleri isletmeleri icin web ve mobil tabanli yonetim sistemleri saglar. Hizmetlerimiz yazilim uygulamalari, web panelleri ve ilgili destek hizmetlerini icerir.',
    userObligations: 'Kullanici Yukumlulukleri',
    userObligationsText: 'Kullanicilar, hesap kimlik bilgilerinin gizliligini korumaktan, hizmetleri gecerli yasalara uygun olarak kullanmaktan ve sisteme veya diger kullanicilara zarar verebilecek herhangi bir faaliyette bulunmamaktan sorumludur.',
    intellectualProperty: 'Fikri Mulkiyet',
    intellectualPropertyText: 'WMB hizmetlerinin tum icerigi, ozellikleri ve islevselligi WMB Yazilim\'a aittir ve telif hakkı, marka ve diger fikri mulkiyet yasalari ile korunmaktadir.',
    limitations: 'Sorumluluk Sinirlamalari',
    limitationsText: 'WMB Yazilim, hizmetlerimizin kullanimindan veya kullanilamamasindan kaynaklanan dolayli, arizi, ozel veya sonuc zararlardan sorumlu olmayacaktir.',
    modifications: 'Kosullarda Degisiklikler',
    modificationsText: 'WMB Yazilim, bu Kullanim Sartlarini istedigi zaman degistirme hakkini sakli tutar. Kullanicilar onemli degisikliklerden haberdar edilecek ve hizmetlerin kullanilmaya devam edilmesi degistirilmis kosullarin kabul edildigini gosterir.',
    termination: 'Fesih',
    terminationText: 'WMB Yazilim, bu kosullari ihlal eden veya dolandiricilik veya yasadisi faaliyetlerde bulunan kullanici hesaplarini askiya alma veya sonlandirma hakkini sakli tutar.',
    contact: 'Iletisim',
    contactText: 'Bu Kullanim Sartlari hakkinda sorulariniz icin lutfen bizimle iletisime gecin',
    lastUpdated: 'Son guncelleme:'
  }
}

function TermsPage() {
  const [language, setLanguage] = useState<Language>('en')
  const t = translations[language]

  useEffect(() => {
    document.title = 'Terms of Use | WMB'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms of Use for WMB Yazilim services and applications.')
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
                <Scale className="w-6 h-6 text-blue-400" />
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
            
            <p className="text-slate-400 mb-6">{t.subtitle}</p>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  {t.acceptance}
                </h2>
                <p className="text-slate-400">{t.acceptanceText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.services}</h2>
                <p className="text-slate-400">{t.servicesText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.userObligations}</h2>
                <p className="text-slate-400">{t.userObligationsText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.intellectualProperty}</h2>
                <p className="text-slate-400">{t.intellectualPropertyText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.limitations}</h2>
                <p className="text-slate-400">{t.limitationsText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.modifications}</h2>
                <p className="text-slate-400">{t.modificationsText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.termination}</h2>
                <p className="text-slate-400">{t.terminationText}</p>
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

export default TermsPage
