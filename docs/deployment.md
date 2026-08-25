# Deployment & CI/CD Architecture

This document defines how the platform is built, tested, and shipped to production. The architecture is designed to be easily deployable for new clients via a simple environment variable setup script.

## 1. Dynamic Configuration (Zero Hardcoding)

**Rule:** Absolutely no secrets, URLs, third-party API endpoints, or environment-specific toggles are hardcoded in the codebase.

- **Environment Variables:** All integrations (PostgreSQL Database, Redis, AWS/Cloudflare S3, Brevo Email, PostHog, Sentry, JWT Secrets) are injected at runtime via `.env` files.
- **White-label Ready:** If a new client buys the software, we do not need to fork the codebase. A new instance is spun up simply by injecting a new `.env` file via our automated Setup pipeline.
- **Pydantic Validation:** The FastAPI backend uses `pydantic-settings` to parse the environment variables on boot. If a required variable (like `DATABASE_URL`) is missing or malformed, the server crashes immediately during deployment, preventing runtime bugs.

## 2. Cloud Topology

We utilize managed, serverless, or PaaS (Platform as a Service) infrastructure to eliminate the need for manual server provisioning and Kubernetes overhead.

- **Frontend (Web, App, Admin):** Deployed to **Vercel**. Vercel natively understands the Turborepo/Next.js architecture. It handles global CDN edge routing, automatic SSL generation, and zero-downtime deployments.
- **Backend API (FastAPI):** Deployed to **Render**, **Fly.io**, or **AWS Elastic Beanstalk**. These platforms monitor the GitHub repository and deploy the Python app natively upon merge.
- **Database:** **Neon**. A serverless Postgres provider that natively supports the `pgvector` extension.
- **Cache/Rate Limiting:** **Upstash** (Serverless Redis) or AWS ElastiCache.
- **Object Storage:** **Cloudflare R2** (zero egress fees) or **AWS S3**. Used exclusively for storing the raw uploaded documents.

## 3. Continuous Integration & Deployment (CI/CD)

All deployments are automated via GitHub Actions to ensure code quality before it reaches production.

### Pull Requests (CI)
When a developer opens a Pull Request to the `main` branch, a GitHub Action workflow runs:
1. **Frontend Checks:** Executes `pnpm lint` and `pnpm check-types` across all Next.js apps.
2. **Backend Checks:** Executes `ruff check` (linting) and `mypy` (strict static typing).
3. **Tests:** Spins up an ephemeral Postgres container and runs `pytest` for the backend, followed by `playwright` for the frontend E2E tests.
4. **Enforcement:** If any check fails, the "Merge" button is disabled.

### Main Branch (CD)
When a Pull Request is successfully merged:
1. **Frontend Deploy:** Vercel automatically detects the push and deploys the Next.js apps globally in seconds.
2. **Backend Deploy:** A GitHub Action triggers the backend PaaS deployment.
3. **Automated Migrations:** Crucially, before the new backend server accepts web traffic, a script automatically executes `alembic upgrade head` to apply any new database schema changes.
