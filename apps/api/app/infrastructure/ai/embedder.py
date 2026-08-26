from openai import AsyncOpenAI
from app.core.config import settings
from typing import List
from loguru import logger

class EmbeddingService:
    def __init__(self):
        self.client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
        self.model = "text-embedding-3-small" # Outputs 1536 dimensions
        
    async def embed_texts(self, texts: List[str]) -> List[List[float]]:
        """
        Generates embeddings for a list of texts.
        """
        if not texts:
            return []
            
        if not settings.OPENAI_API_KEY:
            logger.warning("OPENAI_API_KEY is not set. Using dummy embeddings.")
            # Return dummy 1536-dimensional embeddings for local testing
            return [[0.0] * 1536 for _ in texts]
            
        try:
            logger.info(f"Embedding {len(texts)} chunks using {self.model}")
            response = await self.client.embeddings.create(
                input=texts,
                model=self.model
            )
            return [data.embedding for data in response.data]
        except Exception as e:
            logger.error(f"Failed to embed texts: {e}")
            raise
