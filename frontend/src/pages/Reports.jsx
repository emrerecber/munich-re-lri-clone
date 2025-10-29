import { useTranslation } from 'react-i18next'

export default function Reports() {
  const { t } = useTranslation()

  const reportTypes = [
    { name: 'Portfolio Summary', description: 'Overview of all assets and risk metrics' },
    { name: 'Asset Detail Report', description: 'Detailed analysis for individual assets' },
    { name: 'TCFD Report', description: 'Task Force on Climate-related Financial Disclosures' },
    { name: 'ISSB Report', description: 'IFRS S2 Climate-related Disclosures' },
    { name: 'CSRD Report', description: 'EU Corporate Sustainability Reporting Directive' },
    { name: 'ESG Compliance', description: 'Environmental, Social, and Governance metrics' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{t('nav.reports')}</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Generate Report</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              {reportTypes.map((type) => (
                <option key={type.name}>{type.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>PDF</option>
              <option>Excel</option>
              <option>Both</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Scenario</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>SSP1-2.6</option>
              <option>SSP2-4.5</option>
              <option>SSP3-7.0</option>
              <option>SSP5-8.5</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option value="en">English</option>
              <option value="tr">Türkçe</option>
            </select>
          </div>
        </div>
        
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium">
          Generate Report
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Available Report Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reportTypes.map((type, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-1">{type.name}</h3>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
