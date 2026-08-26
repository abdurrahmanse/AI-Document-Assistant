Context: Refactor all applications — `web`, `admin`, and `app` (users) — without changing existing functionality or UI/UX.
Role: Act as a senior frontend architect specializing in scalable, production-grade React/Next.js systems.
Task: Break large components into small, focused, reusable components, modules, and feature-based sections organized by business domain and single responsibility; apply a clean Module-Based/Clean/Layered Architecture with clear boundaries, dependency direction, shared components, hooks, services, and utilities.
Constraints: Avoid over-engineering, duplication, circular dependencies, unnecessary abstractions, and breaking changes; preserve existing API/data-flow architecture.
Review: Audit the entire codebase after refactoring, verify imports, types, lint, tests, and builds, then automatically fix any issues until all applications remain clean, consistent, maintainable, and production-ready.


Context: Refactor the entire `apps/api` FastAPI backend without changing existing behavior or API contracts.
Role: Act as a senior backend architect specializing in scalable, production-grade FastAPI systems.
Task: Organize the API into small, focused, reusable modules based on business domains and responsibilities using Clean/Layered/Module-Based Architecture — routers → schemas → services/use-cases → repositories → database, with separate core, config, infrastructure, AI, jobs, and utilities layers.
Constraints: Avoid fat routers, duplicated logic, circular dependencies, unnecessary abstractions, hardcoded URLs/config/secrets, and direct database access outside repositories.
Review: Audit the complete API after refactoring, run lint, type-check, tests, migrations/DB checks, and build/startup validation; automatically fix all discovered issues while preserving API contracts and keeping the code production-ready.


Context: Analyze and fix ALL detected issues in the entire project including TypeScript/type errors, build failures, runtime issues, API inconsistencies, and Git/`.gitignore` configuration problems.
Role: Act as a senior full-stack engineer and code-quality auditor.
Task: Identify root causes of ALL reported errors and issues, then implement robust fixes while maintaining clean, modular, and professional architecture; run lint, typecheck, tests, build, API validation, and Git checks; prioritize fixes for blocking issues and resolve them automatically without introducing new problems.
Review: Re-run all checks after fixes, verify the project is clean, consistent, maintainable, and production-ready, and do not stop until all issues are resolved or only clearly documented non-blocking warnings remain.





Context: Audit the entire project for TypeScript/type errors, build failures, runtime issues, and Git/`.gitignore` configuration problems.
Role: Act as a senior full-stack engineer and code-quality auditor.
Task: Run lint, typecheck, tests, build, and relevant Git checks; identify root causes and automatically fix every issue while keeping the architecture clean, modular, maintainable, and professional.
Review: Re-run all checks after fixes, remove unnecessary/duplicate code, verify the project structure, and do not stop until the project reaches a clean, production-ready state or only clearly documented non-blocking warnings remain.

Context: Audit the entire frontend and identify every hardcoded UI/content value.
Role: Act as a senior frontend/data-architecture engineer.
Task: Move all hardcoded content into a structured `data/` layer and make the UI consume it through a professional API-client → repository → service → data-flow architecture, but WITHOUT any backend/API implementation.
Feedback: Preserve the existing UI/UX exactly and ensure all content remains dynamically replaceable later by a real backend.
Review: Audit the entire codebase after implementation, remove remaining unnecessary hardcoded content, verify imports/types, and run lint/typecheck/build; fix all issues automatically.