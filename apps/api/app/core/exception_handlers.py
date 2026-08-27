from fastapi import Request, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
import logging

from app.core.exceptions import AppException

logger = logging.getLogger(__name__)

def create_error_response(code: str, message: str, details: list | dict | None = None) -> dict:
    return {
        "error": {
            "code": code,
            "message": message,
            "details": details
        }
    }

async def app_exception_handler(request: Request, exc: AppException) -> JSONResponse:
    logger.warning(f"AppException: {exc.message} (Code: {exc.error_code})")
    return JSONResponse(
        status_code=exc.status_code,
        content=create_error_response(exc.error_code, exc.message, exc.details),
        headers=exc.headers,
    )

async def http_exception_handler(request: Request, exc: StarletteHTTPException) -> JSONResponse:
    logger.warning(f"HTTPException: {exc.detail} (Status: {exc.status_code})")
    
    # Try to provide a sensible error code based on status code if one isn't obvious
    code = "HTTP_ERROR"
    if exc.status_code == 400: code = "BAD_REQUEST"
    elif exc.status_code == 401: code = "UNAUTHORIZED"
    elif exc.status_code == 403: code = "FORBIDDEN"
    elif exc.status_code == 404: code = "NOT_FOUND"
    elif exc.status_code == 422: code = "UNPROCESSABLE_ENTITY"
    
    return JSONResponse(
        status_code=exc.status_code,
        content=create_error_response(code, str(exc.detail)),
        headers=exc.headers,
    )

async def validation_exception_handler(request: Request, exc: RequestValidationError) -> JSONResponse:
    logger.warning(f"RequestValidationError: {exc.errors()}")
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content=create_error_response(
            code="VALIDATION_ERROR",
            message="Request validation failed",
            details=exc.errors()
        ),
    )

async def unhandled_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    logger.error(f"Unhandled Exception: {exc}", exc_info=True)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content=create_error_response(
            code="INTERNAL_SERVER_ERROR",
            message="An unexpected error occurred"
        ),
    )
