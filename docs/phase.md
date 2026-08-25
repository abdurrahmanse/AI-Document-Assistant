# Project Implementation Phases (Detailed Tracker)

This document is the master tracker for the AI Document Intelligence platform. It breaks down the entire project into 20 granular phases. Each phase is subdivided into specific, actionable steps (prompts) with clear verification criteria.

---

## [x] Phase 0 → Scaffold
**Goal:** Initialize the Turborepo monorepo and define package boundaries for a scalable, modular architecture.
**Stack:** Turborepo, Next.js, FastAPI, pnpm

- [x] **Step 0.1: Monorepo Initialization**
  - [x] **Action:** Scaffold the root Turborepo structure using `pnpm`.
  - [x] **Details:** Create three Next.js applications (`apps/web` for marketing, `apps/app` for the SaaS product, `apps/admin` for the back-office). Create a Python environment in `apps/api` for the FastAPI backend.
  - [x] **Verification:** Running `pnpm turbo run build` successfully builds all web apps.
- [x] **Step 0.2: Package Boundaries (FSD)**
  - [x] **Action:** Create shared local packages in the `packages/` directory.
  - [x] **Details:** Implement `@workspace/ui` (shadcn), `@workspace/data` (state management), and `@workspace/types` (TypeScript schemas).
  - [x] **Verification:** The Next.js apps can successfully import from `@workspace/ui`.

---

## [x] Phase 1 → Workspace + Tooling
**Goal:** Establish strict code quality, linting, formatting, and pre-commit hooks to ensure a uniform codebase.
**Stack:** ESLint, Prettier, TypeScript, Husky, lint-staged

- [x] **Step 1.1: Linting & Formatting Standards**
  - [x] **Action:** Configure root-level `eslint.config.js` and `.prettierrc`.
  - [x] **Details:** Enforce strict TypeScript rules, unused import removal, and consistent code style across all `apps/` and `packages/`.
  - [x] **Verification:** Running `pnpm lint` and `pnpm format` passes without errors on the entire monorepo.

---

## [x] Phase 2 → Backend Foundation
**Goal:** Establish the core FastAPI server, lifecycle events, configuration validation, and API routing structure.
**Stack:** FastAPI, Uvicorn, Pydantic V2

- [ ] **Step 2.1: Environment Settings Management**
  - [ ] **Action:** Create `apps/api/core/config.py` using `pydantic-settings`.
  - [ ] **Details:** Define a `Settings` class mapped to `.env`. Must include strict validation for `DATABASE_URL`, `OPENAI_API_KEY`, and `JWT_SECRET`.
  - [ ] **Verification:** Application strictly throws a Pydantic `ValidationError` and crashes on boot if a critical key is missing.
- [ ] **Step 2.2: Server Lifecycle & CORS**
  - [ ] **Action:** Create `apps/api/main.py`.
  - [ ] **Details:** Initialize the FastAPI app. Configure `CORSMiddleware` to strictly whitelist the URLs of the Next.js frontend applications defined in the environment settings.
  - [ ] **Verification:** A preflight `OPTIONS` request from a non-whitelisted origin is rejected.
- [ ] **Step 2.3: API Router Abstraction**
  - [ ] **Action:** Create `apps/api/api/v1/router.py`.
  - [ ] **Details:** Scaffold placeholder APIRouters for `/auth`, `/users`, `/documents`, and `/chat`. Include these into the main FastAPI application.
  - [ ] **Verification:** Navigating to `http://localhost:8000/docs` displays the Swagger UI with the registered tags.

---

## [ ] Phase 3 → Database & ORM
**Goal:** Design the relational database schema, integrate pgvector for AI embeddings, and set up async ORM migrations.
**Stack:** PostgreSQL, pgvector, SQLAlchemy 2.0 (asyncpg), Alembic

- [ ] **Step 3.1: SQLAlchemy Async Engine**
  - [ ] **Action:** Create `apps/api/core/database.py`.
  - [ ] **Details:** Configure `create_async_engine` and an `async_sessionmaker`. Implement a dependency injection function `get_db()` to yield database sessions to FastAPI routes.
  - [ ] **Verification:** An endpoint can successfully inject `get_db` and execute a `SELECT 1` query.
