import { useTranslation } from 'react-i18next'

export default function Hazards() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{t('nav.hazards')}</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Climate Hazard Assessment</h2>
        <p className="text-gray-600 mb-6">
          Assess physical climate risks for your assets under different IPCC scenarios (SSP1-2.6, SSP2-4.5, SSP3-7.0, SSP5-8.5)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Scenario</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>SSP1-2.6 (Low emissions)</option>
              <option>SSP2-4.5 (Moderate emissions)</option>
              <option>SSP3-7.0 (High emissions)</option>
              <option>SSP5-8.5 (Very high emissions)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Projection Year</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>2030</option>
              <option>2050</option>
              <option>2100</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {['River Flood', 'Storm Surge', 'Heat Stress', 'Drought', 'Wildfire', 'Tropical Cyclone', 'Sea Level Rise', 'Extratropical Storm'].map((hazard) => (
            <div key={hazard} className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="font-medium text-gray-800">{hazard}</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">--</p>
              <p className="text-xs text-gray-500 mt-1">Score</p>
            </div>
          ))}
        </div>
        
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium">
          {t('buttons.calculate')}
        </button>
      </div>
    </div>
  )
}
