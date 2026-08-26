import uuid
from typing import List, Optional

from app.infrastructure.db.models.document import Document, DocumentStatus
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

class DocumentRepository:
    def __init__(self, session: AsyncSession):
        self.session = session
        
    async def get_by_id(self, document_id: uuid.UUID) -> Optional[Document]:
        result = await self.session.execute(
            select(Document).where(Document.id == document_id)
        )
        return result.scalars().first()
        
    async def get_by_user_id(self, user_id: uuid.UUID) -> List[Document]:
        result = await self.session.execute(
            select(Document)
            .where(Document.user_id == user_id)
            .order_by(Document.created_at.desc())
        )
        return list(result.scalars().all())
        
    async def create(self, document: Document) -> Document:
        self.session.add(document)
        await self.session.flush()
        await self.session.refresh(document)
        return document
        
    async def update_status(self, document_id: uuid.UUID, status: DocumentStatus) -> Optional[Document]:
        document = await self.get_by_id(document_id)
        if document:
            document.status = status
            await self.session.flush()
        return document
        
    async def delete(self, document_id: uuid.UUID) -> bool:
        document = await self.get_by_id(document_id)
        if document:
            await self.session.delete(document)
            await self.session.flush()
            return True
        return False

class DocumentChunkRepository:
    def __init__(self, session: AsyncSession):
        self.session = session
        
    async def search_similar(
        self, 
        query_embedding: List[float], 
        user_id: uuid.UUID,
        limit: int = 5,
        document_ids: Optional[List[uuid.UUID]] = None
    ) -> List[tuple[DocumentChunk, float]]:
        """
        Performs vector similarity search. Returns chunks and their distances.
        Ensures strict tenant isolation by joining with Document and filtering by user_id.
        """
        from app.infrastructure.db.models.document_chunk import DocumentChunk
        
        # Use cosine distance (<=> operator in pgvector)
        stmt = (
            select(DocumentChunk, DocumentChunk.embedding.cosine_distance(query_embedding).label("distance"))
            .join(DocumentChunk.document)
            .where(Document.user_id == user_id)
        )
        
        if document_ids:
            stmt = stmt.where(DocumentChunk.document_id.in_(document_ids))
            
        stmt = stmt.order_by("distance").limit(limit)
        
        result = await self.session.execute(stmt)
        return [(row.DocumentChunk, row.distance) for row in result.all()]
