import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useInView } from '../../../hooks/useInView'

interface FAQItem {
  question: string
  answer: string
}

const FeatureFAQ = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Kurulum ne kadar sürer?',
      answer: 'Temel kurulum 2-3 iş günü içinde tamamlanır. Web paneli ve mobil uygulama erişimi hemen aktif edilir. Personel eğitimi ve veri aktarımı gibi ek hizmetler için ek süre gerekebilir.'
    },
    {
      question: 'Şube sayısı arttıkça performans düşer mi?',
      answer: 'Hayır, sistem ölçeklenebilir bir yapıda tasarlanmıştır. Şube sayısı arttıkça performans etkilenmez. Merkezi raporlama ve yönetim tüm şubeler için hızlı ve stabil çalışır.'
    },
    {
      question: 'Yetkiler nasıl yönetiliyor?',
      answer: 'Rol bazlı yetkilendirme sistemi kullanılır. Yöneticiler, garsonlar, kasiyerler gibi roller tanımlanır ve her role özel yetkiler atanır. Şube bazlı erişim kontrolü de mevcuttur.'
    },
    {
      question: 'Verilerimi dışa aktarabilir miyim?',
      answer: 'Evet, raporlama modülü üzerinden Excel ve PDF formatlarında veri dışa aktarımı yapabilirsiniz. Ciro, sipariş, stok ve performans raporları dışa aktarılabilir.'
    },
    {
      question: 'Destek kanalları neler?',
      answer: 'E-posta, telefon ve WhatsApp üzerinden teknik destek sağlanır. Web paneli üzerinden canlı destek sistemi de mevcuttur. Ayrıca detaylı dokümantasyon ve video eğitim içerikleri bulunmaktadır.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-24 bg-slate-900/30 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
            Sık Sorulan Sorular
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const questionId = `feature-faq-question-${index}`
            const answerId = `feature-faq-answer-${index}`
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`bg-[#1e293b]/60 border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? 'border-slate-700/50' : 'border-slate-700/50 hover:border-slate-600'
                }`}
              >
                <button
                  id={questionId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left min-h-[60px]"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="text-lg font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={answerId}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  role="region"
                  aria-labelledby={questionId}
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureFAQ
