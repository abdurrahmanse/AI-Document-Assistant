from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional
import uuid
from pydantic import BaseModel

from app.infrastructure.db.session import get_db
from app.domains.auth.dependencies import get_current_user
from app.domains.search.services.search import SearchService, SearchResult

router = APIRouter(prefix="/search", tags=["search"])

class SearchRequest(BaseModel):
    query: str
    document_ids: Optional[List[uuid.UUID]] = None
    limit: int = Query(default=5, ge=1, le=50)

@router.post("", response_model=List[SearchResult])
async def search_documents(
    request: SearchRequest,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    Search across uploaded documents using hybrid vector retrieval.
    """
    search_service = SearchService(db)
    
    try:
        results = await search_service.hybrid_search(
            query=request.query,
            user_id=current_user.id,
            limit=request.limit,
            document_ids=request.document_ids
        )
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
