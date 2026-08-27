import pytest
from fastapi.testclient import TestClient
from app.main import app

def test_auth_register_validation():
    with TestClient(app) as client:
        response = client.post("/api/v1/auth/register", json={
            "email": "not-an-email",
            "password": "pass"
        })
        assert response.status_code == 422

