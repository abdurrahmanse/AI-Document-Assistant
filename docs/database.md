# Database Architecture

The database is the absolute source of truth for the platform. We rely on PostgreSQL not just for relational data, but also for vector storage, completely eliminating the complexity of synchronizing a separate vector database.

## 1. Core Stack

- **Engine:** PostgreSQL.
- **AI Extension:** `pgvector` for embedding storage and similarity search.
- **ORM:** SQLAlchemy 2.0. We use the modern 2.0 style (declare models using `Mapped` and `mapped_column`) and execute all queries asynchronously.
- **Driver:** `asyncpg` (the fastest async driver for Postgres).
- **Migrations:** Alembic.

## 2. Schema Entities (The Data Model)

- **`users`:** Identity, role, and account status.
- **`documents`:** Metadata about an uploaded file. Crucially, this stores the `s3_key` (pointer to the actual file in object storage) and the parsing `status` (QUEUED, PROCESSING, READY, FAILED).
- **`document_chunks`:** The most critical table for AI. Stores the raw text fragments of a parsed document along with its 1536-dimensional `VECTOR`.
- **`conversations`:** Groupings of chat messages to maintain context across sessions.
- **`messages`:** Individual chat messages, tracking whether they were sent by the `user` or the `assistant`.
- **`citations`:** A join table linking an assistant `message` to the specific `document_chunks` the LLM used to generate that answer (preventing hallucination).

## 3. pgvector Configuration & Performance

Storing embeddings is easy; retrieving them quickly at scale is hard.

- **Column Type:** We use `VECTOR(1536)` because we are standardizing on OpenAI's `text-embedding-3-small` model.
- **Indexing:** We strictly enforce the creation of an **HNSW (Hierarchical Navigable Small World)** index on the vector column.
  - *Why HNSW over IVFFlat?* HNSW provides vastly superior query performance (sub-millisecond) and higher recall without requiring the table to be fully populated before index creation.
- **Distance Metric:** Cosine similarity (`<=>`), which is the industry standard for text embeddings.

## 4. ORM & Repository Pattern

- **Async Only:** Because FastAPI runs on an asynchronous event loop, every database call MUST use `async/await`. A single synchronous database call will block the entire server.
- **The Repository Pattern:** API Routers and Services must never write raw SQLAlchemy queries. Instead, they call methods on Repository classes (e.g., `DocumentRepository.get_by_id(db, user_id, doc_id)`). This centralizes tenant isolation logic and makes the code highly testable.

## 5. Schema Evolution & Soft Deletes

- **Alembic Strictness:** Developers must never manually alter the database schema. All changes must be made in the SQLAlchemy models, captured via `alembic revision --autogenerate`, and reviewed in code before executing `alembic upgrade head`.
- **Soft Deletes:** We never `DELETE` rows for `users` or `documents` immediately. Instead, we populate a `deleted_at` timestamp column.
  - *Why?* This prevents catastrophic accidental data loss and allows for easy recovery.
  - Endpoints filter out soft-deleted data automatically. A nightly cron job can be implemented later to permanently scrub data older than 30 days.
