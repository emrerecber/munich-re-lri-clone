"""
API v1 router
"""
from fastapi import APIRouter
from app.api.v1.endpoints import assets, hazards, financials, reports

api_router = APIRouter()

# Include endpoint routers
api_router.include_router(assets.router, prefix="/assets", tags=["assets"])
api_router.include_router(hazards.router, prefix="/hazards", tags=["hazards"])
api_router.include_router(financials.router, prefix="/financials", tags=["financials"])
api_router.include_router(reports.router, prefix="/reports", tags=["reports"])
