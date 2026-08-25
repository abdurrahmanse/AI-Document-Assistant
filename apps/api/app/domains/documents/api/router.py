from app.domains.documents.services.document import DocumentService
from fastapi import APIRouter, Depends, File, UploadFile

router = APIRouter()

def get_document_service() -> DocumentService:
    return DocumentService()

@router.get("/")
async def get_documents(service: DocumentService = Depends(get_document_service)):
    return await service.get_documents()

@router.post("/upload")
async def upload_document(file: UploadFile = File(...), service: DocumentService = Depends(get_document_service)):
    return await service.upload_document(file)
