# AI Document Intelligence Architecture

This project is structured as a Turborepo + pnpm monorepo. It separates frontend Next.js applications, backend Python services, and shared libraries into independent, scalable packages.

## Monorepo Layout

### Applications (`apps/`)

- **`web`**: Public-facing marketing and landing pages. Built with Next.js App Router. Connects to the API for dynamic data but primarily serves static content.
- **`app`**: The core authenticated application for end-users to interact with documents and AI features. Built with Next.js App Router.
- **`admin`**: Internal application for system administrators to manage users, features, and platform analytics. Built with Next.js App Router.
- **`api`**: The backend Python server. Built with FastAPI. Responsible for database interactions, AI/RAG orchestration, and serving JSON endpoints to the frontend applications.

### Shared Packages (`packages/`)

- **`@workspace/ui`**: Shared React components (Tailwind CSS / shadcn/ui).
- **`@workspace/api-client`**: Generated/shared API client logic.
- **`@workspace/types`**: Shared TypeScript types and interfaces.
- **`@workspace/validation`**: Shared Zod validation schemas for frontend and backend boundaries.
- **`@workspace/auth`**: Shared authentication logic (e.g. NextAuth config).
- **`@workspace/config`**: Shared configuration variables and environment constants.
- **`@workspace/eslint-config`**: Shared ESLint flat configurations.
- **`@workspace/typescript-config`**: Shared `tsconfig.json` base files.

## Dependency Rules

1. **Frontend to Backend**: Frontend applications (`web`, `app`, `admin`) **must not** directly import backend code or directly connect to the PostgreSQL database. They must consume data via the `api` through HTTP endpoints.
2. **Shared Packages**: Shared packages (`packages/*`) **must not** contain application-specific business logic. They exist strictly for code reuse across multiple frontend applications.
3. **Application Autonomy**: Applications should not import code from other applications (e.g. `apps/app` cannot import from `apps/admin`).