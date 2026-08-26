from fastapi import APIRouter

from app.domains.admin.api.router import router as admin_router
from app.domains.auth.api.router import router as auth_router
from app.domains.conversations.api.router import router as conversations_router
from app.domains.documents.api.router import router as documents_router
from app.domains.search.api.router import router as search_router

api_router = APIRouter()

api_router.include_router(auth_router)
api_router.include_router(admin_router, prefix="/admin", tags=["admin"])
api_router.include_router(conversations_router, prefix="/conversations", tags=["conversations"])
api_router.include_router(documents_router, prefix="/documents", tags=["documents"])
api_router.include_router(search_router, prefix="/search", tags=["search"])
