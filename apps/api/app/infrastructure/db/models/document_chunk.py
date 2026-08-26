import uuid
from app.infrastructure.db.base import Base
from sqlalchemy import String, ForeignKey, Text
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship
from pgvector.sqlalchemy import Vector

class DocumentChunk(Base):
    __tablename__ = "document_chunks" # type: ignore

    document_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("documents.id", ondelete="CASCADE"), index=True)
    content: Mapped[str] = mapped_column(Text)
    embedding = mapped_column(Vector(1536))
    metadata_json: Mapped[dict] = mapped_column(JSONB, default=dict)
    
    document = relationship("Document", back_populates="chunks")
