import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { Shield, Globe, FileText } from 'lucide-react'

type Language = 'en' | 'tr'

const translations = {
  en: {
    title: 'KVKK Disclosure Text',
    subtitle: 'Personal Data Protection Law (KVKK) disclosure text for WMB services.',
    introduction: 'Introduction',
    introductionText: 'This disclosure text has been prepared in accordance with the Personal Data Protection Law No. 6698 (KVKK) to inform you about the processing of your personal data by WMB Yazilim.',
    dataController: 'Data Controller',
    dataControllerText: 'WMB Yazilim acts as the data controller for the personal data processed within the scope of our services.',
    processedData: 'Processed Personal Data',
    processedDataText: 'We process various types of personal data including but not limited to: name, email address, phone number, company information, and usage data.',
    purpose: 'Purpose of Processing',
    purposeText: 'Your personal data is processed for the purposes of providing our services, improving user experience, ensuring security, and fulfilling legal obligations.',
    legalBasis: 'Legal Basis',
    legalBasisText: 'Personal data processing is carried out based on legal grounds specified in the KVKK, including explicit consent, contract performance, and legal obligations.',
    dataRetention: 'Data Retention Period',
    dataRetentionText: 'Personal data is retained for the period necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations.',
    rights: 'Your Rights',
    rightsText: 'Under KVKK, you have the right to learn whether your personal data is processed, request information, object to processing, request deletion, and file complaints with the relevant authority.',
    contact: 'Contact',
    contactText: 'For questions or requests regarding your personal data, please contact us at',
    lastUpdated: 'Last updated:'
  },
  tr: {
    title: 'KVKK Aydinlatma Metni',
    subtitle: 'WMB hizmetleri icin Kisisel Verilerin Korunmasi Kanunu (KVKK) aydinlatma metni.',
    introduction: 'Giris',
    introductionText: 'Bu aydinlatma metni, WMB Yazilim tarafindan kisisel verilerinizin islenmesi hakkinda sizi bilgilendirmek amaciyla 6698 sayili Kisisel Verilerin Korunmasi Kanunu (KVKK) uyarinca hazirlanmistir.',
    dataController: 'Veri Sorumlusu',
    dataControllerText: 'WMB Yazilim, hizmetlerimiz kapsaminda islenen kisisel veriler icin veri sorumlusu olarak hareket etmektedir.',
    processedData: 'Islenen Kisisel Veriler',
    processedDataText: 'Ad, e-posta adresi, telefon numarasi, sirket bilgileri ve kullanim verileri dahil ancak bunlarla sinirli olmamak uzere cesitli turlerde kisisel veri isliyoruz.',
    purpose: 'Isleme Amaci',
    purposeText: 'Kisisel verileriniz, hizmetlerimizi saglama, kullanici deneyimini iyilestirme, guvenligi saglama ve yasal yukumlulukleri yerine getirme amaclariyla islenmektedir.',
    legalBasis: 'Hukuki Dayanak',
    legalBasisText: 'Kisisel veri isleme, acik riza, sozlesme ifasi ve yasal yukumlulukler dahil olmak uzere KVKK\'da belirtilen hukuki gerekcelere dayanilarak gerceklestirilmektedir.',
    dataRetention: 'Veri Saklama Suresi',
    dataRetentionText: 'Kisisel veriler, toplandigi amaclari yerine getirmek icin gerekli sure boyunca veya gecerli yasa ve yonetmelikler tarafindan gerekli oldugu sure boyunca saklanir.',
    rights: 'Haklariniz',
    rightsText: 'KVKK kapsaminda, kisisel verilerinizin islenip islenmedigini ogrenme, bilgi talep etme, islemeye itiraz etme, silinmesini talep etme ve ilgili yetkili makama sikayette bulunma hakkiniz bulunmaktadir.',
    contact: 'Iletisim',
    contactText: 'Kisisel verilerinizle ilgili sorular veya talepler icin lutfen bizimle iletisime gecin',
    lastUpdated: 'Son guncelleme:'
  }
}

function KVKKPage() {
  const [language, setLanguage] = useState<Language>('en')
  const t = translations[language]

  useEffect(() => {
    document.title = 'KVKK Disclosure Text | WMB'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'KVKK disclosure text for WMB Yazilim services.')
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
            
            <p className="text-slate-400 mb-6">{t.subtitle}</p>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  {t.introduction}
                </h2>
                <p className="text-slate-400">{t.introductionText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.dataController}</h2>
                <p className="text-slate-400">{t.dataControllerText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.processedData}</h2>
                <p className="text-slate-400">{t.processedDataText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.purpose}</h2>
                <p className="text-slate-400">{t.purposeText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.legalBasis}</h2>
                <p className="text-slate-400">{t.legalBasisText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.dataRetention}</h2>
                <p className="text-slate-400">{t.dataRetentionText}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">{t.rights}</h2>
                <p className="text-slate-400">{t.rightsText}</p>
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

export default KVKKPage
