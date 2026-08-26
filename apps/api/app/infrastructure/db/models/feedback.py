import uuid
from app.infrastructure.db.base import Base
from sqlalchemy import String, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Feedback(Base):
    __tablename__ = "feedback" # type: ignore

    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    message_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("messages.id", ondelete="CASCADE"), index=True)
    is_positive: Mapped[bool] = mapped_column(default=True)
    comment: Mapped[str | None] = mapped_column(Text)
    
    user = relationship("User", backref="feedback")
    message = relationship("Message", backref="feedback")
