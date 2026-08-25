# API Design & Standards

This document outlines the strict API contracts and design patterns enforced across the FastAPI backend. Predictability is the primary goal.

## 1. Core Principles

- **RESTful Architecture:** We utilize standard HTTP verbs mapping directly to CRUD operations:
  - `GET` /documents -> List documents
  - `POST` /documents -> Create/Upload document
  - `GET` /documents/{id} -> Retrieve document
  - `DELETE` /documents/{id} -> Delete document
- **Strict Validation:** Every endpoint MUST declare a Pydantic model for its Request Body and Response Body. FastAPI automatically validates incoming data and strips undefined fields from outgoing data.
- **Pagination:** All list-returning endpoints must accept `skip` (default 0) and `limit` (default 50, max 100) query parameters.

## 2. Standardized Error Handling

To ensure the frontend can predictably parse errors, the backend must *never* return plain text errors or inconsistent JSON.

**The Error Contract:**
```json
{
  "error": {
    "code": "DOCUMENT_NOT_FOUND",
    "message": "The requested document does not exist or you do not have permission to view it.",
    "details": null
  }
}
```

**Status Codes:**
- `200 OK`: Successful synchronous operation.
- `201 Created`: Resource successfully inserted into the DB.
- `202 Accepted`: Request accepted, processing asynchronously (e.g., File Upload).
- `400 Bad Request`: Client error (e.g., File too large).
- `401 Unauthorized`: Missing or invalid JWT.
- `403 Forbidden`: Permission denied (Tenant isolation rule triggered).
- `404 Not Found`: Resource missing.
- `422 Unprocessable Entity`: FastAPI/Pydantic validation failure (e.g., missing a required JSON field).
- `429 Too Many Requests`: Rate limit exceeded.
- `500 Internal Server Error`: Backend crash.

## 3. Rate Limiting (SlowAPI)

To protect the infrastructure from brute force attacks and to control OpenAI API costs, rate limiting is strictly enforced at the router layer using SlowAPI.

- **Strategy:** Limits are applied dynamically based on the User's ID (if authenticated) or IP address (if anonymous).
- **Example Limits:**
  - `/api/v1/auth/login`: 5 requests per minute.
  - `/api/v1/chat`: 20 requests per minute.
  - `/api/v1/documents`: 100 requests per minute.

## 4. OpenAPI & Client Generation

Because we enforce Pydantic heavily, FastAPI automatically generates an OpenAPI 3.0 specification.
- **Swagger UI:** Accessible locally at `http://localhost:8000/docs`. This is the primary playground for testing the API.
- **Frontend Sync:** The frontend package `@workspace/types` should use tools like `openapi-typescript` to generate strict TS interfaces directly from the Swagger JSON, ensuring that if the backend model changes, the frontend build fails.

## 5. Module Layout

The `/api/v1/` router is split into isolated feature domains:
- **`/auth`:** Registration, login, token refresh, password resets.
- **`/users`:** User profile management (GET /me).
- **`/documents`:** Document upload, rename, delete, list.
- **`/conversations`:** Chat session management.
- **`/chat`:** Server-Sent Events (SSE) streaming for RAG chat.
- **`/admin`:** Global platform administration (RBAC protected, fetching system health).
