from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.db.session import get_db_session
from app.domains.admin.services.admin_service import AdminService
from app.domains.auth.api.dependencies import get_current_user
from app.infrastructure.db.models.user import User

router = APIRouter()

async def require_admin(current_user: User = Depends(get_current_user)):
    is_admin = any(role.name == "admin" for role in current_user.roles)
    if not is_admin:
        raise HTTPException(status_code=403, detail="Not authorized")
    return current_user

def get_admin_service(db: AsyncSession = Depends(get_db_session)) -> AdminService:
    return AdminService(db)

@router.get("/metrics")
async def get_core_metrics(
    service: AdminService = Depends(get_admin_service),
    admin: User = Depends(require_admin)
):
    return await service.get_core_metrics()

@router.get("/users")
async def list_users(
    service: AdminService = Depends(get_admin_service),
    admin: User = Depends(require_admin)
):
    return await service.list_users()

@router.get("/jobs")
async def list_jobs(
    service: AdminService = Depends(get_admin_service),
    admin: User = Depends(require_admin)
):
    return await service.list_jobs()
