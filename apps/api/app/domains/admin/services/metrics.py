from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.db.models.user import User
from app.infrastructure.db.models.document import Document
from app.infrastructure.db.models.conversation import Conversation
from app.infrastructure.db.models.job import Job

class AdminMetricsService:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_core_metrics(self) -> dict:
        users_count = await self.session.execute(select(func.count()).select_from(User))
        docs_count = await self.session.execute(select(func.count()).select_from(Document))
        conversations_count = await self.session.execute(select(func.count()).select_from(Conversation))
        jobs_count = await self.session.execute(select(func.count()).select_from(Job))

        return {
            "totalUsers": {
                "value": str(users_count.scalar()),
                "trend": "Live Data",
                "isPositive": True,
            },
            "totalDocuments": {
                "value": str(docs_count.scalar()),
                "trend": "Live Data",
                "isPositive": True,
            },
            "totalConversations": {
                "value": str(conversations_count.scalar()),
                "trend": "Live Data",
            },
            "totalJobs": {
                "value": str(jobs_count.scalar()),
                "trend": "Live Data",
                "isPositive": True,
            },
        }
