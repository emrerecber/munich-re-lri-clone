"""
Financial impact calculation endpoints
"""
from fastapi import APIRouter
from typing import List, Dict
from pydantic import BaseModel

router = APIRouter()


class FinancialImpactRequest(BaseModel):
    """Request for financial impact calculation"""
    asset_id: int
    scenario: str = "SSP2-4.5"
    projection_year: int = 2050


class HazardFinancial(BaseModel):
    """Financial metrics per hazard"""
    hazard_type: str
    cel_rate: float  # Climate Expected Loss rate (%)
    annual_expected_loss_usd: float
    one_in_100_damage_percent: float
    one_in_100_loss_usd: float


class FinancialImpactResponse(BaseModel):
    """Response for financial impact calculation"""
    asset_id: int
    asset_value_usd: float
    scenario: str
    projection_year: int
    total_cel_rate: float
    total_annual_expected_loss_usd: float
    hazard_breakdown: List[HazardFinancial]
    insured_loss_usd: float
    uninsured_loss_usd: float


@router.post("/calculate", response_model=FinancialImpactResponse)
async def calculate_financial_impact(request: FinancialImpactRequest):
    """
    Calculate financial impact of climate hazards
    
    This is a placeholder implementation for MVP.
    In production, this would:
    1. Get hazard intensities from hazard assessment
    2. Apply vulnerability curves
    3. Calculate CEL using damage ratios
    4. Compute 1-in-100 year losses
    """
    
    # Mock asset value
    asset_value = 5_000_000.0
    
    # Mock hazard financial calculations
    hazard_breakdown = [
        HazardFinancial(
            hazard_type="river_flood",
            cel_rate=0.8,  # 0.8% per year
            annual_expected_loss_usd=40_000,
            one_in_100_damage_percent=15.0,
            one_in_100_loss_usd=750_000
        ),
        HazardFinancial(
            hazard_type="heat_stress",
            cel_rate=0.3,
            annual_expected_loss_usd=15_000,
            one_in_100_damage_percent=5.0,
            one_in_100_loss_usd=250_000
        ),
        HazardFinancial(
            hazard_type="drought",
            cel_rate=0.2,
            annual_expected_loss_usd=10_000,
            one_in_100_damage_percent=3.0,
            one_in_100_loss_usd=150_000
        ),
    ]
    
    total_cel = sum(h.cel_rate for h in hazard_breakdown)
    total_annual_loss = sum(h.annual_expected_loss_usd for h in hazard_breakdown)
    
    # Assume 70% insured
    insured = total_annual_loss * 0.7
    uninsured = total_annual_loss * 0.3
    
    return FinancialImpactResponse(
        asset_id=request.asset_id,
        asset_value_usd=asset_value,
        scenario=request.scenario,
        projection_year=request.projection_year,
        total_cel_rate=total_cel,
        total_annual_expected_loss_usd=total_annual_loss,
        hazard_breakdown=hazard_breakdown,
        insured_loss_usd=insured,
        uninsured_loss_usd=uninsured
    )


@router.get("/vulnerability-curves")
async def get_vulnerability_curves():
    """
    Get vulnerability curve information
    
    Placeholder for vulnerability curve metadata
    """
    return {
        "message": "Vulnerability curves endpoint",
        "available_curves": [
            "flood_residential_concrete",
            "flood_commercial_steel",
            "wind_residential_wood",
            "heat_industrial_mixed"
        ]
    }
