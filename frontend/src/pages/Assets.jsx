import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getAssets, createAsset, deleteAsset } from '../services/api'

export default function Assets() {
  const { t } = useTranslation()
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    asset_name: '',
    address: '',
    latitude: '',
    longitude: '',
    country: '',
    region: '',
    building_type: 'residential',
    construction_material: 'concrete',
    year_built: 2020,
    floors: 1,
    asset_value_usd: '',
    insured_value_usd: '',
    usage_type: 'home',
    critical_infrastructure: false,
  })

  useEffect(() => {
    loadAssets()
  }, [])

  const loadAssets = async () => {
    try {
      setLoading(true)
      const data = await getAssets()
      setAssets(data)
    } catch (error) {
      console.error('Failed to load assets:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createAsset({
        ...formData,
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
        asset_value_usd: parseFloat(formData.asset_value_usd),
        insured_value_usd: formData.insured_value_usd ? parseFloat(formData.insured_value_usd) : null,
      })
      setShowForm(false)
      setFormData({
        asset_name: '',
        address: '',
        latitude: '',
        longitude: '',
        country: '',
        region: '',
        building_type: 'residential',
        construction_material: 'concrete',
        year_built: 2020,
        floors: 1,
        asset_value_usd: '',
        insured_value_usd: '',
        usage_type: 'home',
        critical_infrastructure: false,
      })
      loadAssets()
      alert('Asset created successfully!')
    } catch (error) {
      console.error('Failed to create asset:', error)
      alert('Failed to create asset. Please check the form and try again.')
    }
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this asset?')) {
      try {
        await deleteAsset(id)
        loadAssets()
      } catch (error) {
        console.error('Failed to delete asset:', error)
      }
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{t('nav.assets')}</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium"
        >
          {showForm ? 'Cancel' : t('buttons.addAsset')}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Add New Asset</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Asset Name *</label>
              <input
                type="text"
                required
                value={formData.asset_name}
                onChange={(e) => setFormData({ ...formData, asset_name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Latitude *</label>
              <input
                type="number"
                step="any"
                required
                value={formData.latitude}
                onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                placeholder="41.0082"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Longitude *</label>
              <input
                type="number"
                step="any"
                required
                value={formData.longitude}
                onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                placeholder="28.9784"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                placeholder="Turkey"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
              <input
                type="text"
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Building Type *</label>
              <select
                value={formData.building_type}
                onChange={(e) => setFormData({ ...formData, building_type: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="mixed_use">Mixed Use</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Construction Material *</label>
              <select
                value={formData.construction_material}
                onChange={(e) => setFormData({ ...formData, construction_material: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="concrete">Concrete</option>
                <option value="steel">Steel</option>
                <option value="wood">Wood</option>
                <option value="masonry">Masonry</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year Built</label>
              <input
                type="number"
                value={formData.year_built}
                onChange={(e) => setFormData({ ...formData, year_built: parseInt(e.target.value) })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Floors</label>
              <input
                type="number"
                value={formData.floors}
                onChange={(e) => setFormData({ ...formData, floors: parseInt(e.target.value) })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Asset Value (USD) *</label>
              <input
                type="number"
                required
                value={formData.asset_value_usd}
                onChange={(e) => setFormData({ ...formData, asset_value_usd: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                placeholder="5000000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Insured Value (USD)</label>
              <input
                type="number"
                value={formData.insured_value_usd}
                onChange={(e) => setFormData({ ...formData, insured_value_usd: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usage Type *</label>
              <select
                value={formData.usage_type}
                onChange={(e) => setFormData({ ...formData, usage_type: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="home">Home</option>
                <option value="office">Office</option>
                <option value="factory">Factory</option>
                <option value="warehouse">Warehouse</option>
                <option value="retail">Retail</option>
                <option value="school">School</option>
                <option value="hospital">Hospital</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.critical_infrastructure}
                  onChange={(e) => setFormData({ ...formData, critical_infrastructure: e.target.checked })}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">Critical Infrastructure</span>
              </label>
            </div>
            
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium"
              >
                Create Asset
              </button>
            </div>
          </form>
        </div>
      )}

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
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                  Loading assets...
                </td>
              </tr>
            ) : assets.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                  No assets yet. Click "{t('buttons.addAsset')}" to create your first asset.
                </td>
              </tr>
            ) : (
              assets.map((asset) => (
                <tr key={asset.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{asset.asset_name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{asset.country}</div>
                    <div className="text-sm text-gray-500">{asset.latitude.toFixed(4)}, {asset.longitude.toFixed(4)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {asset.building_type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${asset.asset_value_usd.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleDelete(asset.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
