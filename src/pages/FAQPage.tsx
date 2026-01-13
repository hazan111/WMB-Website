import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { HelpCircle, Globe, ChevronDown, ChevronUp } from 'lucide-react'

type Language = 'en' | 'tr'

interface FAQItem {
  question: string
  answer: string
}

const translations = {
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about WMB-MobileApp and our services.',
    faqs: [
      {
        question: 'How do I reset my password?',
        answer: 'Use the "Forgot Password" link on the login screen. You\'ll receive a password reset email at your registered email address. Follow the instructions in the email to create a new password.'
      },
      {
        question: 'I can\'t log in to my account. What should I do?',
        answer: 'Verify your credentials and ensure you have an active internet connection. Check if your account is active and not locked. If the problem persists, contact support with your account details.'
      },
      {
        question: 'The app is not connecting to the server. How can I fix this?',
        answer: 'Check your internet connection first. If you\'re on WiFi, try switching to mobile data or vice versa. Restart the app if the issue continues. Also ensure that your device\'s date and time are set correctly.'
      },
      {
        question: 'I\'m having issues with payment processing. What should I do?',
        answer: 'Ensure your payment method is properly configured. Check your account balance and payment gateway settings. Verify that your payment information is up to date. Contact support if transactions are failing.'
      },
      {
        question: 'How do I access my account from multiple devices?',
        answer: 'You can log in from multiple devices using the same credentials. Make sure you\'re using the correct username and password on each device. Note that some features may have device-specific limitations.'
      },
      {
        question: 'I found a bug. How do I report it?',
        answer: 'Use the "Report a Problem" form on the support page to submit detailed information about the bug, including steps to reproduce it, your device information, and app version. This helps us fix the issue faster.'
      },
      {
        question: 'How do I update my company or branch information?',
        answer: 'Contact support with your account details and the information you\'d like to update. Our team will assist you with the changes. Some changes may require verification for security purposes.'
      },
      {
        question: 'What are the system requirements for the mobile app?',
        answer: 'The WMB-MobileApp requires iOS 12.0 or later, or Android 8.0 or later. Ensure you have sufficient storage space and a stable internet connection for optimal performance.'
      },
      {
        question: 'How do I sync data between devices?',
        answer: 'Data is automatically synced to the cloud when you have an active internet connection. Changes made on one device will appear on other devices after synchronization. You can manually trigger a sync from the app settings.'
      },
      {
        question: 'Can I use the app offline?',
        answer: 'Some features are available offline, but full functionality requires an internet connection. Offline data will be synced automatically when you reconnect to the internet.'
      }
    ] as FAQItem[]
  },
  tr: {
    title: 'Sikca Sorulan Sorular',
    subtitle: 'WMB-MobileApp ve hizmetlerimiz hakkinda sik sorulan sorularin cevaplarini bulun.',
    faqs: [
      {
        question: 'Sifremi nasil sifirlarim?',
        answer: 'Giris ekranindaki "Sifremi Unuttum" baglantisini kullanin. Kayitli e-posta adresinize sifre sifirlama e-postasi gonderilecektir. E-postadaki talimatlari takip ederek yeni bir sifre olusturun.'
      },
      {
        question: 'Hesabima giris yapamiyorum. Ne yapmaliyim?',
        answer: 'Kimlik bilgilerinizi kontrol edin ve aktif bir internet baglantiniz oldugundan emin olun. Hesabinizin aktif ve kilitli olmadigini kontrol edin. Sorun devam ederse, hesap bilgilerinizle destek ekibiyle iletisime gecin.'
      },
      {
        question: 'Uygulama sunucuya baglanamiyor. Bunu nasil duzeltebilirim?',
        answer: 'Once internet baglantinizi kontrol edin. WiFi kullaniyorsaniz, mobil veriye gecmeyi deneyin veya tam tersi. Sorun devam ederse uygulamayi yeniden baslatin. Ayrica cihazinizin tarih ve saatinin dogru ayarlandigindan emin olun.'
      },
      {
        question: 'Odeme islemlerinde sorun yasiyorum. Ne yapmaliyim?',
        answer: 'Odeme yonteminizin duzgun yapilandirildigindan emin olun. Hesap bakiyenizi ve odeme gecidi ayarlarinizi kontrol edin. Odeme bilgilerinizin guncel oldugunu dogrulayin. Islemler basarisiz oluyorsa destek ekibiyle iletisime gecin.'
      },
      {
        question: 'Hesabima birden fazla cihazdan nasil erisebilirim?',
        answer: 'Ayni kimlik bilgilerini kullanarak birden fazla cihazdan giris yapabilirsiniz. Her cihazda dogru kullanici adi ve sifreyi kullandiginizdan emin olun. Bazi ozelliklerin cihaza ozel sinirlamalari olabilecegini unutmayin.'
      },
      {
        question: 'Bir hata buldum. Nasil bildirebilirim?',
        answer: 'Destek sayfasindaki "Sorun Bildir" formunu kullanarak hatanin detayli bilgilerini, yeniden uretme adimlari, cihaz bilgileriniz ve uygulama surumu ile birlikte gonderin. Bu, sorunu daha hizli cozmemize yardimci olur.'
      },
      {
        question: 'Sirket veya sube bilgilerimi nasil guncellerim?',
        answer: 'Hesap bilgilerinizle ve guncellemek istediginiz bilgilerle destek ekibiyle iletisime gecin. Ekibimiz degisikliklerde size yardimci olacaktir. Bazi degisiklikler guvenlik amaciyla dogrulama gerektirebilir.'
      },
      {
        question: 'Mobil uygulama icin sistem gereksinimleri nelerdir?',
        answer: 'WMB-MobileApp iOS 12.0 veya daha yukarisi, veya Android 8.0 veya daha yukarisi gerektirir. Optimal performans icin yeterli depolama alani ve kararli bir internet baglantiniz oldugundan emin olun.'
      },
      {
        question: 'Cihazlar arasinda verileri nasil senkronize ederim?',
        answer: 'Aktif bir internet baglantiniz oldugunda veriler otomatik olarak buluta senkronize edilir. Bir cihazda yapilan degisiklikler senkronizasyondan sonra diger cihazlarda gorunecektir. Uygulama ayarlarindan manuel olarak senkronizasyon baslatabilirsiniz.'
      },
      {
        question: 'Uygulamayi cevrimdisi kullanabilir miyim?',
        answer: 'Bazi ozellikler cevrimdisi kullanilabilir, ancak tam islevsellik icin internet baglantisi gereklidir. Cevrimdisi veriler internete yeniden baglandiginizda otomatik olarak senkronize edilecektir.'
      }
    ] as FAQItem[]
  }
}

function FAQPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const t = translations[language]

  useEffect(() => {
    document.title = 'FAQ | WMB'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frequently asked questions about WMB-MobileApp and WMB Yazilim services.')
    }
    window.scrollTo(0, 0)
  }, [language])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-blue-400" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h1>
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
            <p className="text-slate-400 text-lg">{t.subtitle}</p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-700/50 transition-colors"
                >
                  <h3 className="text-white font-medium pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-12 bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <p className="text-slate-400 mb-4">
              {language === 'en' 
                ? 'Still have questions? Contact our support team.'
                : 'Hala sorulariniz mi var? Destek ekibimizle iletisime gecin.'}
            </p>
            <a
              href="/destek"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              {language === 'en' ? 'Contact Support' : 'Destek Iletisim'}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FAQPage
