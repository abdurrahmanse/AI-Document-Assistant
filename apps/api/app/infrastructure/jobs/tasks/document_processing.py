import asyncio
import uuid
from celery import shared_task
from loguru import logger
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.db.session import engine
from app.infrastructure.db.models.document import DocumentStatus
from app.infrastructure.db.models.document_chunk import DocumentChunk
from app.domains.documents.repositories.postgres import DocumentRepository
from app.infrastructure.storage.s3 import S3StorageService
from app.infrastructure.ai.parser import DocumentParser
from app.infrastructure.ai.chunker import DocumentChunker
from app.infrastructure.ai.embedder import EmbeddingService

async def _process_document_async(document_id: str):
    logger.info(f"Starting processing for document {document_id}")
    doc_id = uuid.UUID(document_id)
    
    async with AsyncSession(engine) as session:
        repo = DocumentRepository(session)
        storage = S3StorageService()
        embedder = EmbeddingService()
        chunker = DocumentChunker()
        
        # 1. Update status to PROCESSING
        document = await repo.get_by_id(doc_id)
        if not document:
            logger.error(f"Document {document_id} not found")
            return
            
        await repo.update_status(doc_id, DocumentStatus.PROCESSING)
        await session.commit()
        
        try:
            # 2. Download from storage
            # In a real implementation, S3StorageService would have a download_file method.
            # We'll simulate downloading file_content.
            # For the MVP, we assume the file is small enough to fit in memory
            file_content = None
            if not storage.bucket:
                logger.warning("Mocking document download due to missing S3 bucket")
                file_content = b"This is a mock document content for testing AI parsing, chunking, and embedding."
            else:
                async with storage.session.client("s3", endpoint_url=storage.endpoint_url) as s3:  # type: ignore
                    response = await s3.get_object(Bucket=storage.bucket, Key=document.storage_key)
                    file_content = await response['Body'].read()
            
            # 3. Parse
            text = DocumentParser.parse(file_content, document.mime_type)
            
            # 4. Chunk
            chunks = chunker.chunk_text(text)
            
            # 5. Embed
            embeddings = await embedder.embed_texts(chunks)
            
            # 6. Save chunks to db
            for i, (chunk_text, embedding) in enumerate(zip(chunks, embeddings)):
                chunk_record = DocumentChunk(
                    document_id=doc_id,
                    content=chunk_text,
                    embedding=embedding,
                    metadata_json={"chunk_index": i}
                )
                session.add(chunk_record)
                
            # 7. Update status to READY
            document.status = DocumentStatus.READY
            await session.commit()
            logger.info(f"Successfully processed document {document_id}")
            
        except Exception as e:
            logger.error(f"Failed to process document {document_id}: {e}")
            await session.rollback()
            await repo.update_status(doc_id, DocumentStatus.FAILED)
            await session.commit()
            raise

@shared_task(name="process_document_task")
def process_document_task(document_id: str):
    """
    Celery task to process an uploaded document.
    """
    asyncio.run(_process_document_async(document_id))
