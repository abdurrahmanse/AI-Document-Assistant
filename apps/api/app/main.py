from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.redis import redis_client
from app.core.logging import setup_logging
from app.router import api_router
from fastapi_limiter import FastAPILimiter


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    setup_logging()
    await redis_client.connect()
    if redis_client.redis:
        await FastAPILimiter.init(redis_client.redis)
    yield
    # Shutdown
    await redis_client.disconnect()

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Backend API for AI Document Intelligence Platform",
    version="0.1.0",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# Set up CORS rules
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.BACKEND_CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Include our unified v1 router
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Document Intelligence API. Visit /docs for Swagger UI."}
