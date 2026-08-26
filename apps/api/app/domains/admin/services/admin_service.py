from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Dict, Any

from app.infrastructure.db.models.user import User
from app.infrastructure.db.models.document import Document
from app.infrastructure.db.models.conversation import Conversation
from app.infrastructure.db.models.job import ProcessingJob

class AdminService:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_core_metrics(self) -> Dict[str, Any]:
        users_count = await self.session.execute(select(func.count()).select_from(User))
        docs_count = await self.session.execute(select(func.count()).select_from(Document))
        conversations_count = await self.session.execute(select(func.count()).select_from(Conversation))
        jobs_count = await self.session.execute(select(func.count()).select_from(ProcessingJob))

        return {
            "total_users": users_count.scalar() or 0,
            "total_documents": docs_count.scalar() or 0,
            "total_conversations": conversations_count.scalar() or 0,
            "total_jobs": jobs_count.scalar() or 0,
        }

    async def list_users(self) -> List[Dict[str, Any]]:
        result = await self.session.execute(select(User).order_by(User.created_at.desc()))
        users = result.scalars().all()
        return [{
            "id": u.id,
            "email": u.email,
            "first_name": u.first_name,
            "last_name": u.last_name,
            "is_active": u.is_active,
            "roles": [r.name for r in u.roles] if u.roles else []
        } for u in users]

    async def list_jobs(self) -> List[Dict[str, Any]]:
        result = await self.session.execute(select(ProcessingJob).order_by(ProcessingJob.created_at.desc()).limit(100))
        jobs = result.scalars().all()
        return [{
            "id": j.id,
            "name": f"Document Processing ({j.document_id})",
            "status": j.status.value,
            "error_message": j.error_message,
            "created_at": j.created_at.isoformat() if j.created_at else None
        } for j in jobs]
