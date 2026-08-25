from typing import Annotated
from fastapi import Depends
import redis.asyncio as redis
from app.core.redis import redis_client

async def get_redis() -> redis.Redis:
    if not redis_client.redis:
        raise RuntimeError("Redis is not initialized")
    return redis_client.redis

RedisDependency = Annotated[redis.Redis, Depends(get_redis)]