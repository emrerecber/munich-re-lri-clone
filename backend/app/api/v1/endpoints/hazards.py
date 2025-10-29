"""
Hazard assessment endpoints
"""
from fastapi import APIRouter, HTTPException, status
from typing import List, Dict, Any
from pydantic import BaseModel
from app.core.config import settings

router = APIRouter()


class HazardAssessmentRequest(BaseModel):
    """Request for hazard assessment"""
    asset_id: int
    scenario: str = "SSP2-4.5"
    projection_year: int = 2050


class HazardScore(BaseModel):
    """Hazard score for a specific peril"""
    hazard_type: str
    score: float  # 0-100
    risk_class: str  # Low, Medium, High
    intensity_value: float
    intensity_unit: str


class HazardAssessmentResponse(BaseModel):
    """Response for hazard assessment"""
    asset_id: int
    scenario: str
    projection_year: int
    hazards: List[HazardScore]
    overall_risk_score: float


@router.post("/assess", response_model=HazardAssessmentResponse)
async def assess_hazards(request: HazardAssessmentRequest):
    """
    Assess climate hazards for an asset
    
    This is a placeholder implementation for MVP.
    In production, this would:
    1. Geocode the asset location
    2. Query hazard raster datasets
    3. Extract hazard intensity values
    4. Calculate risk scores
    """
    
    # Validate scenario
    if request.scenario not in settings.HAZARD_SCENARIOS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid scenario. Must be one of {settings.HAZARD_SCENARIOS}"
        )
    
    # Validate projection year
    if request.projection_year not in settings.PROJECTION_YEARS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid projection year. Must be one of {settings.PROJECTION_YEARS}"
        )
    
    # Mock hazard scores (replace with real calculations)
    mock_hazards = [
        HazardScore(
            hazard_type="river_flood",
            score=45.0,
            risk_class="Medium",
            intensity_value=1.2,
            intensity_unit="meters"
        ),
        HazardScore(
            hazard_type="heat_stress",
            score=65.0,
            risk_class="High",
            intensity_value=38.5,
            intensity_unit="degrees_celsius"
        ),
        HazardScore(
            hazard_type="drought",
            score=30.0,
            risk_class="Low",
            intensity_value=0.4,
            intensity_unit="spi_index"
        ),
    ]
    
    overall_score = sum(h.score for h in mock_hazards) / len(mock_hazards)
    
    return HazardAssessmentResponse(
        asset_id=request.asset_id,
        scenario=request.scenario,
        projection_year=request.projection_year,
        hazards=mock_hazards,
        overall_risk_score=overall_score
    )


@router.get("/scenarios", response_model=List[str])
async def list_scenarios():
    """List available climate scenarios"""
    return settings.HAZARD_SCENARIOS


@router.get("/types", response_model=List[str])
async def list_hazard_types():
    """List available hazard types"""
    return settings.HAZARD_TYPES


@router.get("/years", response_model=List[int])
async def list_projection_years():
    """List available projection years"""
    return settings.PROJECTION_YEARS
