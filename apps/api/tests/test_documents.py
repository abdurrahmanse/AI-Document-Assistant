import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app

@pytest.mark.asyncio
async def test_upload_document_requires_auth():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.post("/api/v1/documents", files={"file": ("test.pdf", b"dummy")})
    assert response.status_code == 401

@pytest.mark.asyncio
async def test_search_requires_auth():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/api/v1/documents/search?query=test")
    assert response.status_code == 401
