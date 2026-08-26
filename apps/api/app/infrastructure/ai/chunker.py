from langchain_text_splitters import RecursiveCharacterTextSplitter
from loguru import logger
from typing import List

class DocumentChunker:
    def __init__(self, chunk_size: int = 1000, chunk_overlap: int = 200):
        self.splitter = RecursiveCharacterTextSplitter(
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap,
            separators=["\n\n", "\n", " ", ""]
        )
        
    def chunk_text(self, text: str) -> List[str]:
        """
        Splits text into chunks of specified size and overlap.
        """
        if not text.strip():
            return []
            
        chunks = self.splitter.split_text(text)
        logger.info(f"Split document into {len(chunks)} chunks")
        return chunks
