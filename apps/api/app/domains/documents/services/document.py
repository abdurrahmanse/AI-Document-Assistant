import uuid
from typing import List, Optional

from fastapi import UploadFile, HTTPException
from app.infrastructure.db.models.document import Document, DocumentStatus
from app.domains.documents.repositories.postgres import DocumentRepository
from app.infrastructure.storage.s3 import S3StorageService
from loguru import logger

class DocumentService:
    def __init__(self, repository: DocumentRepository):
        self.repository = repository
        self.storage = S3StorageService()
        
    async def get_documents(self, user_id: uuid.UUID) -> List[Document]:
        return await self.repository.get_by_user_id(user_id)
        
    async def get_document(self, document_id: uuid.UUID, user_id: uuid.UUID) -> Document:
        document = await self.repository.get_by_id(document_id)
        if not document or document.user_id != user_id:
            raise HTTPException(status_code=404, detail="Document not found")
        return document
        
    async def upload_document(self, user_id: uuid.UUID, file: UploadFile) -> Document:
        logger.info(f"Uploading document {file.filename} for user {user_id}")
        
        # 1. Upload to storage
        storage_key = await self.storage.upload_file(file)
        
        # 2. Estimate size
        await file.seek(0, 2)  # type: ignore
        size_bytes = file.size or 0
        await file.seek(0)
        
        # 3. Create database record
        doc = Document(
            user_id=user_id,
            title=file.filename,
            filename=file.filename,
            mime_type=file.content_type or "application/octet-stream",
            storage_key=storage_key,
            size_bytes=size_bytes,
            status=DocumentStatus.UPLOADING
        )
        
        created_doc = await self.repository.create(doc)
        
        # Trigger background processing task
        try:
            from app.infrastructure.jobs.tasks.document_processing import process_document_task
            process_document_task.delay(str(created_doc.id))  # type: ignore
            # Status remains UPLOADING until the task picks it up, or we can set it to QUEUED
            await self.repository.update_status(created_doc.id, DocumentStatus.QUEUED)
        except Exception as e:
            logger.error(f"Failed to queue document processing task: {e}")
            # Even if queuing fails, we return the document, but it will be stuck in UPLOADING
            
        return created_doc
        
    async def get_download_url(self, document_id: uuid.UUID, user_id: uuid.UUID) -> str:
        document = await self.get_document(document_id, user_id)
        return await self.storage.get_file_url(document.storage_key)
        
    async def delete_document(self, document_id: uuid.UUID, user_id: uuid.UUID) -> bool:
        document = await self.get_document(document_id, user_id)
        
        # 1. Delete from storage
        await self.storage.delete_file(document.storage_key)
        
        # 2. Delete from database
        return await self.repository.delete(document_id)
