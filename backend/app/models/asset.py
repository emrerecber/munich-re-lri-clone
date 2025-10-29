"""
Asset database models
"""
from sqlalchemy import Column, Integer, String, Float, Boolean, Enum
from geoalchemy2 import Geometry
from app.db.base import BaseModel
import enum


class BuildingType(str, enum.Enum):
    """Building type enumeration"""
    RESIDENTIAL = "residential"
    COMMERCIAL = "commercial"
    INDUSTRIAL = "industrial"
    MIXED_USE = "mixed_use"


class ConstructionMaterial(str, enum.Enum):
    """Construction material enumeration"""
    CONCRETE = "concrete"
    STEEL = "steel"
    WOOD = "wood"
    MASONRY = "masonry"
    MIXED = "mixed"


class UsageType(str, enum.Enum):
    """Usage type enumeration"""
    FACTORY = "factory"
    OFFICE = "office"
    WAREHOUSE = "warehouse"
    HOME = "home"
    RETAIL = "retail"
    SCHOOL = "school"
    HOSPITAL = "hospital"


class Asset(BaseModel):
    """Asset model for buildings and infrastructure"""
    __tablename__ = "assets"
    
    # Basic info
    asset_name = Column(String, nullable=False, index=True)
    address = Column(String, nullable=True)
    
    # Geographic data
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    geometry = Column(Geometry("POINT", srid=4326), nullable=False)
    
    # Location
    country = Column(String, nullable=False)
    region = Column(String, nullable=True)
    
    # Building characteristics
    building_type = Column(Enum(BuildingType), nullable=False)
    construction_material = Column(Enum(ConstructionMaterial), nullable=False)
    year_built = Column(Integer, nullable=True)
    floors = Column(Integer, nullable=True)
    
    # Financial data
    asset_value_usd = Column(Float, nullable=False)
    insured_value_usd = Column(Float, nullable=True)
    
    # Usage
    usage_type = Column(Enum(UsageType), nullable=False)
    critical_infrastructure = Column(Boolean, default=False)
    
    # User reference
    user_id = Column(Integer, nullable=True, index=True)
    portfolio_id = Column(Integer, nullable=True, index=True)
    
    def __repr__(self):
        return f"<Asset {self.asset_name} at ({self.latitude}, {self.longitude})>"
