"""
Location Risk Intelligence Platform - Main FastAPI Application
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager

from app.core.config import settings
from app.api.v1 import api_router
from app.db.session import engine
from app.db.base import Base


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan events"""
    # Startup
    print("🚀 Starting Location Risk Intelligence Platform...")
    
    # Create database tables (skip if DB not available)
    try:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        print("✅ Database initialized")
    except Exception as e:
        print(f"⚠️ Database not available (running without DB): {e}")
    
    print("✅ Database initialized")
    print(f"📡 API available at: {settings.API_V1_STR}")
    
    yield
    
    # Shutdown
    print("👋 Shutting down...")


# Create FastAPI application
app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Climate Risk & Financial Impact SaaS Platform",
    version="1.0.0",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# Configure CORS - Allow all origins for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Location Risk Intelligence Platform API",
        "version": "1.0.0",
        "docs": "/docs",
        "health": "/health"
    }


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "LRI Platform",
        "environment": settings.ENVIRONMENT
    }


# Include API router
app.include_router(api_router, prefix=settings.API_V1_STR)


# Exception handlers
@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    """Global exception handler"""
    return JSONResponse(
        status_code=500,
        content={
            "detail": str(exc),
            "type": type(exc).__name__
        }
    )
