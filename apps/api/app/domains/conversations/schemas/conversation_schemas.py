import uuid
from pydantic import BaseModel

class ConversationResponse(BaseModel):
    id: uuid.UUID
    title: str

class ChatMessageRequest(BaseModel):
    message: str
