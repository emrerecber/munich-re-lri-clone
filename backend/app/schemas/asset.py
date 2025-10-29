"""
Asset Pydantic schemas
"""
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from app.models.asset import BuildingType, ConstructionMaterial, UsageType


class AssetBase(BaseModel):
    """Base asset schema"""
    asset_name: str = Field(..., description="Asset name")
    address: Optional[str] = Field(None, description="Full address")
    latitude: float = Field(..., ge=-90, le=90, description="Latitude")
    longitude: float = Field(..., ge=-180, le=180, description="Longitude")
    country: str = Field(..., description="Country code")
    region: Optional[str] = Field(None, description="Region name")
    building_type: BuildingType
    construction_material: ConstructionMaterial
    year_built: Optional[int] = Field(None, ge=1800, le=2030)
    floors: Optional[int] = Field(None, ge=1, le=200)
    asset_value_usd: float = Field(..., gt=0, description="Asset value in USD")
    insured_value_usd: Optional[float] = Field(None, gt=0, description="Insured value in USD")
    usage_type: UsageType
    critical_infrastructure: bool = False


class AssetCreate(AssetBase):
    """Schema for creating an asset"""
    pass


class AssetUpdate(BaseModel):
    """Schema for updating an asset"""
    asset_name: Optional[str] = None
    address: Optional[str] = None
    asset_value_usd: Optional[float] = None
    insured_value_usd: Optional[float] = None


class AssetResponse(AssetBase):
    """Schema for asset response"""
    id: int
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True
