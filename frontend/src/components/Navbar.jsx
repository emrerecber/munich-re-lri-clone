import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar({ toggleLanguage, currentLang }) {
  const { t } = useTranslation()

  return (
    <nav className="bg-primary-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold">
              LRI Platform
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="hover:bg-primary-600 px-3 py-2 rounded">
                {t('nav.dashboard')}
              </Link>
              <Link to="/assets" className="hover:bg-primary-600 px-3 py-2 rounded">
                {t('nav.assets')}
              </Link>
              <Link to="/hazards" className="hover:bg-primary-600 px-3 py-2 rounded">
                {t('nav.hazards')}
              </Link>
              <Link to="/financials" className="hover:bg-primary-600 px-3 py-2 rounded">
                {t('nav.financials')}
              </Link>
              <Link to="/reports" className="hover:bg-primary-600 px-3 py-2 rounded">
                {t('nav.reports')}
              </Link>
            </div>
          </div>
          <button
            onClick={toggleLanguage}
            className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded font-medium"
          >
            {currentLang === 'en' ? '🇹🇷 TR' : '🇬🇧 EN'}
          </button>
        </div>
      </div>
    </nav>
  )
}
