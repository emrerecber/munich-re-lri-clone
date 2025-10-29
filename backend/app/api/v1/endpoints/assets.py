"""
Asset management endpoints
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from geoalchemy2.shape import from_shape
from shapely.geometry import Point

from app.db.session import get_db
from app.models.asset import Asset, BuildingType, ConstructionMaterial, UsageType
from app.schemas.asset import AssetCreate, AssetResponse, AssetUpdate

router = APIRouter()


@router.post("/", response_model=AssetResponse, status_code=status.HTTP_201_CREATED)
async def create_asset(
    asset_data: AssetCreate,
    db: AsyncSession = Depends(get_db)
):
    """Create a new asset"""
    
    # Create geometry from lat/lon
    point = Point(asset_data.longitude, asset_data.latitude)
    geometry = from_shape(point, srid=4326)
    
    # Create asset
    asset = Asset(
        asset_name=asset_data.asset_name,
        address=asset_data.address,
        latitude=asset_data.latitude,
        longitude=asset_data.longitude,
        geometry=geometry,
        country=asset_data.country,
        region=asset_data.region,
        building_type=asset_data.building_type,
        construction_material=asset_data.construction_material,
        year_built=asset_data.year_built,
        floors=asset_data.floors,
        asset_value_usd=asset_data.asset_value_usd,
        insured_value_usd=asset_data.insured_value_usd,
        usage_type=asset_data.usage_type,
        critical_infrastructure=asset_data.critical_infrastructure,
    )
    
    db.add(asset)
    await db.commit()
    await db.refresh(asset)
    
    return asset


@router.get("/", response_model=List[AssetResponse])
async def list_assets(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db)
):
    """List all assets"""
    result = await db.execute(
        select(Asset)
        .offset(skip)
        .limit(limit)
    )
    assets = result.scalars().all()
    return assets


@router.get("/{asset_id}", response_model=AssetResponse)
async def get_asset(
    asset_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Get asset by ID"""
    result = await db.execute(
        select(Asset).where(Asset.id == asset_id)
    )
    asset = result.scalar_one_or_none()
    
    if not asset:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Asset with id {asset_id} not found"
        )
    
    return asset


@router.delete("/{asset_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_asset(
    asset_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Delete an asset"""
    result = await db.execute(
        select(Asset).where(Asset.id == asset_id)
    )
    asset = result.scalar_one_or_none()
    
    if not asset:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Asset with id {asset_id} not found"
        )
    
    await db.delete(asset)
    await db.commit()
    
    return None
