import uuid
import enum
from app.infrastructure.db.base import Base
from sqlalchemy import String, ForeignKey, Enum as SQLEnum, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

class MessageRole(str, enum.Enum):
    USER = "user"
    ASSISTANT = "assistant"
    SYSTEM = "system"

class Message(Base):
    __tablename__ = "messages" # type: ignore

    conversation_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("conversations.id", ondelete="CASCADE"), index=True)
    role: Mapped[MessageRole] = mapped_column(SQLEnum(MessageRole))
    content: Mapped[str] = mapped_column(Text)
    
    conversation = relationship("Conversation", back_populates="messages")
    citations = relationship("Citation", back_populates="message", cascade="all, delete-orphan")
