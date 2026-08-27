from fastapi import Request, HTTPException, status
from app.core.redis import redis_client

class RateLimiter:
    def __init__(self, times: int, seconds: int):
        self.times = times
        self.seconds = seconds

    async def __call__(self, request: Request):
        if not redis_client.redis:
            return
        
        # Determine client IP for rate limiting key
        ip = "127.0.0.1"
        if request.client and request.client.host:
            ip = request.client.host
            
        # Optional: rate limit per path/route
        path = request.scope.get("path", "unknown_path")
        key = f"rate_limit:{ip}:{path}"
        
        current = await redis_client.redis.incr(key)
        if current == 1:
            await redis_client.redis.expire(key, self.seconds)
            
        if current > self.times:
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Too Many Requests"
            )