- [ ] **Step 3.2: Schema Design (Models)**
  - [ ] **Action:** Create models in `apps/api/models/`.
  - [ ] **Details:** 
    - `User`: id, email, hashed_password, role, deleted_at.
    - `Document`: id, user_id (FK), filename, s3_key, status (enum).
    - `DocumentChunk`: id, document_id (FK), text, embedding (`VECTOR(1536)`).
  - [ ] **Verification:** Code runs without SQLAlchemy mapping errors.
- [ ] **Step 3.3: Alembic Migrations**
  - [ ] **Action:** Initialize Alembic (`alembic init -t async alembic`).
  - [ ] **Details:** Configure `env.py` to import the declarative base and models. Generate the first migration script capturing the models.
  - [ ] **Verification:** Running `alembic upgrade head` successfully creates the tables and the `vector` extension in the PostgreSQL database.

---

## [ ] Phase 4 → Authentication & Authorization
**Goal:** Implement secure, stateless JWT authentication with strict password hashing and refresh token rotation.
**Stack:** JWT, Argon2id, Passlib

- [ ] **Step 4.1: Password Hashing Layer**
  - [ ] **Action:** Create `apps/api/core/security.py`.
  - [ ] **Details:** Implement `verify_password` and `get_password_hash` using `passlib` configured strictly for `argon2`.
  - [ ] **Verification:** Unit tests confirm that hashing the same password twice yields different salts but verifies successfully.
- [ ] **Step 4.2: JWT Issuance & Verification**
  - [ ] **Action:** Implement token generation in `core/security.py`.
  - [ ] **Details:** Create functions to encode/decode Access Tokens (short-lived) and Refresh Tokens (long-lived). Include the user's ID and Role in the payload.
  - [ ] **Verification:** Tampering with a generated JWT signature causes the decode function to raise an exception.
- [ ] **Step 4.3: Auth Endpoints & Middleware**
  - [ ] **Action:** Build `/api/v1/auth/register`, `/login`, and `/refresh`.
  - [ ] **Details:** `/login` must return the Access Token in the JSON body and set the Refresh Token as an `HttpOnly`, `Secure`, `SameSite=Lax` cookie. Implement `get_current_user` dependency for protected routes.
  - [ ] **Verification:** Calling a protected route without the `Authorization: Bearer <token>` header returns a `401 Unauthorized`.

---

## [ ] Phase 5 → API Architecture & Standards
**Goal:** Enforce strict Pydantic data contracts, standard error responses, and the Repository pattern for business logic.
**Stack:** Pydantic V2, FastAPI Exception Handlers

- [ ] **Step 5.1: Pydantic Request/Response Schemas**
  - [ ] **Action:** Create schemas in `apps/api/schemas/`.
  - [ ] **Details:** Define strict models for all endpoints (e.g., `UserCreate`, `UserResponse`, `DocumentResponse`). Ensure all response models use `model_config = ConfigDict(from_attributes=True)` to parse SQLAlchemy objects.
  - [ ] **Verification:** FastAPI automatically drops excess JSON payload fields not defined in the schema.
- [ ] **Step 5.2: Global Exception Handling**
  - [ ] **Action:** Implement exception handlers in `main.py`.
  - [ ] **Details:** Catch custom `DomainException`s and unhandled exceptions, wrapping them in a standard JSON format: `{ "error": { "code": "...", "message": "..." } }`.
  - [ ] **Verification:** Triggering a 404 or 500 returns the structured JSON error instead of the default FastAPI text format.

---

## [ ] Phase 6 → Frontend Data Layer
**Goal:** Connect the Next.js frontend to the backend using type-safe data fetching and global state management.
**Stack:** TanStack Query (React Query), Zustand, Axios

- [ ] **Step 6.1: Axios Client & Interceptors**
  - [ ] **Action:** Create a configured Axios instance in `@workspace/data`.
  - [ ] **Details:** Automatically attach the Access Token to every request. Implement a response interceptor to silently catch `401` errors, call `/api/v1/auth/refresh`, and retry the original request.
  - [ ] **Verification:** When an access token expires, the client automatically acquires a new one and seamlessly completes the user's action.
