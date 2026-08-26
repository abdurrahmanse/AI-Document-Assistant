import uuid
import enum
from app.infrastructure.db.base import Base
from sqlalchemy import String, ForeignKey, Enum as SQLEnum, Text, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

class JobStatus(str, enum.Enum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

class ProcessingJob(Base):
    __tablename__ = "processing_jobs" # type: ignore

    document_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("documents.id", ondelete="CASCADE"), index=True)
    status: Mapped[JobStatus] = mapped_column(SQLEnum(JobStatus), default=JobStatus.PENDING)
    error_message: Mapped[str | None] = mapped_column(Text)
    attempts: Mapped[int] = mapped_column(Integer, default=0)
    
    document = relationship("Document", backref="jobs")
