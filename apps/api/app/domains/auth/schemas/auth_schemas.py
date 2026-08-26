from pydantic import BaseModel, EmailStr

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

class RefreshRequest(BaseModel):
    refresh_token: str