- [ ] **Step 6.2: Auth State (Zustand)**
  - [ ] **Action:** Create a `useAuthStore` in `@workspace/data`.
  - [ ] **Details:** Store the current user's profile and authentication status (`isAuthenticated`, `isLoading`).
  - [ ] **Verification:** Components can reactively render UI (e.g., hiding login buttons) based on the Zustand store state.

---

## [ ] Phase 7 → User Features (Frontend)
**Goal:** Build the core user-facing SaaS application, focusing on document upload and the chat interface.
**Stack:** Next.js (App Router), Tailwind CSS, shadcn/ui, React Hook Form, Zod

- [ ] **Step 7.1: Document Management UI**
  - [ ] **Action:** Build the dashboard page (`apps/app/app/dashboard/page.tsx`).
  - [ ] **Details:** Implement a drag-and-drop file uploader using `react-dropzone`. Fetch and display a list of uploaded documents using TanStack Query.
  - [ ] **Verification:** Uploading a PDF successfully triggers the backend endpoint and optimistically updates the UI list.
- [ ] **Step 7.2: AI Chat Interface**
  - [ ] **Action:** Build the document chat view.
  - [ ] **Details:** Create a chat window that handles streaming text from the backend. Render markdown responses and display clickable citation badges next to factual claims.
  - [ ] **Verification:** Sending a message streams the response token-by-token into the UI without freezing the browser.

---

## [ ] Phase 8 → Admin & Moderation
**Goal:** Create a secure, internal back-office for managing the platform, users, and system health.
**Stack:** Next.js, TanStack Table

- [ ] **Step 8.1: Admin Authentication Guard**
  - [ ] **Action:** Implement an admin layout guard in `apps/admin/`.
  - [ ] **Details:** Check the user's role from the JWT/API. If they are not `ROLE_ADMIN`, immediately redirect them to a 403 Forbidden page.
  - [ ] **Verification:** Standard users cannot access any route under `apps/admin`.
- [ ] **Step 8.2: User Management Dashboard**
  - [ ] **Action:** Build a data table displaying all registered users.
  - [ ] **Details:** Include columns for email, registration date, and document count. Add actions to suspend or delete users.
  - [ ] **Verification:** Clicking "Suspend" instantly invalidates the user's session.

---

## [ ] Phase 9 → AI & RAG Pipeline
**Goal:** Build the asynchronous document ingestion engine and the hybrid search + LLM generation system.
**Stack:** OpenAI SDK, pgvector, tiktoken, FastAPI BackgroundTasks

- [ ] **Step 9.1: Document Parsing & Chunking**
  - [ ] **Action:** Implement `services/ingestion.py`.
  - [ ] **Details:** Create a function that takes a raw PDF bytes, extracts the text via `pypdf`, and chunks it (e.g., 500 tokens with 50 token overlap). Trigger this function via FastAPI `BackgroundTasks` immediately after S3 upload.
  - [ ] **Verification:** Uploading a PDF instantly returns 202 Accepted, and a few seconds later the DB is populated with chunks.
- [ ] **Step 9.2: Embeddings & Vector Storage**
  - [ ] **Action:** Integrate OpenAI's `text-embedding-3-small` API.
  - [ ] **Details:** For every chunk, generate an embedding vector. Save the chunk text, metadata, and the 1536-dimensional vector to the `document_chunks` table.
  - [ ] **Verification:** Queries against `document_chunks` reveal populated `VECTOR` columns.
- [ ] **Step 9.3: Retrieval Augmented Generation (Chat)**
  - [ ] **Action:** Implement the `/api/v1/chat` SSE endpoint.
  - [ ] **Details:** 
    1. Embed the user's query. 
    2. Perform a cosine similarity search (`<=>`) in pgvector against chunks belonging ONLY to that user.
    3. Inject the top 5 chunks into the LLM system prompt. 
    4. Stream the LLM response via Server-Sent Events (SSE).
  - [ ] **Verification:** The AI accurately answers questions based *only* on the uploaded document, rejecting out-of-context queries.

---

## [ ] Phase 10 → Testing
**Goal:** Ensure absolute reliability of the backend domain logic and critical frontend user flows.
**Stack:** Pytest, HTTPX, Vitest, Playwright

