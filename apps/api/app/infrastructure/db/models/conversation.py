import uuid
from app.infrastructure.db.base import Base
from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Conversation(Base):
    __tablename__ = "conversations" # type: ignore

    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    title: Mapped[str] = mapped_column(String(255))
    
    user = relationship("User", backref="conversations")
    messages = relationship("Message", back_populates="conversation", cascade="all, delete-orphan")
