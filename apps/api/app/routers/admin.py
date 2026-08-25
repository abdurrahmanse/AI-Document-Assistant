from fastapi import APIRouter
import asyncio

router = APIRouter(
    prefix="/api/admin",
    tags=["admin"],
)

@router.get("/metrics")
async def get_core_metrics():
    # Simulated API delay to mimic the previous mock
    await asyncio.sleep(0.5)
    
    return {
        "totalUsers": {
            "value": "10,482",
            "trend": "+20.1% from last month",
            "isPositive": True,
        },
        "activeSubscriptions": {
            "value": "+2350",
            "trend": "+180 since yesterday",
            "isPositive": True,
        },
        "systemHealth": {
            "value": "99.99%",
            "trend": "Uptime over 30 days",
        },
        "databaseLoad": {
            "value": "42%",
            "trend": "-4% since last hour",
            "isPositive": False,
        },
    }
