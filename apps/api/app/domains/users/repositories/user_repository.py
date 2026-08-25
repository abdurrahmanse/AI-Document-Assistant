import uuid

from app.domains.users.models import OTP, Role, User
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession


class UserRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_by_id(self, user_id: uuid.UUID) -> User | None:
        stmt = select(User).where(User.id == user_id)
        result = await self.session.execute(stmt)
        return result.scalars().first()

    async def get_by_email(self, email: str) -> User | None:
        stmt = select(User).where(User.email == email)
        result = await self.session.execute(stmt)
        return result.scalars().first()

    async def create(self, user: User) -> User:
        self.session.add(user)
        await self.session.flush()
        return user

    async def get_role_by_name(self, name: str) -> Role | None:
        stmt = select(Role).where(Role.name == name)
        result = await self.session.execute(stmt)
        return result.scalars().first()

    async def create_otp(self, otp: OTP) -> OTP:
        self.session.add(otp)
        await self.session.flush()
        return otp

    async def get_valid_otp(self, user_id: uuid.UUID, purpose: str) -> OTP | None:
        from datetime import UTC, datetime
        stmt = (
            select(OTP)
            .where(OTP.user_id == user_id)
            .where(OTP.purpose == purpose)
            .where(OTP.is_used == False)
            .where(OTP.expires_at > datetime.now(UTC))
            .order_by(OTP.expires_at.desc())
        )
        result = await self.session.execute(stmt)
        return result.scalars().first()

