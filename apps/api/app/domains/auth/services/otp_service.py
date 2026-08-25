import secrets
import string
from datetime import UTC, datetime, timedelta

from loguru import logger


class OTPService:
    @staticmethod
    def generate_otp(length: int = 6) -> str:
        """Generate a secure N-digit OTP"""
        digits = string.digits
        return "".join(secrets.choice(digits) for _ in range(length))

    @staticmethod
    def calculate_expiry(minutes: int = 15) -> datetime:
        """Calculate expiry time from now"""
        return datetime.now(UTC) + timedelta(minutes=minutes)

    @staticmethod
    async def send_otp_email(email: str, otp_code: str, purpose: str) -> None:
        """
        Sends an email using Brevo (Sendinblue) API.
        """
        import httpx
        from app.core.config import settings
        
        # If no API key is provided, fallback to log (e.g. in local dev without env variables)
        if not settings.BREVO_API_KEY:
            logger.info("==== MOCK EMAIL SENDER (No Brevo API Key) ====")
            logger.info(f"To: {email}")
            logger.info(f"Subject: Your OTP Code for {purpose}")
            logger.info(f"Body: Your 6-digit code is: {otp_code}")
            logger.info("===========================")
            return

        sender_email = settings.BREVO_SENDER_EMAIL or "noreply@example.com"
        
        headers = {
            "accept": "application/json",
            "api-key": settings.BREVO_API_KEY,
            "content-type": "application/json"
        }
        
        payload = {
            "sender": {"email": sender_email, "name": settings.PROJECT_NAME},
            "to": [{"email": email}],
            "subject": f"Your OTP Code for {purpose}",
            "htmlContent": f"<html><body><p>Hello,</p><p>Your verification code for {purpose} is: <strong>{otp_code}</strong></p><p>This code will expire shortly.</p></body></html>"
        }
        
        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    "https://api.brevo.com/v3/smtp/email",
                    headers=headers,
                    json=payload
                )
                if response.status_code not in (200, 201, 202):
                    logger.error(f"Failed to send email via Brevo: {response.text}")
                else:
                    logger.info(f"Successfully sent OTP to {email}")
        except Exception as e:
            logger.error(f"Exception while sending email via Brevo: {e!s}")
