from app.core.config import settings
from app.core.logger import setup_logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

setup_logging()

app = FastAPI(
    title="AI Document Intelligence API",
    description="Backend API for AI Document Intelligence Platform",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.observability import health
from app.routers import admin, app_routes

app.include_router(health.router)
app.include_router(admin.router)
app.include_router(app_routes.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Document Intelligence API"}
