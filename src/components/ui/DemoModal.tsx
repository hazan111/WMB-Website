import { useState } from 'react'
import type { FormEvent } from 'react'
import { X } from 'lucide-react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    branches: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'İşletme adı gereklidir'
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'İletişim adı gereklidir'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası gereklidir'
    } else if (!/^[0-9+\s()-]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Geçerli bir telefon numarası giriniz'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta adresi gereklidir'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      // Log payload (in production, this would be sent to backend)
      console.log('Demo Request Submitted:', formData)
      
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          businessName: '',
          contactName: '',
          phone: '',
          email: '',
          branches: '',
          message: ''
        })
        setIsSuccess(false)
        onClose()
      }, 2000)
    }, 500)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="relative w-full max-w-md bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl my-4 max-h-[calc(100vh-5rem)] overflow-y-auto mt-20">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 id="demo-modal-title" className="text-xl font-semibold text-white">
            Demo Talep Formu
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Modalı kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-1.5">
                İşletme Adı <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.businessName ? 'border-red-500' : 'border-slate-700'
                }`}
                placeholder="İşletmenizin adı"
                aria-invalid={!!errors.businessName}
                aria-describedby={errors.businessName ? 'businessName-error' : undefined}
              />
              {errors.businessName && (
                <p id="businessName-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.businessName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-slate-300 mb-1.5">
                İletişim Adı Soyadı <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.contactName ? 'border-red-500' : 'border-slate-700'
                }`}
                placeholder="Adınız ve soyadınız"
                aria-invalid={!!errors.contactName}
                aria-describedby={errors.contactName ? 'contactName-error' : undefined}
              />
              {errors.contactName && (
                <p id="contactName-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.contactName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
                Telefon <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-500' : 'border-slate-700'
                }`}
                placeholder="05XX XXX XX XX"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                E-posta <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-slate-700'
                }`}
                placeholder="ornek@email.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="branches" className="block text-sm font-medium text-slate-300 mb-1.5">
                Şube Sayısı (Opsiyonel)
              </label>
              <select
                id="branches"
                name="branches"
                value={formData.branches}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Seçiniz</option>
                <option value="1">1 Şube</option>
                <option value="2-5">2-5 Şube</option>
                <option value="6-10">6-10 Şube</option>
                <option value="11-20">11-20 Şube</option>
                <option value="20+">20+ Şube</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                Mesaj (Opsiyonel)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Ek bilgi veya özel istekleriniz..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] shadow-lg shadow-blue-500/30"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Demo Talep Et'}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Talebiniz Alındı</h3>
            <p className="text-slate-400 text-sm">
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DemoModal
