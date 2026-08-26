import io
from pypdf import PdfReader
from docx import Document
from loguru import logger

class DocumentParser:
    @staticmethod
    def parse(file_content: bytes, mime_type: str) -> str:
        """
        Parses document content into raw text.
        """
        logger.info(f"Parsing document with mime type: {mime_type}")
        
        try:
            if mime_type == "application/pdf":
                reader = PdfReader(io.BytesIO(file_content))
                text = "\n".join([page.extract_text() for page in reader.pages if page.extract_text()])
                return text
                
            elif mime_type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                doc = Document(io.BytesIO(file_content))
                text = "\n".join([paragraph.text for paragraph in doc.paragraphs])
                return text
                
            elif mime_type.startswith("text/"):
                return file_content.decode("utf-8")
                
            else:
                logger.warning(f"Unsupported mime type: {mime_type}. Attempting utf-8 decode.")
                return file_content.decode("utf-8", errors="ignore")
                
        except Exception as e:
            logger.error(f"Failed to parse document: {e}")
            raise ValueError(f"Failed to parse document: {e}")
