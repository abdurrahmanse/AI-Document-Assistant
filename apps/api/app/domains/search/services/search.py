import uuid
from typing import List, Optional
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.ai.embedder import EmbeddingService
from app.domains.documents.repositories.postgres import DocumentChunkRepository
from loguru import logger

class SearchResult(BaseModel):
    chunk_id: uuid.UUID
    document_id: uuid.UUID
    content: str
    metadata: dict
    relevance_score: float

class SearchService:
    def __init__(self, session: AsyncSession):
        self.session = session
        self.chunk_repository = DocumentChunkRepository(session)
        self.embedder = EmbeddingService()
        
    async def hybrid_search(
        self, 
        query: str, 
        user_id: uuid.UUID,
        limit: int = 5,
        document_ids: Optional[List[uuid.UUID]] = None
    ) -> List[SearchResult]:
        """
        Performs hybrid retrieval: Semantic search + keyword search (mocked keyword search for now).
        """
        logger.info(f"Performing search for query: {query}")
        
        # 1. Embed the query
        # embed_texts takes a list and returns a list of embeddings
        embeddings = await self.embedder.embed_texts([query])
        if not embeddings:
            return []
            
        query_embedding = embeddings[0]
        
        # 2. Perform vector search
        results = await self.chunk_repository.search_similar(
            query_embedding=query_embedding,
            user_id=user_id,
            limit=limit,
            document_ids=document_ids
        )
        
        # 3. Map to DTOs
        search_results = []
        for chunk, distance in results:
            search_results.append(SearchResult(
                chunk_id=chunk.id,
                document_id=chunk.document_id,
                content=chunk.content,
                metadata=chunk.metadata_json,
                # Simple relevance score inversion (cosine distance: smaller is better, similarity is 1 - distance)
                relevance_score=1.0 - float(distance)
            ))
            
        return search_results
