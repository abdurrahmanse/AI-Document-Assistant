import uuid
from typing import List, Optional
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.infrastructure.db.models.conversation import Conversation
from app.infrastructure.db.models.message import Message, MessageRole

class ConversationRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_by_id(self, conversation_id: uuid.UUID, user_id: uuid.UUID) -> Optional[Conversation]:
        stmt = (
            select(Conversation)
            .options(selectinload(Conversation.messages))
            .where(Conversation.id == conversation_id, Conversation.user_id == user_id)
        )
        result = await self.session.execute(stmt)
        return result.scalars().first()

    async def get_all_for_user(self, user_id: uuid.UUID) -> List[Conversation]:
        stmt = (
            select(Conversation)
            .where(Conversation.user_id == user_id)
            .order_by(Conversation.created_at.desc())
        )
        result = await self.session.execute(stmt)
        return list(result.scalars().all())

    async def create(self, user_id: uuid.UUID, title: str = "New Conversation") -> Conversation:
        conversation = Conversation(user_id=user_id, title=title)
        self.session.add(conversation)
        await self.session.flush()
        await self.session.refresh(conversation)
        return conversation

    async def delete(self, conversation_id: uuid.UUID, user_id: uuid.UUID) -> bool:
        conversation = await self.get_by_id(conversation_id, user_id)
        if conversation:
            await self.session.delete(conversation)
            await self.session.flush()
            return True
        return False

class MessageRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def add_message(self, conversation_id: uuid.UUID, role: MessageRole, content: str) -> Message:
        message = Message(conversation_id=conversation_id, role=role, content=content)
        self.session.add(message)
        await self.session.flush()
        await self.session.refresh(message)
        return message
