from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr

from app.domains.users.services.user_service import UserService
from app.domains.users.repositories.user_repository import UserRepository
from app.infrastructure.db.session import get_db_session
from sqlalchemy.ext.asyncio import AsyncSession
from app.domains.auth.services.security import get_password_hash, verify_password, create_access_token, create_refresh_token
from app.domains.auth.services.otp_service import OTPService
from app.domains.users.models import OTP

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

class VerifyOtpRequest(BaseModel):
    email: EmailStr
    code: str


@router.post("/register")
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


@router.post("/login")
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


@router.post("/request-otp")
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
        purpose="login",
        expires_at=OTPService.calculate_expiry()
    )
    
    await repo.create_otp(otp_record)
    await session.commit()
    
    await OTPService.send_otp_email(user.email, code, "login")
    
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
