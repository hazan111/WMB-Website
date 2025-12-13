import { memo, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const FAQSection = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Kurulum süreci ne kadar sürer?',
      answer: 'Temel kurulum 2-3 iş günü içinde tamamlanır. Web paneli ve mobil uygulama erişimi hemen aktif edilir. Personel eğitimi ve veri aktarımı gibi ek hizmetler için ek süre gerekebilir. Detaylı bilgi için demo talep edebilirsiniz.'
    },
    {
      question: '14 gün ücretsiz deneme nasıl çalışır?',
      answer: 'Tüm planlar 14 gün ücretsiz deneme içerir. Kredi kartı bilgisi gerekmez. Deneme süresi boyunca sistemin temel özelliklerine erişim sağlanır. Süre sonunda otomatik olarak ücretli plana geçiş yapılmaz, manuel olarak plan seçmeniz gerekir.'
    },
    {
      question: 'İptal ve iade politikası nedir?',
      answer: 'İstediğiniz zaman iptal edebilirsiniz. İptal işlemi anında gerçekleşir ve bir sonraki fatura döneminden itibaren ücretlendirme durur. Kullanılan fatura dönemi için iade yapılmaz. İptal sonrası verileriniz 30 gün boyunca saklanır, ardından kalıcı olarak silinir.'
    },
    {
      question: 'Veri güvenliği nasıl sağlanıyor?',
      answer: 'Tüm veriler 256-bit SSL şifreleme ile korunur. KVKK uyumlu veri saklama ve işleme politikaları uygulanır. Düzenli yedekleme sistemi ile veri kaybı riski minimize edilir. Veriler Türkiye\'de bulunan sunucularda saklanır.'
    },
    {
      question: 'Birden fazla şube için nasıl çalışır?',
      answer: 'Çoklu şube desteği tüm planlarda mevcuttur. Her şube için bağımsız menü, ürün ve kullanıcı yönetimi yapabilirsiniz. Merkezi raporlama ile tüm şubelerinizi tek yerden kontrol edebilirsiniz. Şube sayısına göre plan seçimi yapabilirsiniz.'
    },
    {
      question: 'Destek kanalları nelerdir?',
      answer: 'E-posta, telefon ve WhatsApp üzerinden teknik destek sağlanır. Web paneli üzerinden canlı destek sistemi de mevcuttur. Tüm planlar aynı destek kanallarına erişim içerir. Ayrıca detaylı dokümantasyon ve video eğitim içerikleri bulunmaktadır.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-slate-900/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-slate-400 text-lg">
            Aklınıza takılan soruların yanıtları.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const questionId = `faq-question-${index}`
            const answerId = `faq-answer-${index}`
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
})

FAQSection.displayName = 'FAQSection'

export default FAQSection
