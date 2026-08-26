import uuid
from app.infrastructure.db.base import Base
from sqlalchemy import String, ForeignKey, Text
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship

class AuditLog(Base):
    __tablename__ = "audit_logs" # type: ignore

    user_id: Mapped[uuid.UUID | None] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"), index=True)
    action: Mapped[str] = mapped_column(String(255))
    resource_type: Mapped[str] = mapped_column(String(255))
    resource_id: Mapped[str | None] = mapped_column(String(255))
    details: Mapped[dict] = mapped_column(JSONB, default=dict)
    
    user = relationship("User", backref="audit_logs")