- [ ] **Step 10.1: Backend Integration Tests**
  - [ ] **Action:** Write tests in `apps/api/tests/`.
  - [ ] **Details:** Use `pytest` and `httpx.AsyncClient` to test the API. Crucially, write tests verifying Tenant Isolation (User A cannot fetch User B's documents).
  - [ ] **Verification:** `pytest` passes with 100% coverage on authorization and database queries.
- [ ] **Step 10.2: Frontend E2E Tests**
  - [ ] **Action:** Configure Playwright in the `apps/app` directory.
  - [ ] **Details:** Write a test that simulates a user logging in, uploading a file, and sending a chat message.
  - [ ] **Verification:** `pnpm test:e2e` successfully executes the browser automation without errors.

---

## [ ] Phase 11 → Security Hardening
**Goal:** Mitigate application-layer attacks, enforce rate limits, and secure object storage access.
**Stack:** SlowAPI, Redis, AWS S3/Cloudflare R2 Presigned URLs

- [ ] **Step 11.1: Rate Limiting**
  - [ ] **Action:** Implement `slowapi` on FastAPI routes.
  - [ ] **Details:** Enforce strict limits (e.g., 5 requests/minute) on `/api/v1/auth/login` and `/api/v1/chat` to prevent brute force and runaway LLM costs. Use Redis as the backing store for distributed environments.
  - [ ] **Verification:** Rapidly hitting the login endpoint triggers a `429 Too Many Requests` response.
- [ ] **Step 11.2: Signed URLs for Storage**
  - [ ] **Action:** Implement secure document retrieval.
  - [ ] **Details:** The frontend must never know the direct S3 bucket URL. The backend generates a short-lived (e.g., 5-minute) signed URL via `boto3` when the user requests to download a file.
  - [ ] **Verification:** The generated S3 URL expires exactly after 5 minutes and returns an XML AccessDenied error.

---

## [ ] Phase 12 → Performance Optimization
**Goal:** Optimize database query latency and reduce the frontend bundle sizes for rapid page loads.
**Stack:** PostgreSQL Indexes, Next.js Bundle Analyzer

- [ ] **Step 12.1: pgvector HNSW Indexing**
  - [ ] **Action:** Create an Alembic migration for indexing.
  - [ ] **Details:** Add an HNSW (Hierarchical Navigable Small World) index to the `embedding` column on the `document_chunks` table for sub-millisecond similarity search at scale.
  - [ ] **Verification:** Running `EXPLAIN ANALYZE` on a vector search shows it utilizing the HNSW index rather than a sequential scan.
- [ ] **Step 12.2: Frontend Lazy Loading**
  - [ ] **Action:** Analyze the Next.js bundle.
  - [ ] **Details:** Use `next/dynamic` to lazy-load heavy components (like PDF renderers or syntax highlighters) only when they enter the viewport.
  - [ ] **Verification:** The initial JavaScript payload size for the dashboard is reduced.

---

## [ ] Phase 13 → Production & Deployment
**Goal:** Establish CI/CD pipelines to automatically test and deploy the monorepo to cloud infrastructure.
**Stack:** GitHub Actions, Vercel, Render/Fly.io

- [ ] **Step 13.1: CI Pipeline (Continuous Integration)**
  - [ ] **Action:** Create `.github/workflows/ci.yml`.
  - [ ] **Details:** Trigger on Pull Requests. Must run `pnpm lint`, `pnpm check-types`, `ruff check`, `mypy`, and `pytest`.
  - [ ] **Verification:** Creating a PR with a type error automatically fails the GitHub Action check, blocking the merge.
- [ ] **Step 13.2: CD Pipeline (Continuous Deployment)**
  - [ ] **Action:** Create `.github/workflows/cd.yml`.
  - [ ] **Details:** Trigger on merge to `main`. Vercel automatically deploys the frontend. GitHub Actions handles deploying the FastAPI backend and running `alembic upgrade head` before booting the new server.
  - [ ] **Verification:** Pushing to `main` results in a live update on the production domains.

---

## [x] Phase 14 → Documentation & Swagger
**Goal:** Provide crystal-clear API documentation for developers and architectural blueprints for the engineering team.
**Stack:** Markdown, FastAPI Swagger

- [x] **Step 14.1: System Architecture**
  - [x] **Action:** Write documentation in the `docs/` folder.
  - [x] **Details:** Document the FSD structure, API standards, Auth paradigms, and Deployment topology.
  - [x] **Verification:** `docs/` contains highly detailed, prompt-engineered markdown files.
- [ ] **Step 14.2: OpenAPI Enhancements**
  - [ ] **Action:** Decorate FastAPI endpoints.
  - [ ] **Details:** Add detailed `summary`, `description`, and `responses` dictionaries to all `@router` decorators so the auto-generated Swagger UI is comprehensive.
  - [ ] **Verification:** `/docs` shows specific error payloads (e.g., 401, 404, 422) for every endpoint.

---

## [x] Phase 15 → Notifications & Extra Features
**Goal:** Integrate third-party communication tools for transactional emails.
**Stack:** Brevo SDK, React Email

- [x] **Step 15.1: Email Infrastructure**
  - [x] **Action:** Create the `@workspace/email` package.
  - [x] **Details:** Integrate the Brevo API. Implement abstract classes for sending transactional emails (Welcome, Password Reset).
  - [x] **Verification:** Triggering a password reset logs/sends a strictly formatted HTML email.

---

## [x] Phase 16 → Observability & Audit 
**Goal:** Gain deep visibility into application errors, user behavior, and security events.
**Stack:** Sentry, PostHog

- [x] **Step 16.1: Frontend & Backend Tracking**
  - [x] **Action:** Configure `@workspace/observability`.
  - [x] **Details:** Initialize PostHog for user analytics on the frontend. Initialize Sentry for exception tracking on both the Next.js apps and the FastAPI backend.
  - [x] **Verification:** A forced crash in the backend immediately registers in the Sentry dashboard.
- [ ] **Step 16.2: Database Audit Logs**
  - [ ] **Action:** Create an `audit_logs` table.
  - [ ] **Details:** Hook into SQLAlchemy lifecycle events or FastAPI routes to log sensitive actions (document deletion, login failures).
  - [ ] **Verification:** Deleting a document results in an immutable row inserted into `audit_logs`.

---

## [ ] Phase 17 → Optimization & Profiling
**Goal:** Fine-tune the backend to reduce API latency and control external LLM costs.
**Stack:** Python Profilers, SQL Query Plans

- [ ] **Step 17.1: N+1 Query Elimination**
  - [ ] **Action:** Audit all SQLAlchemy queries.
  - [ ] **Details:** Ensure that endpoints returning lists of nested objects (e.g., Documents with their User relationship) use `selectinload` or `joinedload`.
  - [ ] **Verification:** Fetching 50 documents generates 1 or 2 SQL queries, not 51.
- [ ] **Step 17.2: Token Cost Management**
  - [ ] **Action:** Implement token usage tracking.
  - [ ] **Details:** Intercept the LLM provider's token usage stats in the API response and log them to a `usage_records` table to monitor costs per user.
  - [ ] **Verification:** Sending a chat message successfully deducts or tracks exactly X input and Y output tokens in the database.

---

## [ ] Phase 18 → Clean Up & Refactoring
**Goal:** Finalize the codebase by removing technical debt and dead code before the final release.
**Stack:** Ruff, TypeScript

- [ ] **Step 18.1: Code Base Scrub**
  - [ ] **Action:** Perform a comprehensive monorepo sweep.
  - [ ] **Details:** Resolve all pending `TODO` comments. Delete unused imports, console.logs, and dummy data files used during scaffolding.
  - [ ] **Verification:** The codebase is entirely clean of debug statements and unused code warnings.

---

## [ ] Phase 19 → Final Report & Handover
**Goal:** Prepare the project for final client delivery or open-source release.
**Stack:** Markdown

- [ ] **Step 19.1: Deployment Instructions**
  - [ ] **Action:** Write `setup.md` or a root `README.md`.
  - [ ] **Details:** Provide flawless, step-by-step instructions on how a new developer can clone the repo, populate `.env`, and start the stack in under 5 minutes.
  - [ ] **Verification:** A clean setup following the instructions succeeds without any hidden gotchas or missing dependencies.
