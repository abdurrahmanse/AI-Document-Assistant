import uuid
from datetime import UTC, datetime

from fastapi import UploadFile

# Mock Data
documents = [
    {
        "id": "d1",
        "title": "Q3_Financial_Report.pdf",
        "type": "application/pdf",
        "size": "2.4 MB",
        "uploadedAt": datetime.now(UTC).isoformat(),
        "status": "ready",
    }
]

class DocumentService:
    async def get_documents(self) -> list:
        return documents
        
    async def upload_document(self, file: UploadFile) -> dict:
        new_doc = {
            "id": f"d-{uuid.uuid4()}",
            "title": file.filename,
            "type": file.content_type,
            "size": "1.0 MB", # Hardcoded for mock
            "uploadedAt": datetime.now(UTC).isoformat(),
            "status": "processing",
        }
        documents.append(new_doc)
        return new_doc
