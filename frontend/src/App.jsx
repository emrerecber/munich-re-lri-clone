import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Assets from './pages/Assets'
import Hazards from './pages/Hazards'
import Financials from './pages/Financials'
import Reports from './pages/Reports'

function App() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar toggleLanguage={toggleLanguage} currentLang={i18n.language} />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/hazards" element={<Hazards />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
