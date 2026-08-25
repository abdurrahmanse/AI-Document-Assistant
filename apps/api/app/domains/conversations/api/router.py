from typing import Any

from app.domains.conversations.services.chat_session import ChatSessionService
from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()

def get_chat_service() -> ChatSessionService:
    return ChatSessionService()

@router.get("/sessions")
async def get_sessions(service: ChatSessionService = Depends(get_chat_service)):
    return await service.get_sessions()

@router.get("/sessions/{session_id}")
async def get_session(session_id: str, service: ChatSessionService = Depends(get_chat_service)):
    session = await service.get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    return session

@router.post("/sessions/{session_id}/messages")
async def send_message(session_id: str, payload: dict[str, Any], service: ChatSessionService = Depends(get_chat_service)):
    content = payload.get("content")
    if not content:
        raise HTTPException(status_code=400, detail="Message content is required")
    
    bot_msg = await service.add_message(session_id, content)
    if not bot_msg:
        raise HTTPException(status_code=404, detail="Session not found")
        
    return bot_msg
