# Location Risk Intelligence (LRI) Platform
## Climate Risk & Financial Impact SaaS

[English](#english) | [Türkçe](#turkish)

---

<a name="english"></a>
## 🌍 English

### Project Overview
A comprehensive SaaS platform for climate risk assessment and financial impact analysis, inspired by Munich Re's Location Risk Intelligence system.

### Features
- **Climate Change Edition**: Physical climate hazard analytics (SSP scenarios, IPCC AR6)
- **Reporting Edition**: ESG/TCFD/ISSB/CSRD compliance reporting
- **Financial Impact Edition**: Climate Expected Loss (CEL) calculation and forecasting

### Tech Stack
**Backend:**
- FastAPI (Python 3.11)
- PostgreSQL + PostGIS
- Celery + Redis
- GDAL, Rasterio, GeoPandas

**Frontend:**
- React 18
- TailwindCSS
- MapLibre GL
- Recharts

**Infrastructure:**
- Docker + Docker Compose
- MinIO (S3-compatible storage)

### Quick Start
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/munich-re-lri-clone.git
cd munich-re-lri-clone

# Start with Docker
docker-compose up -d

# Access application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Project Structure
```
.
├── backend/          # FastAPI application
├── frontend/         # React application
├── data/            # Climate hazard datasets
├── docker/          # Docker configurations
└── docs/            # Documentation
```

---

<a name="turkish"></a>
## 🌍 Türkçe

### Proje Hakkında
Munich Re'nin Location Risk Intelligence sisteminden esinlenerek geliştirilmiş, kapsamlı bir iklim risk değerlendirme ve finansal etki analiz platformu.

### Özellikler
- **İklim Değişikliği Modülü**: Fiziksel iklim tehlike analitiği (SSP senaryoları, IPCC AR6)
- **Raporlama Modülü**: ESG/TCFD/ISSB/CSRD uyumluluk raporlaması
- **Finansal Etki Modülü**: İklim Beklenen Zarar (CEL) hesaplama ve tahmin

### Teknoloji Yığını
**Backend:**
- FastAPI (Python 3.11)
- PostgreSQL + PostGIS
- Celery + Redis
- GDAL, Rasterio, GeoPandas

**Frontend:**
- React 18
- TailwindCSS
- MapLibre GL
- Recharts

**Altyapı:**
- Docker + Docker Compose
- MinIO (S3 uyumlu depolama)

### Hızlı Başlangıç
```bash
# Repository'yi klonlayın
git clone https://github.com/YOUR_USERNAME/munich-re-lri-clone.git
cd munich-re-lri-clone

# Docker ile başlatın
docker-compose up -d

# Uygulamaya erişim
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Dokümanları: http://localhost:8000/docs
```

### Proje Yapısı
```
.
├── backend/          # FastAPI uygulaması
├── frontend/         # React uygulaması
├── data/            # İklim tehlike veri setleri
├── docker/          # Docker konfigürasyonları
└── docs/            # Dokümantasyon
```

---

## License
MIT

## Contributing
Pull requests are welcome. For major changes, please open an issue first.
