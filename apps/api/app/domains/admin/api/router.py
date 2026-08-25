import asyncio

from app.domains.admin.services.metrics import AdminMetricsService
from fastapi import APIRouter, Depends

router = APIRouter()

def get_metrics_service() -> AdminMetricsService:
    return AdminMetricsService()

@router.get("/metrics")
async def get_core_metrics(service: AdminMetricsService = Depends(get_metrics_service)):
    # Simulated API delay
    await asyncio.sleep(0.5)
    return await service.get_core_metrics()
