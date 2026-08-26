import uuid
from typing import Dict, Any

from app.domains.auth.schemas.auth_schemas import (
    RegisterRequest,
    LoginRequest,
    OtpRequest,
    VerifyOtpRequest,
    ResetPasswordRequest,
    RefreshRequest,
)
from app.domains.auth.services.otp_service import OTPService
from app.domains.auth.services.security import (
    create_access_token,
    create_refresh_token,
    get_password_hash,
    verify_password,
    decode_token,
)
from app.infrastructure.db.models.user import OTP
from app.domains.users.repositories.user_repository import UserRepository
from app.domains.users.services.user_service import UserService
from fastapi import HTTPException


class AuthService:
    def __init__(self, user_service: UserService, repo: UserRepository):
        self.user_service = user_service
        self.repo = repo

    async def register(self, payload: RegisterRequest) -> Dict[str, Any]:
        existing = await self.user_service.get_user_by_email(payload.email)
        if existing:
            raise HTTPException(status_code=400, detail="Email already registered")

        hashed = get_password_hash(payload.password)
        user = await self.user_service.create_user(
            email=payload.email,
            hashed_password=hashed,
            first_name=payload.first_name,
            last_name=payload.last_name,
        )
        return {"message": "User created successfully", "user_id": user.id}

    async def login(self, payload: LoginRequest) -> Dict[str, Any]:
        user = await self.user_service.get_user_by_email(payload.email)
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
                "last_name": user.last_name,
            },
        }

    async def request_otp(self, payload: OtpRequest) -> Dict[str, Any]:
        user = await self.user_service.get_user_by_email(payload.email)
        if not user:
            # Prevent email enumeration
            return {"message": "If the email is registered, an OTP was sent."}

        code = OTPService.generate_otp()
        hashed_code = get_password_hash(code)

        otp_record = OTP(
            user_id=user.id,
            code_hash=hashed_code,
            purpose=payload.purpose,
            expires_at=OTPService.calculate_expiry(),
        )

        await self.repo.create_otp(otp_record)
        await OTPService.send_otp_email(user.email, code, payload.purpose)

        return {"message": "If the email is registered, an OTP was sent."}

    async def verify_otp(self, payload: VerifyOtpRequest) -> Dict[str, Any]:
        user = await self.user_service.get_user_by_email(payload.email)
        if not user:
            raise HTTPException(status_code=401, detail="Invalid OTP")

        valid_otp = await self.repo.get_valid_otp(user.id, "login")
        if not valid_otp:
            raise HTTPException(status_code=401, detail="OTP expired or not found")

        if not verify_password(payload.code, valid_otp.code_hash):
            raise HTTPException(status_code=401, detail="Invalid OTP")

        valid_otp.is_used = True

        access_token = create_access_token(subject=user.id)
        refresh_token = create_refresh_token(subject=user.id)

        return {
            "access_token": access_token,
            "refresh_token": refresh_token,
            "token_type": "bearer",
            "user": {
                "id": user.id,
                "email": user.email,
            },
        }

    async def refresh(self, payload: RefreshRequest) -> Dict[str, Any]:
        token_data = decode_token(payload.refresh_token)
        if not token_data or token_data.get("type") != "refresh":
            raise HTTPException(status_code=401, detail="Invalid refresh token")

        user_id = token_data.get("sub")
        if not user_id:
            raise HTTPException(status_code=401, detail="Invalid refresh token")

        user = await self.user_service.get_user_by_id(uuid.UUID(user_id))
        if not user:
            raise HTTPException(status_code=401, detail="Invalid user")

        access_token = create_access_token(subject=user.id)

        return {
            "access_token": access_token,
            "token_type": "bearer",
        }

    async def reset_password(self, payload: ResetPasswordRequest) -> Dict[str, Any]:
        user = await self.user_service.get_user_by_email(payload.email)
        if not user:
            raise HTTPException(status_code=401, detail="Invalid OTP")

        valid_otp = await self.repo.get_valid_otp(user.id, "reset_password")
        if not valid_otp:
            raise HTTPException(status_code=401, detail="OTP expired or not found")

        if not verify_password(payload.code, valid_otp.code_hash):
            raise HTTPException(status_code=401, detail="Invalid OTP")

        user.hashed_password = get_password_hash(payload.new_password)
        valid_otp.is_used = True

        return {"message": "Password reset successfully"}
