import uuid
from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.exceptions import BadRequestException, NotFoundException

from app.domains.documents.services.document import DocumentService
from app.domains.documents.repositories.postgres import DocumentRepository
from app.domains.auth.api.dependencies import get_current_user
from app.infrastructure.db.models.user import User
from app.infrastructure.db.session import get_db_session

router = APIRouter(prefix="/documents", tags=["documents"])

def get_document_service(session: AsyncSession = Depends(get_db_session)) -> DocumentService:
    repo = DocumentRepository(session)
    return DocumentService(repo)

@router.get("/")
async def get_documents(
    current_user: User = Depends(get_current_user),
    service: DocumentService = Depends(get_document_service)
):
    return await service.get_documents(current_user.id)

@router.post("/upload")
async def upload_document(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    service: DocumentService = Depends(get_document_service),
    session: AsyncSession = Depends(get_db_session)
):
    # In FastAPI, file.size is accessible asynchronously if read, or from headers
    if not file.filename:
        raise BadRequestException(message="Filename missing")
        
    doc = await service.upload_document(current_user.id, file)
    await session.commit()
    return doc

@router.get("/{document_id}")
async def get_document(
    document_id: uuid.UUID,
    current_user: User = Depends(get_current_user),
    service: DocumentService = Depends(get_document_service)
):
    return await service.get_document(document_id, current_user.id)

@router.get("/{document_id}/download")
async def get_document_download_url(
    document_id: uuid.UUID,
    current_user: User = Depends(get_current_user),
    service: DocumentService = Depends(get_document_service)
):
    url = await service.get_download_url(document_id, current_user.id)
    return {"url": url}

@router.delete("/{document_id}")
async def delete_document(
    document_id: uuid.UUID,
    current_user: User = Depends(get_current_user),
    service: DocumentService = Depends(get_document_service),
    session: AsyncSession = Depends(get_db_session)
):
    success = await service.delete_document(document_id, current_user.id)
    if not success:
        raise NotFoundException(message="Document not found")
    await session.commit()
    return {"message": "Document deleted successfully"}
