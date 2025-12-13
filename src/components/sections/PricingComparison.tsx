import { memo } from 'react'

const PricingComparison = memo(() => {
  const comparisonData = [
    { feature: 'Şirket sayısı', starter: '1', pro: '3', enterprise: 'Sınırsız' },
    { feature: 'Şube sayısı', starter: '3', pro: '10', enterprise: 'Sınırsız' },
    { feature: 'Kullanıcı sayısı', starter: 'Sınırsız', pro: 'Sınırsız', enterprise: 'Sınırsız' },
    { feature: 'Raporlama seviyesi', starter: 'Temel', pro: 'Gelişmiş', enterprise: 'İhtiyaca özel' },
    { feature: 'Destek seviyesi', starter: 'E-posta', pro: 'Öncelikli', enterprise: '7/24' },
    { feature: 'API erişimi', starter: '-', pro: 'Plan kapsamı', enterprise: 'Plan kapsamı' }
  ]

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2">Plan Karşılaştırması</h3>
        <p className="text-slate-400 text-sm">Detaylı özellik karşılaştırması</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-4 px-4 text-sm font-medium text-slate-400">Özellik</th>
              <th className="text-center py-4 px-4 text-sm font-medium text-white">Başlangıç</th>
              <th className="text-center py-4 px-4 text-sm font-medium text-white">Profesyonel</th>
              <th className="text-center py-4 px-4 text-sm font-medium text-white">Kurumsal</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="py-4 px-4 text-sm text-slate-300">{row.feature}</td>
                <td className="py-4 px-4 text-center text-sm">
                  <span className="text-slate-300">{row.starter}</span>
                </td>
                <td className="py-4 px-4 text-center text-sm">
                  <span className="text-slate-300">{row.pro}</span>
                </td>
                <td className="py-4 px-4 text-center text-sm">
                  <span className="text-slate-300">{row.enterprise}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
})

PricingComparison.displayName = 'PricingComparison'

export default PricingComparison
