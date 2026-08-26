import uuid
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession
from app.domains.auth.services.security import decode_token
from app.domains.users.repositories.user_repository import UserRepository
from app.domains.users.services.user_service import UserService
from app.infrastructure.db.models.user import User
from app.infrastructure.db.session import get_db_session

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

def get_user_service(session: AsyncSession = Depends(get_db_session)) -> UserService:
    repo = UserRepository(session)
    return UserService(repo)

async def get_current_user(
    token: str = Depends(oauth2_scheme),
    user_service: UserService = Depends(get_user_service)
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    payload = decode_token(token)
    if payload is None:
        raise credentials_exception
    user_id_raw = payload.get("sub")
    if not user_id_raw:
        raise credentials_exception
    user_id_str = str(user_id_raw)
        
    try:
        user_id = uuid.UUID(user_id_str)
    except ValueError:
        raise credentials_exception
        
    user = await user_service.get_user_by_id(user_id)
    if user is None:
        raise credentials_exception
    return user

