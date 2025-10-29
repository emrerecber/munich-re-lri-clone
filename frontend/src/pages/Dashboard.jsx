import { useTranslation } from 'react-i18next'

export default function Dashboard() {
  const { t } = useTranslation()

  const stats = [
    { label: t('dashboard.totalAssets'), value: '42', color: 'bg-blue-500' },
    { label: t('dashboard.highRiskAssets'), value: '7', color: 'bg-red-500' },
    { label: t('dashboard.avgRiskScore'), value: '52', color: 'bg-yellow-500' },
    { label: t('dashboard.totalExposure'), value: '$2.1M', color: 'bg-green-500' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{t('welcome')}</h1>
        <p className="text-gray-600 mt-2">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className={`w-12 h-12 ${stat.color} rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
              {stat.value.substring(0, 2)}
            </div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Risk Distribution</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart placeholder - Use Recharts to visualize data
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Geographic Risk Map</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Map placeholder - Use MapLibre GL to show asset locations
          </div>
        </div>
      </div>
    </div>
  )
}
