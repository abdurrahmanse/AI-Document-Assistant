import uuid
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel

from app.infrastructure.db.session import get_db
from app.domains.auth.dependencies import get_current_user
from app.domains.conversations.repositories.postgres import ConversationRepository
from app.domains.conversations.services.chat_engine import ChatEngine

router = APIRouter()

class ConversationResponse(BaseModel):
    id: uuid.UUID
    title: str

class ChatMessageRequest(BaseModel):
    message: str

@router.get("", response_model=List[ConversationResponse])
async def list_conversations(
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    repo = ConversationRepository(db)
    conversations = await repo.get_all_for_user(current_user.id)
    return [{"id": c.id, "title": c.title} for c in conversations]

@router.post("", response_model=ConversationResponse)
async def create_conversation(
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    repo = ConversationRepository(db)
    conversation = await repo.create(current_user.id)
    await db.commit()
    return {"id": conversation.id, "title": conversation.title}

@router.delete("/{conversation_id}")
async def delete_conversation(
    conversation_id: uuid.UUID,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    repo = ConversationRepository(db)
    success = await repo.delete(conversation_id, current_user.id)
    if not success:
        raise HTTPException(status_code=404, detail="Conversation not found")
    await db.commit()
    return {"status": "deleted"}

from fastapi_limiter.depends import RateLimiter

@router.post("/{conversation_id}/messages", dependencies=[Depends(RateLimiter(times=10, seconds=60))])
async def send_message(
    conversation_id: uuid.UUID,
    request: ChatMessageRequest,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    Streams the AI response back to the client.
    """
    engine = ChatEngine(db)
    
    # Return a StreamingResponse using text/event-stream or application/x-ndjson
    # We will use application/x-ndjson since we yield json lines in the generator
    return StreamingResponse(
        engine.stream_chat(current_user.id, conversation_id, request.message),
        media_type="application/x-ndjson"
    )
