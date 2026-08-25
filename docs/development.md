# Development Guide

This guide outlines the developer experience (DX) and tooling required to build, test, and run the AI Document Intelligence platform locally.

## 1. Prerequisites

Before starting, ensure you have the following installed on your machine:
- **Node.js** (v20+) & **pnpm** (v9+)
- **Python** (3.11+) & **uv** (or pip)
- **PostgreSQL** (running locally or via a cloud provider like Neon) with the **pgvector** extension installed.
- **Redis** (running locally or via a cloud provider like Upstash) for rate limiting and token revocation.

## 2. Local Environment Setup

1. **Clone & Install Dependencies**:
   ```bash
   git clone <repo>
   cd ai-document-assistant
   pnpm install
   ```

2. **Environment Variables**:
   Copy the `.env.example` to `.env` in the root of the project.
   ```bash
   cp .env.example .env
   ```
   Fill in the required keys:
   - `DATABASE_URL`: Connection string to your Postgres instance.
   - `OPENAI_API_KEY`: Required for embeddings and chat generation.
   - `JWT_SECRET`: A random string for local token signing.

3. **Database Migrations**:
   Navigate to the backend directory and run the Alembic migrations to build your local schema.
   ```bash
   cd apps/api
   alembic upgrade head
   ```

## 3. Running the Stack (Turborepo)

We utilize **Turborepo** to orchestrate the entire full-stack platform. Instead of opening 4 different terminal tabs, you run a single command from the root of the project:

```bash
pnpm turbo run dev
```

This command automatically executes the `dev` script inside every `package.json` in the workspace. It simultaneously starts:
- `apps/web` (Next.js Marketing site) on `http://localhost:3001`
- `apps/app` (Next.js SaaS application) on `http://localhost:3000`
- `apps/admin` (Next.js Admin dashboard) on `http://localhost:3002`
- `apps/api` (FastAPI backend) on `http://localhost:8000`

## 4. Testing Matrix

We maintain strict testing requirements. All tests must pass before a PR is merged.

### Backend (Python)
- **Framework:** `pytest` and `httpx` (for async request mocking).
- **Command:** `pytest apps/api/tests/`
- **Requirement:** High coverage on all domain logic, especially authorization checks (Tenant Isolation) and token validation.

### Frontend (TypeScript)
- **Framework:** `vitest` (Unit/Component level), `playwright` (End-to-End browser simulation).
- **Command (Unit):** `pnpm run test`
- **Command (E2E):** `pnpm run test:e2e`

## 5. Code Quality & Formatting

To ensure consistency across the codebase, we enforce strict linting. This prevents "bikeshedding" over syntax in code reviews.

**Frontend:**
- `eslint` catches logical errors.
- `prettier` enforces formatting.
- Run manually via: `pnpm lint` and `pnpm format`

**Backend:**
- `ruff` is used for ultra-fast Python linting and formatting (replacing flake8/black/isort).
- `mypy` is used for strict static type checking.
- Run manually via: `ruff check apps/api` and `ruff format apps/api`
