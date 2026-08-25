# System Architecture

This document defines the high-level topology and architectural decisions for the AI Document Intelligence platform. The architecture is designed to handle intensive AI ingestion tasks without blocking the main event loop, while maintaining a strict boundary between frontend presentation and backend business logic.

## 1. High-Level Topology

The system uses a decoupled client-server architecture:
- **Client Layer:** Next.js Monorepo. Handles all user interface, edge routing, SSR, and client-side state.
- **Core API Layer:** FastAPI. Handles authentication, document management, AI orchestration, and database persistence.
- **Data Layer:** PostgreSQL (relational + vectors), Redis (caching/rate-limiting), and S3/R2 (object storage).

*Why this stack?* Next.js provides the best Developer Experience (DX) and SEO/performance for React. FastAPI provides extreme performance for Python (native async/await), which is essential since all AI ecosystem libraries (OpenAI, LangChain, LlamaIndex) are primarily Python-based.

## 2. Monorepo Structure (Turborepo + FSD)

We use Turborepo to manage multiple applications and shared packages in a single Git repository. Feature-Sliced Design (FSD) principles are applied to the Next.js apps.

### Applications (`apps/`)
- **`apps/web`:** Public marketing website (SEO optimized, static generation).
- **`apps/app`:** Authenticated SaaS application (Dashboards, Chat Interface).
- **`apps/admin`:** Internal back-office moderation and system health panel.
- **`apps/api`:** The Python FastAPI backend.

### Shared Packages (`packages/`)
- **`packages/@workspace/ui`:** Shared UI components built with shadcn/ui and Radix primitives. Ensures visual consistency across Web, App, and Admin.
- **`packages/@workspace/data`:** Shared data hooks and state management (TanStack Query, Zustand).
- **`packages/@workspace/types`:** Shared TypeScript schema definitions generated from the backend OpenAPI spec.
- **`packages/@workspace/auth`:** Shared authentication logic and session management.
- **`packages/@workspace/observability`:** Shared monitoring clients (PostHog, Sentry).
- **`packages/@workspace/email`:** Shared email client (Brevo SDK).

## 3. Backend Architecture (FastAPI)

The backend strictly follows a layered architecture to separate concerns.

- **Routers (`api/v1/`):** HTTP endpoints. Their only job is to receive HTTP requests, enforce Auth, call a Service, and return an HTTP response. *No business logic allowed.*
- **Services (`services/`):** Core business logic (e.g., parsing documents, orchestrating RAG). They do not know about HTTP requests or raw SQL.
- **Data Access (`crud/`):** Persistence layer. Encapsulates all SQLAlchemy ORM queries.
- **Schemas (`schemas/`):** Pydantic validation models.
- **Models (`models/`):** SQLAlchemy database models defining the actual tables.

## 4. Asynchronous Processing (FastAPI BackgroundTasks)

Document processing (parsing PDFs, chunking text, generating embeddings via OpenAI) is computationally expensive and slow (can take 5–30 seconds).

**Strict Rule:** Intensive tasks must *never* run synchronously inside a router function, as it will block the entire Python event loop and cause the API to stall for other users.

**Implementation:** We utilize FastAPI's native `BackgroundTasks`. When a user uploads a document:
1. The router immediately saves the document metadata to the database with a status of `PROCESSING`.
2. The router schedules the ingestion service using `background_tasks.add_task(process_document, doc_id)`.
3. The router immediately returns a `202 Accepted` to the client.
4. The background task completes processing and updates the status to `READY`.

## 5. Storage Architecture

Data is heavily segmented based on its lifecycle and format:
- **PostgreSQL:** Primary source of truth (users, documents, conversations).
- **pgvector:** PostgreSQL extension for storing and performing hybrid searches on AI embeddings.
- **Redis:** High-speed in-memory store for rate limiting (SlowAPI), token blacklisting, and caching.
- **Object Storage (S3/R2):** Secure storage for raw files (PDFs, DOCX, TXT). DB stores URLs/keys only.