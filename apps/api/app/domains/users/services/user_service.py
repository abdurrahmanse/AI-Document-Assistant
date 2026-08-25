from typing import Optional
import uuid

from app.domains.users.models import User, Role
from app.domains.users.repositories.user_repository import UserRepository


class UserService:
    def __init__(self, repository: UserRepository):
        self.repository = repository

    async def get_user_by_email(self, email: str) -> Optional[User]:
        return await self.repository.get_by_email(email)

    async def get_user_by_id(self, user_id: uuid.UUID) -> Optional[User]:
        return await self.repository.get_by_id(user_id)

    async def create_user(
        self, email: str, hashed_password: str | None = None, first_name: str | None = None, last_name: str | None = None
    ) -> User:
        # Check if user exists
        existing_user = await self.get_user_by_email(email)
        if existing_user:
            raise ValueError("User with this email already exists")

        new_user = User(
            email=email,
            hashed_password=hashed_password,
            first_name=first_name,
            last_name=last_name,
        )

        # Assign default 'user' role
        default_role = await self.repository.get_role_by_name("user")
        if default_role:
            new_user.roles.append(default_role)

        return await self.repository.create(new_user)
