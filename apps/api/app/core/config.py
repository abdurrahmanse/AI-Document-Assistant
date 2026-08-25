from pathlib import Path

from pydantic import computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict

# Calculate root directory robustly (5 levels up from apps/api/app/core/config.py)
ROOT_DIR = Path(__file__).resolve().parent.parent.parent.parent.parent

class Settings(BaseSettings):
    PROJECT_NAME: str = "AI Document Assistant API"
    API_V1_STR: str = "/api/v1"
    
    # CORS
    CORS_ORIGINS: str = ""
    
    @computed_field
    @property
    def BACKEND_CORS_ORIGINS(self) -> list[str]:
        if not self.CORS_ORIGINS:
            return []
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",")]
    
    # Postgres
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_HOST: str = "localhost"
    POSTGRES_PORT: int = 5432
    POSTGRES_DB: str = "ai_document_db"
    
    @computed_field
    @property
    def DATABASE_URL(self) -> str:
        return f"postgresql+asyncpg://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_HOST}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}"
    
    # Redis
    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379
    REDIS_DB: str = "0"
    
    @computed_field
    @property
    def REDIS_URL(self) -> str:
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}/{self.REDIS_DB}"
    
    # Security
    JWT_SECRET_KEY: str = ""
    
    @computed_field
    @property
    def JWT_SECRET(self) -> str:
        return self.JWT_SECRET_KEY
        
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    # Email (Brevo)
    BREVO_API_KEY: str = ""
    BREVO_SENDER_EMAIL: str = ""
    BREVO_SENDER_NAME: str = "AI Document Assistant"
    BREVO_SMTP_HOST: str = "smtp-relay.brevo.com"
    BREVO_SMTP_PORT: int = 587
    BREVO_SMTP_USER: str = ""
    BREVO_SMTP_PASSWORD: str = ""
    BREVO_OTP_TEMPLATE_ID: str = ""
    
    # OTP Configuration
    OTP_EXPIRATION_MINUTES: int = 10
    OTP_LENGTH: int = 6
    
    # Sentry
    SENTRY_DSN: str = ""
    SENTRY_ORG: str = ""
    SENTRY_PROJECT: str = ""
    SENTRY_ENVIRONMENT: str = "development"
    API_SENTRY_TRACES_SAMPLE_RATE: float = 1.0

    # S3 / Object Storage
    S3_BUCKET_NAME: str | None = None
    AWS_REGION: str | None = None
    AWS_ACCESS_KEY_ID: str | None = None
    AWS_SECRET_ACCESS_KEY: str | None = None
    
    # AI / LLM
    OPENAI_API_KEY: str | None = None
    ANTHROPIC_API_KEY: str | None = None
    
    ENVIRONMENT: str = "development"
    LOG_LEVEL: str = "INFO"
    
    model_config = SettingsConfigDict(
        env_file=str(ROOT_DIR / ".env"),
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )

settings = Settings()
