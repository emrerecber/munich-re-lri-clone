import { useTranslation } from 'react-i18next'

export default function Assets() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{t('nav.assets')}</h1>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium">
          {t('buttons.addAsset')}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Asset Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value (USD)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Risk Score
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                No assets yet. Click "{t('buttons.addAsset')}" to create your first asset.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
