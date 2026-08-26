import uuid
from app.infrastructure.db.base import Base
from sqlalchemy import String, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Citation(Base):
    __tablename__ = "citations" # type: ignore

    message_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("messages.id", ondelete="CASCADE"), index=True)
    document_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("documents.id", ondelete="CASCADE"), index=True)
    chunk_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("document_chunks.id", ondelete="CASCADE"), index=True)
    
    content_snippet: Mapped[str] = mapped_column(Text)
    
    message = relationship("Message", back_populates="citations")
