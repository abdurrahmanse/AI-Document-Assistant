# Development Guide

Welcome to the AI Document Intelligence project. This guide covers how to set up and develop within this Turborepo monorepo.

## Prerequisites

- **Node.js** v20+
- **pnpm** v9+
- **Python** (via `uv`)
- **PostgreSQL** (running locally or via Docker)

## Setup

1. **Install JavaScript dependencies**
   ```bash
   pnpm install
   ```
2. **Setup Python dependencies**
   The backend uses `uv` for lightning-fast Python package management.
   *(Python dependencies will be installed automatically when you run the API or you can run `uv sync` in `apps/api`)*
3. **Environment Configuration**
   Copy the `.env.example` file to `.env` in the root and individual apps as needed.
   ```bash
   cp .env.example .env
   ```

## Development Commands

Run these commands from the **root** of the monorepo:

### Start the entire stack
```bash
pnpm dev
```
Starts Next.js apps on ports 3000, 3001, 3002 and the FastAPI server on port 8000.

### Code Quality & Formatting
```bash
pnpm run lint         # Runs ESLint (JS/TS) and Ruff (Python)
pnpm run check-types  # Runs tsc (TypeScript) and Pyright (Python)
```

### Build for Production
```bash
pnpm run build
```
Builds all applications and shared libraries using Turborepo's caching.

## Package Naming Convention

All internal packages use the `@workspace/*` scope. When importing a shared package in an application, use this scope:

```tsx
import { Button } from "@workspace/ui/button";
```

## Adding Dependencies

- **To an App**: `pnpm --filter web add lodash`
- **To the Backend**: `cd apps/api && uv add fastapi`
- **To a Shared Package**: `pnpm --filter @workspace/ui add clsx`
