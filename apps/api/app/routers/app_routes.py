from fastapi import APIRouter, HTTPException, File, UploadFile
from typing import List, Dict, Any
from datetime import datetime, timezone
import uuid

router = APIRouter(prefix="/api/app", tags=["App"])

# --- Mock Data Stores ---
chat_sessions = [
    {
        "id": "1",
        "title": "Project Alpha Planning",
        "updatedAt": datetime.now(timezone.utc).isoformat(),
        "messages": [
            {
                "id": "m1",
                "role": "user",
                "content": "Can you summarize the Q3 report?",
                "createdAt": datetime.now(timezone.utc).isoformat(),
            },
            {
                "id": "m2",
                "role": "assistant",
                "content": "The Q3 report shows a 20% increase in user engagement.",
                "createdAt": datetime.now(timezone.utc).isoformat(),
            },
        ],
    }
]

documents = [
    {
        "id": "d1",
        "title": "Q3_Financial_Report.pdf",
        "type": "application/pdf",
        "size": "2.4 MB",
        "uploadedAt": datetime.now(timezone.utc).isoformat(),
        "status": "ready",
    }
]

# --- Chat Endpoints ---

@router.get("/chat/sessions")
def get_sessions():
    return chat_sessions

@router.get("/chat/sessions/{session_id}")
def get_session(session_id: str):
    session = next((s for s in chat_sessions if s["id"] == session_id), None)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    return session

@router.post("/chat/sessions/{session_id}/messages")
def send_message(session_id: str, payload: Dict[str, Any]):
    content = payload.get("content")
    if not content:
        raise HTTPException(status_code=400, detail="Message content is required")
    
    session = next((s for s in chat_sessions if s["id"] == session_id), None)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
        
    user_msg = {
        "id": f"u-{uuid.uuid4()}",
        "role": "user",
        "content": content,
        "createdAt": datetime.now(timezone.utc).isoformat(),
    }
    session["messages"].append(user_msg)
    
    # Mock AI response
    bot_msg = {
        "id": f"a-{uuid.uuid4()}",
        "role": "assistant",
        "content": f"I received your message: '{content}'. This is a mock response from the backend.",
        "createdAt": datetime.now(timezone.utc).isoformat(),
    }
    session["messages"].append(bot_msg)
    
    return bot_msg

# --- Document Endpoints ---

@router.get("/documents")
def get_documents():
    return documents

@router.post("/documents/upload")
async def upload_document(file: UploadFile = File(...)):
    new_doc = {
        "id": f"d-{uuid.uuid4()}",
        "title": file.filename,
        "type": file.content_type,
        "size": "1.0 MB", # Hardcoded for mock
        "uploadedAt": datetime.now(timezone.utc).isoformat(),
        "status": "processing",
    }
    documents.append(new_doc)
    return new_doc
