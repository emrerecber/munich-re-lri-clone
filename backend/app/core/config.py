"""
Application configuration
"""
from typing import List, Optional
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings"""
    
    # Project info
    PROJECT_NAME: str = "Location Risk Intelligence Platform"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    
    # CORS
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:8000",
        "http://127.0.0.1:3000",
    ]
    
    # Database
    DATABASE_URL: str = "postgresql://lri_user:lri_pass_123@localhost:5432/lri_db"
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"
    
    # MinIO/S3
    MINIO_ENDPOINT: str = "localhost:9000"
    MINIO_ACCESS_KEY: str = "lri_admin"
    MINIO_SECRET_KEY: str = "lri_admin_pass_123"
    MINIO_SECURE: bool = False
    MINIO_BUCKET: str = "lri-data"
    
    # JWT
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    
    # Climate data
    DATA_DIR: str = "/app/data"
    HAZARD_SCENARIOS: List[str] = ["SSP1-2.6", "SSP2-4.5", "SSP3-7.0", "SSP5-8.5"]
    PROJECTION_YEARS: List[int] = [2030, 2050, 2100]
    
    # Hazard types
    HAZARD_TYPES: List[str] = [
        "river_flood",
        "storm_surge",
        "tropical_cyclone",
        "extratropical_storm",
        "heat_stress",
        "drought",
        "wildfire",
        "sea_level_rise"
    ]
    
    # Localization
    SUPPORTED_LANGUAGES: List[str] = ["en", "tr"]
    DEFAULT_LANGUAGE: str = "en"
    
    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True
    )


settings = Settings()
