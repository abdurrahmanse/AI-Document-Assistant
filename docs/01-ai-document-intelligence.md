# Project 01 — AI Document Intelligence Platform
## Complete Full-Stack Engineering Specification

## 1. Product Goal
Build a production-style document intelligence SaaS. Users upload private documents, the platform processes them asynchronously, indexes their contents, supports semantic/hybrid search, and provides citation-grounded AI chat.

The project must demonstrate: **Next.js + FastAPI + PostgreSQL/pgvector + object storage + Redis workers + RAG + production security/testing/observability.**

## 2. Applications

### Public Website
Pages:
- `/`
- `/features`
- `/how-it-works`
- `/pricing`
- `/security`
- `/docs`
- `/contact`
- `/login`
- `/register`
- `/forgot-password`
- `/privacy`
- `/terms`

Home sections:
1. Hero
2. Product value proposition
3. How RAG works
4. Feature grid
5. Security/privacy
6. Workflow demo
7. Pricing
8. FAQ
9. CTA
10. Footer

### User Application
Pages:
- `/app`
- `/app/documents`
- `/app/documents/[id]`
- `/app/chat`
- `/app/chat/[conversationId]`
- `/app/search`
- `/app/usage`
- `/app/settings/profile`
- `/app/settings/security`

Dashboard widgets:
- Total documents
- Processing jobs
- Storage used
- AI usage
- Recent conversations
- Recent documents
- Failed jobs

### Admin
Pages:
- `/admin`
- `/admin/users`
- `/admin/documents`
- `/admin/jobs`
- `/admin/conversations`
- `/admin/usage`
- `/admin/feedback`
- `/admin/audit-logs`
- `/admin/system`
- `/admin/settings`

Admin capabilities:
- Search/filter users
- Suspend/reactivate user
- Inspect document processing status
- Retry failed jobs
- Inspect AI usage
- Inspect feedback
- View audit logs
- View system health
- Configure safe application settings

## 3. Complete Stack

### Frontend
- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui
- Radix UI
- TanStack Query
- Zustand
- React Hook Form
- Zod
- TanStack Table
- Recharts
- Sonner
- Lucide React
- next-themes
- ESLint
- Prettier

### FastAPI Backend Packages
Core:
- `fastapi`
- `uvicorn[standard]`
- `pydantic`
- `pydantic-settings`
- `sqlalchemy`
- `alembic`
- `asyncpg`
- `psycopg`
- `python-multipart`

Security/auth:
- `argon2-cffi`
- `PyJWT`
- `email-validator`
- `slowapi` or Redis-backed rate limiting

HTTP/integration:
- `httpx`
- `tenacity`

AI:
- official OpenAI/Anthropic SDK
- `pgvector`
- optional `tiktoken` for token estimation

Documents:
- `pypdf`
- `python-docx`
- MIME/type detection package as needed

Jobs:
- `celery` + `redis` or RQ

Observability:
- `structlog`
- `sentry-sdk`
- OpenTelemetry packages

Testing:
- `pytest`
- `pytest-asyncio`
- `httpx`
- `factory-boy` where useful

Quality:
- `ruff`
- `mypy`

### Database
PostgreSQL + pgvector.

Tables:
- users
- sessions
- password_reset_tokens
- documents
- document_versions
- document_chunks
- conversations
- messages
- citations
- processing_jobs
- feedback
- usage_records
- audit_logs

### Infrastructure
- Neon PostgreSQL
- Cloudflare R2/S3
- Redis
- Docker
- GitHub Actions
- Vercel
- Render/Fly/AWS
- Sentry
- OpenTelemetry

## 4. Backend Architecture

```text
FastAPI
├── api
├── core
├── auth
├── users
├── documents
├── conversations
├── search
├── ai
├── jobs
├── storage
├── usage
├── admin
└── observability
```

Rules:
- routers contain HTTP concerns only;
- services contain business logic;
- repositories/data-access contain persistence;
- schemas contain API contracts;
- workers contain asynchronous jobs;
- AI code is isolated from generic domain services.

## 5. Document Pipeline

```text
Browser
 → Presigned Upload
 → Object Storage
 → Create Document
 → Queue Job
 → Parse
 → Normalize
 → Chunk
 → Embed
 → Store vectors
 → Mark READY
```

Statuses:
`UPLOADING → QUEUED → PROCESSING → READY`
or
`PROCESSING → FAILED`

Retry must be idempotent.

## 6. RAG Pipeline

```text
Question
 → authorization
 → query normalization
 → hybrid retrieval
 → optional reranking
 → context budget
 → LLM
 → citation validation
 → SSE stream
 → persistence
```

Never retrieve chunks without user/tenant ownership filtering.

## 7. Core User Features
- Upload
- Rename
- Delete
- Reprocess
- Preview
- Search
- Filter
- Chat
- Multi-document chat
- Citation navigation
- Conversation history
- Feedback
- Usage tracking

## 8. Admin Features
- User management
- Document moderation/inspection
- Job retry
- Job failure diagnostics
- AI usage
- Feedback review
- Audit log
- System health

## 9. Security
- Argon2id password hashing
- Secure session strategy
- CSRF protection where cookie auth requires it
- Rate limiting
- Ownership checks
- Signed storage URLs
- Upload limits
- Malware scanning hook
- Prompt-injection defense
- Audit logging
- Secret management
- No uploaded-file execution

## 10. API Modules
Auth, Users, Documents, Jobs, Search, Conversations, Messages, Usage, Admin, Health.

Every endpoint requires:
- validation
- authentication where applicable
- authorization
- consistent errors
- logging
- tests

## 11. Testing Matrix
Backend:
- unit
- integration
- authorization
- database
- job retry
- RAG retrieval
- citation persistence

Frontend:
- component
- form
- query states

E2E:
1. register
2. login
3. upload
4. wait for processing
5. search
6. chat
7. inspect citation
8. delete
9. verify inaccessible

## 12. Implementation Phases

## Implementation Order

Follow this order and do not skip ahead:
1. Repository/monorepo setup and package boundaries.
2. Environment/configuration management.
3. Database schema and migrations.
4. Authentication and authorization.
5. Backend API foundation and error contract.
6. Storage/background jobs/queues.
7. Core backend domain features.
8. Frontend design system and shared layouts.
9. Public website pages.
10. Authenticated user application.
11. Admin application.
12. AI pipeline/tooling.
13. Observability, rate limits and security hardening.
14. Automated tests.
15. CI/CD.
16. Production deployment.
17. Performance audit and final QA.

At every phase:
- update migrations through Alembic;
- update API schemas;
- add tests;
- handle loading/error/empty states;
- update environment documentation;
- never bypass authorization because the UI hides a feature.

### Phase-specific order
1. Monorepo and tooling.
2. PostgreSQL/Alembic models.
3. Auth.
4. Document CRUD.
5. R2/S3 upload.
6. Background processing.
7. Parsing/chunking.
8. Embeddings/pgvector.
9. Search.
10. RAG chat/SSE.
11. User UI.
12. Admin UI.
13. Usage/feedback/audit.
14. Security.
15. Tests.
16. CI/CD.
17. Deployment.
18. Load/performance testing.

## 13. Definition of Done
All public, user and admin flows work end-to-end; no placeholder critical flow remains; failures are recoverable; data is isolated; tests and CI pass; production deployment has logs, metrics and error monitoring.
