import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { Building2, Globe, Target, Users } from 'lucide-react'

type Language = 'en' | 'tr'

const translations = {
  en: {
    title: 'About Us',
    subtitle: 'Learn more about WMB Yazilim and our mission to digitalize restaurant operations.',
    mission: 'Our Mission',
    missionText: 'To provide innovative software solutions that help restaurants and food service businesses streamline their operations, increase efficiency, and improve customer satisfaction.',
    vision: 'Our Vision',
    visionText: 'To become the leading digital transformation partner for restaurants and food service businesses in Turkey and beyond.',
    values: 'Our Values',
    valuesText: 'We are committed to innovation, reliability, and customer satisfaction. Our solutions are designed with the end-user in mind, ensuring ease of use and maximum efficiency.',
    team: 'Our Team',
    teamText: 'WMB Yazilim is a team of experienced developers and business professionals dedicated to creating solutions that make a difference.',
    company: 'Company Information',
    companyText: 'WMB Yazilim develops web and mobile-based management systems for restaurants and food service businesses. Our solutions help digitize operations and improve business performance.'
  },
  tr: {
    title: 'Hakkimizda',
    subtitle: 'WMB Yazilim ve restoran operasyonlarini dijitallestirme misyonumuz hakkinda daha fazla bilgi edinin.',
    mission: 'Misyonumuz',
    missionText: 'Restoran ve gida hizmetleri isletmelerinin operasyonlarini kolaylastirmalarina, verimliligini artirmalarina ve musteri memnuniyetini iyilestirmelerine yardimci olan yenilikci yazilim cozumleri sunmak.',
    vision: 'Vizyonumuz',
    visionText: 'Turkiye ve otesinde restoran ve gida hizmetleri isletmeleri icin lider dijital donusum ortagi olmak.',
    values: 'Degerlerimiz',
    valuesText: 'Yenilik, guvenilirlik ve musteri memnuniyetine bagliyiz. Cozumlerimiz son kullanici goz onunde bulundurularak tasarlanmistir ve kullanim kolayligi ile maksimum verimlilik saglar.',
    team: 'Ekibimiz',
    teamText: 'WMB Yazilim, fark yaratan cozumler yaratmaya adanmis deneyimli gelistiriciler ve is profesyonellerinden olusan bir ekiptir.',
    company: 'Sirket Bilgileri',
    companyText: 'WMB Yazilim, restoran ve gida hizmetleri isletmeleri icin web ve mobil tabanli yonetim sistemleri gelistirir. Cozumlerimiz operasyonlarin dijitallestirilmesine ve is performansinin iyilestirilmesine yardimci olur.'
  }
}

function AboutPage() {
  const [language, setLanguage] = useState<Language>('en')
  const t = translations[language]

  useEffect(() => {
    document.title = 'About Us | WMB'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn more about WMB Yazilim, our mission, vision, and values.')
    }
    window.scrollTo(0, 0)
  }, [language])

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-blue-400" />
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

          {/* Content Cards */}
          <div className="space-y-6">
            {/* Mission */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">{t.mission}</h2>
              </div>
              <p className="text-slate-400">{t.missionText}</p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">{t.vision}</h2>
              </div>
              <p className="text-slate-400">{t.visionText}</p>
            </div>

            {/* Values */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">{t.values}</h2>
              </div>
              <p className="text-slate-400">{t.valuesText}</p>
            </div>

            {/* Team */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">{t.team}</h2>
              </div>
              <p className="text-slate-400">{t.teamText}</p>
            </div>

            {/* Company Info */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">{t.company}</h2>
              </div>
              <p className="text-slate-400">{t.companyText}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
