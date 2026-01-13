import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { Mail, Phone, MessageCircle, Clock, Globe, Send, CheckCircle2 } from 'lucide-react'

type Language = 'en' | 'tr'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const translations = {
  en: {
    title: 'Contact Us',
    subtitle: 'Get in touch with us. We are here to help.',
    contactInfo: 'Contact Information',
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    businessHours: 'Business Hours',
    businessHoursValue: 'Monday-Friday 09:00-18:00',
    sendMessage: 'Send us a Message',
    name: 'Name',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send',
    submitting: 'Sending...',
    required: '*',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your message...',
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    subjectRequired: 'Subject is required',
    messageRequired: 'Message is required',
    messageSent: 'Message Sent',
    successMessage: 'Thank you for contacting us. Please send an email to',
    successMessageEnd: 'for faster assistance.'
  },
  tr: {
    title: 'Iletisim',
    subtitle: 'Bizimle iletisime gecin. Yardimci olmak icin buradayiz.',
    contactInfo: 'Iletisim Bilgileri',
    email: 'E-posta',
    phone: 'Telefon',
    whatsapp: 'WhatsApp',
    businessHours: 'Calisma Saatleri',
    businessHoursValue: 'Pazartesi-Cuma 09:00-18:00',
    sendMessage: 'Bize Mesaj Gonderin',
    name: 'Ad',
    subject: 'Konu',
    message: 'Mesaj',
    submit: 'Gonder',
    submitting: 'Gonderiliyor...',
    required: '*',
    namePlaceholder: 'Adiniz',
    emailPlaceholder: 'ornek@email.com',
    subjectPlaceholder: 'Konu',
    messagePlaceholder: 'Mesajiniz...',
    nameRequired: 'Ad gereklidir',
    emailRequired: 'E-posta gereklidir',
    emailInvalid: 'Lutfen gecerli bir e-posta adresi girin',
    subjectRequired: 'Konu gereklidir',
    messageRequired: 'Mesaj gereklidir',
    messageSent: 'Mesaj Gonderildi',
    successMessage: 'Bizimle iletisime gectiginiz icin tesekkurler. Daha hizli yardim icin lutfen',
    successMessageEnd: 'adresine e-posta gonderin.'
  }
}

function ContactPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const t = translations[language]

  useEffect(() => {
    document.title = 'Contact Us | WMB'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact WMB Yazilim for sales, support, and inquiries.')
    }
    window.scrollTo(0, 0)
  }, [language])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

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

    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-blue-400" />
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

          {/* Success Alert */}
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-green-400 font-semibold mb-1">{t.messageSent}</h3>
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
            {/* Contact Information */}
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

            {/* Contact Form */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Send className="w-5 h-5" />
                {t.sendMessage}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    rows={5}
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
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
      </div>
    </Layout>
  )
}

export default ContactPage
