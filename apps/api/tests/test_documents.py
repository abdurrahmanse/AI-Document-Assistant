import pytest
from fastapi.testclient import TestClient
from app.main import app

def test_upload_document_requires_auth():
    with TestClient(app) as client:
        response = client.post("/api/v1/documents/upload", files={"file": ("test.pdf", b"dummy")})
        assert response.status_code == 401

def test_search_requires_auth():
    with TestClient(app) as client:
        response = client.post("/api/v1/search", json={"query": "test"})
        assert response.status_code == 401

