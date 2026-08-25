import time
from typing import Any

from fastapi import APIRouter
from loguru import logger
from redis.asyncio import Redis
from sqlalchemy.ext.asyncio import create_async_engine

from app.core.config import settings

router = APIRouter(prefix="/health", tags=["observability"])


# We'll create temporary short-lived clients for the health check
# since the full DI layer is pending in Phase 2.
async def check_db() -> dict[str, Any]:
    start = time.time()
    try:
        engine = create_async_engine(settings.DATABASE_URL, pool_pre_ping=True)
        async with engine.connect():
            pass
        await engine.dispose()
        latency = round((time.time() - start) * 1000, 2)
        return {"status": "ok", "latency_ms": latency}
    except Exception as e:  # noqa: BLE001
        logger.error(f"Database health check failed: {e}")
        latency = round((time.time() - start) * 1000, 2)
        return {"status": "down", "error": str(e), "latency_ms": latency}


async def check_redis() -> dict[str, Any]:
    start = time.time()
    try:
        client = Redis.from_url(settings.REDIS_URL, decode_responses=True)  # type: ignore
        await client.ping()  # type: ignore
        await client.aclose()
        latency = round((time.time() - start) * 1000, 2)
        return {"status": "ok", "latency_ms": latency}
    except Exception as e:  # noqa: BLE001
        logger.error(f"Redis health check failed: {e}")
        latency = round((time.time() - start) * 1000, 2)
        return {"status": "down", "error": str(e), "latency_ms": latency}


@router.get("/detailed")
async def detailed_health_check():
    db_res = await check_db()
    redis_res = await check_redis()

    ai_status = "configured" if settings.OPENAI_API_KEY or settings.ANTHROPIC_API_KEY else "missing"

    overall_status = "ok"
    if db_res["status"] == "down" or redis_res["status"] == "down":
        overall_status = "degraded"

    return {
        "status": overall_status,
        "environment": settings.ENVIRONMENT,
        "services": {
            "api": {"status": "ok"},
            "database": db_res,
            "redis": redis_res,
            "ai_providers": {"status": ai_status},
        },
        "timestamp": time.time(),
    }
