import uuid
import enum
from datetime import datetime

from app.infrastructure.db.base import Base
from sqlalchemy import String, ForeignKey, Enum as SQLEnum, Text, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship


class DocumentStatus(str, enum.Enum):
    UPLOADING = "UPLOADING"
    QUEUED = "QUEUED"
    PROCESSING = "PROCESSING"
    READY = "READY"
    FAILED = "FAILED"


class Document(Base):
    __tablename__ = "documents" # type: ignore

    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    title: Mapped[str] = mapped_column(String(255))
    filename: Mapped[str] = mapped_column(String(255))
    mime_type: Mapped[str] = mapped_column(String(100))
    storage_key: Mapped[str] = mapped_column(String(500), unique=True)
    size_bytes: Mapped[int] = mapped_column(Integer)
    status: Mapped[DocumentStatus] = mapped_column(SQLEnum(DocumentStatus), default=DocumentStatus.UPLOADING)
    
    user = relationship("User", backref="documents")
    versions = relationship("DocumentVersion", back_populates="document", cascade="all, delete-orphan")
    chunks = relationship("DocumentChunk", back_populates="document", cascade="all, delete-orphan")


class DocumentVersion(Base):
    __tablename__ = "document_versions" # type: ignore
    
    document_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("documents.id", ondelete="CASCADE"), index=True)
    version_number: Mapped[int] = mapped_column(Integer)
    storage_key: Mapped[str] = mapped_column(String(500), unique=True)
    
    document = relationship("Document", back_populates="versions")
