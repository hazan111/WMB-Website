import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { Mail, Phone, MessageCircle, Clock, HelpCircle, Send, CheckCircle2, Globe } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

type Language = 'en' | 'tr'

const translations = {
  en: {
    title: 'Support & Contact',
    subtitle: "We're here to help. Get in touch with our support team.",
    contactInfo: 'Contact Information',
    appInfo: 'App Information',
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    businessHours: 'Business Hours',
    businessHoursValue: 'Monday-Friday 09:00-18:00',
    appName: 'App Name',
    developer: 'Developer',
    supportUrl: 'Support URL',
    privacyPolicy: 'Privacy Policy',
    faq: 'Frequently Asked Questions',
    reportProblem: 'Report a Problem',
    name: 'Name',
    company: 'Company / Branch (Optional)',
    subject: 'Subject',
    message: 'Message',
    submit: 'Submit',
    submitting: 'Submitting...',
    required: '*',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    companyPlaceholder: 'Your company or branch name',
    subjectPlaceholder: 'Brief description of your issue',
    messagePlaceholder: 'Please provide detailed information about your issue...',
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    subjectRequired: 'Subject is required',
    messageRequired: 'Message is required',
    messageReceived: 'Message Received',
    successMessage: 'Please send an email to',
    successMessageEnd: 'with the same details for faster assistance.',
    faq1q: 'How do I reset my password?',
    faq1a: 'Use the "Forgot Password" link on the login screen. You\'ll receive a password reset email at your registered email address.',
    faq2q: 'I can\'t log in to my account. What should I do?',
    faq2a: 'Verify your credentials and ensure you have an active internet connection. If the problem persists, contact support with your account details.',
    faq3q: 'The app is not connecting to the server. How can I fix this?',
    faq3a: 'Check your internet connection first. If you\'re on WiFi, try switching to mobile data or vice versa. Restart the app if the issue continues.',
    faq4q: 'I\'m having issues with payment processing. What should I do?',
    faq4a: 'Ensure your payment method is properly configured. Check your account balance and payment gateway settings. Contact support if transactions are failing.',
    faq5q: 'How do I access my account from multiple devices?',
    faq5a: 'You can log in from multiple devices using the same credentials. Make sure you\'re using the correct username and password on each device.',
    faq6q: 'I found a bug. How do I report it?',
    faq6a: 'Use the "Report a Problem" form below to submit detailed information about the bug, including steps to reproduce it and your device information.',
    faq7q: 'How do I update my company or branch information?',
    faq7a: 'Contact support with your account details and the information you\'d like to update. Our team will assist you with the changes.'
  },
  tr: {
    title: 'Destek & Iletisim',
    subtitle: 'Yardimci olmak icin buradayiz. Destek ekibimizle iletisime gecin.',
    contactInfo: 'Iletisim Bilgileri',
    appInfo: 'Uygulama Bilgileri',
    email: 'E-posta',
    phone: 'Telefon',
    whatsapp: 'WhatsApp',
    businessHours: 'Calisma Saatleri',
    businessHoursValue: 'Pazartesi-Cuma 09:00-18:00',
    appName: 'Uygulama Adi',
    developer: 'Gelistirici',
    supportUrl: 'Destek URL',
    privacyPolicy: 'Gizlilik Politikasi',
    faq: 'Sikca Sorulan Sorular',
    reportProblem: 'Sorun Bildir',
    name: 'Ad',
    company: 'Sirket / Sube (Opsiyonel)',
    subject: 'Konu',
    message: 'Mesaj',
    submit: 'Gonder',
    submitting: 'Gonderiliyor...',
    required: '*',
    namePlaceholder: 'Adiniz',
    emailPlaceholder: 'ornek@email.com',
    companyPlaceholder: 'Sirket veya sube adi',
    subjectPlaceholder: 'Sorununuzun kisa aciklamasi',
    messagePlaceholder: 'Lutfen sorununuz hakkinda detayli bilgi verin...',
    nameRequired: 'Ad gereklidir',
    emailRequired: 'E-posta gereklidir',
    emailInvalid: 'Lutfen gecerli bir e-posta adresi girin',
    subjectRequired: 'Konu gereklidir',
    messageRequired: 'Mesaj gereklidir',
    messageReceived: 'Mesaj Alindi',
    successMessage: 'Lutfen ayni detaylarla',
    successMessageEnd: 'adresine e-posta gonderin, daha hizli yardim icin.',
    faq1q: 'Sifremi nasil sifirlarim?',
    faq1a: 'Giris ekranindaki "Sifremi Unuttum" baglantisini kullanin. Kayitli e-posta adresinize sifre sifirlama e-postasi gonderilecektir.',
    faq2q: 'Hesabima giris yapamiyorum. Ne yapmaliyim?',
    faq2a: 'Kimlik bilgilerinizi kontrol edin ve aktif bir internet baglantiniz oldugundan emin olun. Sorun devam ederse, hesap bilgilerinizle destek ekibiyle iletisime gecin.',
    faq3q: 'Uygulama sunucuya baglanamiyor. Bunu nasil duzeltebilirim?',
    faq3a: 'Once internet baglantinizi kontrol edin. WiFi kullaniyorsaniz, mobil veriye gecmeyi deneyin veya tam tersi. Sorun devam ederse uygulamayi yeniden baslatin.',
    faq4q: 'Odeme islemlerinde sorun yasiyorum. Ne yapmaliyim?',
    faq4a: 'Odeme yonteminizin duzgun yapilandirildigindan emin olun. Hesap bakiyenizi ve odeme gecidi ayarlarinizi kontrol edin. Islemler basarisiz oluyorsa destek ekibiyle iletisime gecin.',
    faq5q: 'Hesabima birden fazla cihazdan nasil erisebilirim?',
    faq5a: 'Ayni kimlik bilgilerini kullanarak birden fazla cihazdan giris yapabilirsiniz. Her cihazda dogru kullanici adi ve sifreyi kullandiginizdan emin olun.',
    faq6q: 'Bir hata buldum. Nasil bildirebilirim?',
    faq6a: 'Asagidaki "Sorun Bildir" formunu kullanarak hatanin detayli bilgilerini, yeniden uretme adimlari ve cihaz bilgilerinizle birlikte gonderin.',
    faq7q: 'Sirket veya sube bilgilerimi nasil guncellerim?',
    faq7a: 'Hesap bilgilerinizle ve guncellemek istediginiz bilgilerle destek ekibiyle iletisime gecin. Ekibimiz degisikliklerde size yardimci olacaktir.'
  }
}

function SupportPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const t = translations[language]

  // Update page title and meta description
  useEffect(() => {
    document.title = 'WMB Support'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Support and contact information for WMB-MobileApp.')
    }
    window.scrollTo(0, 0)
  }, [language])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    const t = translations[language]

    if (!formData.name.trim()) {
      newErrors.name = t.nameRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.emailInvalid
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t.subjectRequired
    }

    if (!formData.message.trim()) {
      newErrors.message = t.messageRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="bg-slate-900 border-b border-slate-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                {t.title}
              </h1>
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
            <p className="text-slate-400 text-center text-lg">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Success Alert */}
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-green-400 font-semibold mb-1">{t.messageReceived}</h3>
                <p className="text-slate-300 text-sm">
                  {t.successMessage}{' '}
                  <a href="mailto:wmbyazilim@gmail.com" className="text-green-400 hover:underline">
                    wmbyazilim@gmail.com
                  </a>{' '}
                  {t.successMessageEnd}
                </p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                {t.contactInfo}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{t.email}</p>
                    <a 
                      href="mailto:wmbyazilim@gmail.com" 
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      wmbyazilim@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{t.phone}</p>
                    <a 
                      href="tel:+905511730475" 
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      +90 551 173 04 75
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{t.whatsapp}</p>
                    <a 
                      href="https://wa.me/905511730475" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      +90 551 173 04 75
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{t.businessHours}</p>
                    <p className="text-white">{t.businessHoursValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* App Information Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                {t.appInfo}
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm mb-1">{t.appName}</p>
                  <p className="text-white">WMB-MobileApp</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{t.developer}</p>
                  <p className="text-white">WMB Yazilim</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{t.supportUrl}</p>
                  <a 
                    href="https://www.wmbyazilim.com/destek" 
                    className="text-white hover:text-blue-400 transition-colors break-all"
                  >
                    https://www.wmbyazilim.com/destek
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{t.privacyPolicy}</p>
                  <a 
                    href="/gizlilik" 
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    /gizlilik
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold text-white mb-6">{t.faq}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-medium mb-2">{t.faq1q}</h3>
                <p className="text-slate-400 text-sm">{t.faq1a}</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">{t.faq2q}</h3>
                <p className="text-slate-400 text-sm">{t.faq2a}</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">{t.faq3q}</h3>
                <p className="text-slate-400 text-sm">{t.faq3a}</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">{t.faq4q}</h3>
                <p className="text-slate-400 text-sm">{t.faq4a}</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">{t.faq5q}</h3>
                <p className="text-slate-400 text-sm">{t.faq5a}</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">{t.faq6q}</h3>
                <p className="text-slate-400 text-sm">{t.faq6a}</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">{t.faq7q}</h3>
                <p className="text-slate-400 text-sm">{t.faq7a}</p>
              </div>
            </div>
          </div>

          {/* Report a Problem Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5" />
              {t.reportProblem}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    {t.name} <span className="text-red-400">{t.required}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder={t.namePlaceholder}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    {t.email} <span className="text-red-400">{t.required}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder={t.emailPlaceholder}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  {t.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t.companyPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  {t.subject} <span className="text-red-400">{t.required}</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.subject ? 'border-red-500' : 'border-slate-600'
                  }`}
                  placeholder={t.subjectPlaceholder}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  {t.message} <span className="text-red-400">{t.required}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    errors.message ? 'border-red-500' : 'border-slate-600'
                  }`}
                  placeholder={t.messagePlaceholder}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.submit}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SupportPage
