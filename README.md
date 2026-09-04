# AI Document Assistant (AI Document Intelligence Platform)

![Status: Work in Progress](https://img.shields.io/badge/Status-Work%20in%20Progress-yellow)
![License: MIT](https://img.shields.io/badge/License-MIT-blue)

**AI Document Assistant** is an advanced AI-powered Document Intelligence Platform. It provides a secure, intelligent, and interactive workspace for analyzing, processing, and interacting with documents using state-of-the-art AI models.

> **Note**: This project is currently under active development. The architecture and features are continually evolving.

---

## 🌟 Key Features

- **Smart Document Analysis:** Extract insights, summarize, and intelligently query documents.
- **Interactive Workflows:** Intuitive, real-time UI/UX for managing documents.
- **Robust Security & Privacy:** Built with security at its core, keeping your sensitive documents safe.
- **High Performance:** FastAPI backend for quick AI inferences paired with a responsive Next.js frontend.
- **Modern Monorepo:** Scalable architecture built on Turborepo.

## 🚀 Tech Stack

This project is structured as a monorepo using **Turborepo** and **pnpm** workspaces.

### Frontend
- **Framework:** [Next.js](https://nextjs.org/) & [React 19](https://react.dev/)
- **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/) & [Framer Motion](https://www.framer.com/motion/)
- **State Management & Data Fetching:** [Zustand](https://zustand-demo.pmnd.rs/) & [TanStack React Query](https://tanstack.com/query/latest)
- **Validation:** [Zod](https://zod.dev/)
- **Testing:** [Playwright](https://playwright.dev/)

### Backend (API)
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **Server:** Uvicorn
- **Caching/Queue:** Redis
- **Tooling:** [uv](https://github.com/astral-sh/uv), Ruff, Pytest, Pyright

### Tooling
- **Monorepo Management:** [Turborepo](https://turbo.build/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Formatting & Linting:** ESLint, Prettier, Husky, lint-staged

## 📁 Repository Structure

```text
AI-Document-Assistant/
├── apps/
│   ├── api/            # Python FastAPI backend service
│   ├── web/            # Next.js web application (marketing & user dashboard)
│   ├── admin/          # Admin dashboard application
│   └── app/            # Main core application client
├── packages/
│   ├── ui/             # Shared React UI components (Tailwind + Radix)
│   ├── types/          # Shared TypeScript definitions
│   ├── data/           # Shared data access and state logic
│   ├── marketing/      # Marketing page components & features
│   ├── auth/           # Authentication utilities
│   ├── config/         # Shared configurations
│   ├── api-client/     # API client integrations
│   ├── email/          # Email templates and utilities
│   ├── observability/  # Logging and metrics
│   ├── validation/     # Zod schemas and validation rules
│   ├── eslint-config/  # Shared ESLint configs
│   └── typescript-config/# Shared tsconfig.json files
└── turbo.json          # Turborepo configuration
```

## 🛠 Getting Started

### Prerequisites

Make sure you have the following installed on your local development machine:

- **Node.js** (v18 or higher)
- **pnpm** (v9+)
- **Python** (v3.10+)
- **uv** (Python package manager)
- **Redis** (Running locally or via Docker)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/AI-Document-Assistant.git
   cd AI-Document-Assistant
   ```

2. **Install JavaScript/TypeScript dependencies:**
   ```bash
   pnpm install
   ```

3. **Install Python dependencies (for API):**
   ```bash
   cd apps/api
   uv sync  # Or follow specific virtual environment instructions
   cd ../..
   ```

4. **Environment Variables:**
   Create `.env` files based on `.env.example` / `.env.template` at the root and in the respective `apps/api` and `apps/web` directories.

### Running the Application

You can use Turborepo to spin up the entire stack concurrently from the root directory:

```bash
pnpm dev
```
This command starts both the **Next.js** frontend(s) and the **FastAPI** backend simultaneously.

Alternatively, to build all apps and packages:
```bash
pnpm build
```

## 🧪 Testing and Linting

- **Run Linter:** `pnpm lint`
- **Run Formatter:** `pnpm format`
- **Check Types:** `pnpm check-types`
- **Run Backend Tests:** `cd apps/api && uv run pytest`
- **Run Frontend E2E:** `cd apps/web && pnpm test:e2e`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Since the project is currently in active development, please reach out or open an issue to discuss proposed changes before submitting a pull request.

## 📄 License

This project is licensed under the MIT License.
