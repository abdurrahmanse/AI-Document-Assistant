from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.infrastructure.db.session import get_db
from app.domains.admin.services.metrics import AdminMetricsService
from app.domains.auth.dependencies import get_current_user
from app.infrastructure.db.models.user import User, UserRole

router = APIRouter()

async def require_admin(current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Not authorized")
    return current_user

@router.get("/metrics")
async def get_core_metrics(
    db: AsyncSession = Depends(get_db),
    admin: User = Depends(require_admin)
):
    service = AdminMetricsService(db)
    return await service.get_core_metrics()

@router.get("/users")
async def list_users(
    db: AsyncSession = Depends(get_db),
    admin: User = Depends(require_admin)
):
    result = await db.execute(select(User).order_by(User.created_at.desc()))
    users = result.scalars().all()
    return [{
        "id": u.id,
        "email": u.email,
        "first_name": u.first_name,
        "last_name": u.last_name,
        "is_active": u.is_active,
        "role": u.role.value
    } for u in users]

from app.infrastructure.db.models.job import Job

@router.get("/jobs")
async def list_jobs(
    db: AsyncSession = Depends(get_db),
    admin: User = Depends(require_admin)
):
    result = await db.execute(select(Job).order_by(Job.created_at.desc()).limit(100))
    jobs = result.scalars().all()
    return [{
        "id": j.id,
        "name": j.name,
        "status": j.status.value,
        "error_message": j.error_message,
        "created_at": j.created_at.isoformat() if j.created_at else None
    } for j in jobs]

