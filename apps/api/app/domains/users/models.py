import uuid
from typing import List
from datetime import datetime

from sqlalchemy import ForeignKey, String, Boolean, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.infrastructure.db.base import Base

class UserRole(Base):
    """Association table between User and Role"""
    __tablename__ = "user_roles" # type: ignore
    
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), primary_key=True)
    role_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("roles.id", ondelete="CASCADE"), primary_key=True)


class Role(Base):
    """System roles for RBAC"""
    __tablename__ = "roles" # type: ignore

    name: Mapped[str] = mapped_column(String(50), unique=True, index=True)
    description: Mapped[str | None] = mapped_column(String(255))
    
    users: Mapped[List["User"]] = relationship(
        secondary="user_roles", back_populates="roles"
    )


class User(Base):
    """User account model"""
    __tablename__ = "users" # type: ignore

    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    hashed_password: Mapped[str | None] = mapped_column(String(255)) # Nullable for passwordless or OAuth
    
    first_name: Mapped[str | None] = mapped_column(String(100))
    last_name: Mapped[str | None] = mapped_column(String(100))
    
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    is_verified: Mapped[bool] = mapped_column(Boolean, default=False)
    
    roles: Mapped[List["Role"]] = relationship(
        secondary="user_roles", back_populates="users", lazy="selectin"
    )
    
    otps: Mapped[List["OTP"]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )


class OTP(Base):
    """One Time Password model for 2FA / Passwordless login"""
    __tablename__ = "otps" # type: ignore
    
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"))
    code_hash: Mapped[str] = mapped_column(String(255))
    purpose: Mapped[str] = mapped_column(String(50)) # e.g. "login", "reset_password", "verify_email"
    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    is_used: Mapped[bool] = mapped_column(Boolean, default=False)
    
    user: Mapped["User"] = relationship(back_populates="otps")
