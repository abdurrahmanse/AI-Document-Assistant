import uuid
from app.infrastructure.db.base import Base
from sqlalchemy import String, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

class UsageRecord(Base):
    __tablename__ = "usage_records" # type: ignore

    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    prompt_tokens: Mapped[int] = mapped_column(Integer, default=0)
    completion_tokens: Mapped[int] = mapped_column(Integer, default=0)
    total_tokens: Mapped[int] = mapped_column(Integer, default=0)
    model_name: Mapped[str] = mapped_column(String(255))
    
    user = relationship("User", backref="usage_records")
