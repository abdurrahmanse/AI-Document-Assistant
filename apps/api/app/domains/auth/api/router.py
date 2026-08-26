from app.domains.users.repositories.user_repository import UserRepository
from app.domains.users.services.user_service import UserService
from app.domains.auth.services.auth_service import AuthService
from app.domains.auth.schemas.auth_schemas import (
    RegisterRequest,
    LoginRequest,
    OtpRequest,
    VerifyOtpRequest,
    ResetPasswordRequest,
    RefreshRequest,
)
from app.infrastructure.db.session import get_db_session
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi_limiter.depends import RateLimiter

router = APIRouter(prefix="/auth", tags=["auth"])

def get_auth_service(session: AsyncSession = Depends(get_db_session)) -> AuthService:
    repo = UserRepository(session)
    user_service = UserService(repo)
    return AuthService(user_service, repo)

@router.post("/register", dependencies=[Depends(RateLimiter(times=5, seconds=60))])  # type: ignore
async def register(
    payload: RegisterRequest, 
    auth_service: AuthService = Depends(get_auth_service),
    session: AsyncSession = Depends(get_db_session)
):
    result = await auth_service.register(payload)
    await session.commit()
    return result

@router.post("/login", dependencies=[Depends(RateLimiter(times=10, seconds=60))])  # type: ignore
async def login(
    payload: LoginRequest,
    auth_service: AuthService = Depends(get_auth_service)
):
    # Login does not modify DB state, so no commit is necessary.
    return await auth_service.login(payload)

@router.post("/request-otp", dependencies=[Depends(RateLimiter(times=3, seconds=60))])  # type: ignore
async def request_otp(
    payload: OtpRequest,
    auth_service: AuthService = Depends(get_auth_service),
    session: AsyncSession = Depends(get_db_session)
):
    result = await auth_service.request_otp(payload)
    await session.commit()
    return result

@router.post("/verify-otp")
async def verify_otp(
    payload: VerifyOtpRequest,
    auth_service: AuthService = Depends(get_auth_service),
    session: AsyncSession = Depends(get_db_session)
):
    result = await auth_service.verify_otp(payload)
    await session.commit()
    return result

@router.post("/refresh")
async def refresh(
    payload: RefreshRequest,
    auth_service: AuthService = Depends(get_auth_service)
):
    return await auth_service.refresh(payload)

@router.post("/reset-password")
async def reset_password(
    payload: ResetPasswordRequest,
    auth_service: AuthService = Depends(get_auth_service),
    session: AsyncSession = Depends(get_db_session)
):
    result = await auth_service.reset_password(payload)
    await session.commit()
    return result
