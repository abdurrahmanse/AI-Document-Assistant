from app.domains.auth.services.otp_service import OTPService
from app.domains.auth.services.security import (
    create_access_token,
    create_refresh_token,
    get_password_hash,
    verify_password,
)
from app.infrastructure.db.models.user import OTP
from app.domains.users.repositories.user_repository import UserRepository
from app.domains.users.services.user_service import UserService
from app.infrastructure.db.session import get_db_session
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter(prefix="/auth", tags=["auth"])

def get_user_service(session: AsyncSession = Depends(get_db_session)) -> UserService:
    repo = UserRepository(session)
    return UserService(repo)

def get_user_repo(session: AsyncSession = Depends(get_db_session)) -> UserRepository:
    return UserRepository(session)

class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    first_name: str | None = None
    last_name: str | None = None

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class OtpRequest(BaseModel):
    email: EmailStr
    purpose: str = "login"

class VerifyOtpRequest(BaseModel):
    email: EmailStr
    code: str

class ResetPasswordRequest(BaseModel):
    email: EmailStr
    code: str
    new_password: str

from fastapi_limiter.depends import RateLimiter

@router.post("/register", dependencies=[Depends(RateLimiter(times=5, seconds=60))])
async def register(
    payload: RegisterRequest, 
    user_service: UserService = Depends(get_user_service),
    session: AsyncSession = Depends(get_db_session)
):
    existing = await user_service.get_user_by_email(payload.email)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
        
    hashed = get_password_hash(payload.password)
    user = await user_service.create_user(
        email=payload.email,
        hashed_password=hashed,
        first_name=payload.first_name,
        last_name=payload.last_name
    )
    
    await session.commit()
    
    return {"message": "User created successfully", "user_id": user.id}


@router.post("/login", dependencies=[Depends(RateLimiter(times=10, seconds=60))])
async def login(
    payload: LoginRequest,
    user_service: UserService = Depends(get_user_service)
):
    user = await user_service.get_user_by_email(payload.email)
    if not user or not user.hashed_password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
        
    if not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
        
    access_token = create_access_token(subject=user.id)
    refresh_token = create_refresh_token(subject=user.id)
    
    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name
        }
    }


@router.post("/request-otp", dependencies=[Depends(RateLimiter(times=3, seconds=60))])
async def request_otp(
    payload: OtpRequest,
    user_service: UserService = Depends(get_user_service),
    repo: UserRepository = Depends(get_user_repo),
    session: AsyncSession = Depends(get_db_session)
):
    user = await user_service.get_user_by_email(payload.email)
    if not user:
        # Prevent email enumeration by returning success anyway
        return {"message": "If the email is registered, an OTP was sent."}
        
    code = OTPService.generate_otp()
    hashed_code = get_password_hash(code)
    
    otp_record = OTP(
        user_id=user.id,
        code_hash=hashed_code,
        purpose=payload.purpose,
        expires_at=OTPService.calculate_expiry()
    )
    
    await repo.create_otp(otp_record)
    await session.commit()
    
    await OTPService.send_otp_email(user.email, code, payload.purpose)
    
    return {"message": "If the email is registered, an OTP was sent."}


@router.post("/verify-otp")
async def verify_otp(
    payload: VerifyOtpRequest,
    user_service: UserService = Depends(get_user_service),
    repo: UserRepository = Depends(get_user_repo),
    session: AsyncSession = Depends(get_db_session)
):
    user = await user_service.get_user_by_email(payload.email)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid OTP")
        
    valid_otp = await repo.get_valid_otp(user.id, "login")
    if not valid_otp:
        raise HTTPException(status_code=401, detail="OTP expired or not found")
        
    if not verify_password(payload.code, valid_otp.code_hash):
        raise HTTPException(status_code=401, detail="Invalid OTP")
        
    # Mark as used
    valid_otp.is_used = True
    await session.commit()
    
    access_token = create_access_token(subject=user.id)
    refresh_token = create_refresh_token(subject=user.id)
    
    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "email": user.email,
        }
    }


class RefreshRequest(BaseModel):
    refresh_token: str

@router.post("/refresh")
async def refresh(
    payload: RefreshRequest,
    user_service: UserService = Depends(get_user_service)
):
    from app.domains.auth.services.security import decode_token
    token_data = decode_token(payload.refresh_token)
    if not token_data or token_data.get("type") != "refresh":
        raise HTTPException(status_code=401, detail="Invalid refresh token")
        
    user_id = token_data.get("sub")
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid refresh token")
        
    import uuid
    user = await user_service.get_user_by_id(uuid.UUID(user_id))
    if not user:
        raise HTTPException(status_code=401, detail="Invalid user")
        
    access_token = create_access_token(subject=user.id)
    # optionally return a new refresh token as well
    
    return {
        "access_token": access_token,
        "token_type": "bearer"
    }




@router.post("/reset-password")
async def reset_password(
    payload: ResetPasswordRequest,
    user_service: UserService = Depends(get_user_service),
    repo: UserRepository = Depends(get_user_repo),
    session: AsyncSession = Depends(get_db_session)
):
    user = await user_service.get_user_by_email(payload.email)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid OTP")
        
    valid_otp = await repo.get_valid_otp(user.id, "reset_password")
    if not valid_otp:
        raise HTTPException(status_code=401, detail="OTP expired or not found")
        
    if not verify_password(payload.code, valid_otp.code_hash):
        raise HTTPException(status_code=401, detail="Invalid OTP")
        
    # Hash the new password and update the user
    user.hashed_password = get_password_hash(payload.new_password)
    
    # Mark as used
    valid_otp.is_used = True
    await session.commit()
    
    return {"message": "Password reset successfully"}
