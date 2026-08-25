import redis.asyncio as redis
from loguru import logger

from app.core.config import settings


class RedisClient:
    def __init__(self):
        self.redis: redis.Redis | None = None

    async def connect(self):
        logger.info(f"Connecting to Redis at {settings.REDIS_HOST}:{settings.REDIS_PORT}...")
        self.redis = redis.from_url(
            settings.REDIS_URL,
            encoding="utf-8",
            decode_responses=True
        )
        # Test connection
        try:
            await self.redis.ping()
            logger.info("Successfully connected to Redis.")
        except Exception as e:
            logger.error(f"Failed to connect to Redis: {e}")
            raise

    async def disconnect(self):
        if self.redis:
            logger.info("Disconnecting from Redis...")
            await self.redis.aclose() # aclose() is for redis-py 5.0+
            logger.info("Successfully disconnected from Redis.")

redis_client = RedisClient()
