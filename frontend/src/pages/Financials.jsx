import { useTranslation } from 'react-i18next'

export default function Financials() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{t('nav.financials')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Climate Expected Loss (CEL)</h3>
          <p className="text-3xl font-bold text-gray-800">1.3%</p>
          <p className="text-sm text-gray-500 mt-1">Annual average</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">1-in-100 Year Damage</h3>
          <p className="text-3xl font-bold text-red-600">$875K</p>
          <p className="text-sm text-gray-500 mt-1">Expected loss</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Annual Expected Loss</h3>
          <p className="text-3xl font-bold text-orange-600">$65K</p>
          <p className="text-sm text-gray-500 mt-1">Per year average</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Financial Impact by Hazard</h2>
        <div className="space-y-4">
          {[
            { hazard: 'River Flood', cel: '0.8%', loss: '$40,000', color: 'bg-blue-500' },
            { hazard: 'Heat Stress', cel: '0.3%', loss: '$15,000', color: 'bg-red-500' },
            { hazard: 'Drought', cel: '0.2%', loss: '$10,000', color: 'bg-yellow-500' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`w-4 h-4 ${item.color} rounded`}></div>
                <span className="font-medium text-gray-800">{item.hazard}</span>
              </div>
              <div className="flex space-x-8">
                <div className="text-right">
                  <p className="text-sm text-gray-600">CEL Rate</p>
                  <p className="font-bold text-gray-800">{item.cel}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Annual Loss</p>
                  <p className="font-bold text-gray-800">{item.loss}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Insured vs Uninsured Losses</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          Chart visualization - Insured (70%) vs Uninsured (30%)
        </div>
      </div>
    </div>
  )
}
