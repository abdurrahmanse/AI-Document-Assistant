from typing import Any, Dict, Optional

class AppException(Exception):
    """Base application exception."""
    def __init__(
        self,
        status_code: int,
        error_code: str,
        message: str,
        details: Optional[Any] = None,
        headers: Optional[Dict[str, str]] = None,
    ):
        self.status_code = status_code
        self.error_code = error_code
        self.message = message
        self.details = details
        self.headers = headers
        super().__init__(message)


class BadRequestException(AppException):
    def __init__(self, message: str = "Bad Request", error_code: str = "BAD_REQUEST", details: Optional[Any] = None):
        super().__init__(status_code=400, error_code=error_code, message=message, details=details)


class UnauthorizedException(AppException):
    def __init__(self, message: str = "Unauthorized", error_code: str = "UNAUTHORIZED", details: Optional[Any] = None, headers: Optional[Dict[str, str]] = None):
        if not headers:
            headers = {"WWW-Authenticate": "Bearer"}
        super().__init__(status_code=401, error_code=error_code, message=message, details=details, headers=headers)


class ForbiddenException(AppException):
    def __init__(self, message: str = "Forbidden", error_code: str = "FORBIDDEN", details: Optional[Any] = None):
        super().__init__(status_code=403, error_code=error_code, message=message, details=details)


class NotFoundException(AppException):
    def __init__(self, message: str = "Not Found", error_code: str = "NOT_FOUND", details: Optional[Any] = None):
        super().__init__(status_code=404, error_code=error_code, message=message, details=details)


class ConflictException(AppException):
    def __init__(self, message: str = "Conflict", error_code: str = "CONFLICT", details: Optional[Any] = None):
        super().__init__(status_code=409, error_code=error_code, message=message, details=details)


class InternalServerException(AppException):
    def __init__(self, message: str = "Internal Server Error", error_code: str = "INTERNAL_SERVER_ERROR", details: Optional[Any] = None):
        super().__init__(status_code=500, error_code=error_code, message=message, details=details)
