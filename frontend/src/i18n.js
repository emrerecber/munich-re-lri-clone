import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Location Risk Intelligence Platform",
      "subtitle": "Climate Risk & Financial Impact Analysis",
      "nav": {
        "dashboard": "Dashboard",
        "assets": "Assets",
        "hazards": "Hazards",
        "financials": "Financials",
        "reports": "Reports"
      },
      "dashboard": {
        "totalAssets": "Total Assets",
        "highRiskAssets": "High Risk Assets",
        "avgRiskScore": "Average Risk Score",
        "totalExposure": "Total Exposure"
      },
      "buttons": {
        "addAsset": "Add Asset",
        "viewReport": "View Report",
        "calculate": "Calculate",
        "export": "Export"
      }
    }
  },
  tr: {
    translation: {
      "welcome": "Konum Risk İstihbaratı Platformuna Hoş Geldiniz",
      "subtitle": "İklim Riski ve Finansal Etki Analizi",
      "nav": {
        "dashboard": "Gösterge Paneli",
        "assets": "Varlıklar",
        "hazards": "Tehlikeler",
        "financials": "Finansal",
        "reports": "Raporlar"
      },
      "dashboard": {
        "totalAssets": "Toplam Varlık",
        "highRiskAssets": "Yüksek Riskli Varlıklar",
        "avgRiskScore": "Ortalama Risk Skoru",
        "totalExposure": "Toplam Maruziyet"
      },
      "buttons": {
        "addAsset": "Varlık Ekle",
        "viewReport": "Raporu Görüntüle",
        "calculate": "Hesapla",
        "export": "Dışa Aktar"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
