# RAG (Retrieval-Augmented Generation)

Retrieval-Augmented Generation (RAG) is the engine that allows the AI to answer questions based *strictly* on the user's private documents, rather than relying on the model's pre-trained public knowledge.

The RAG architecture is split into two distinct pipelines: **Ingestion** (Async) and **Retrieval** (Sync).

## 1. Ingestion Pipeline (Asynchronous)

When a user uploads a document, we must extract its text and convert it into mathematical vectors (embeddings) that the AI can search.

1. **Queueing:** The FastAPI router saves the document to S3 and triggers a `BackgroundTask`. It immediately returns `202 Accepted` to the user.
2. **Parsing:** The background task downloads the file into memory and uses libraries like `pypdf` or `python-docx` to extract the raw text, preserving metadata like page numbers.
3. **Chunking (Crucial Step):** We cannot feed an entire 500-page PDF into an LLM. We divide the text into small "chunks" (e.g., 500 tokens).
   - *Sliding Window:* We use an overlap of ~50 tokens between chunks so that sentences at the edge of a chunk are not cut in half, preserving context.
4. **Embedding:** We send the chunk text to an embedding model (e.g., OpenAI `text-embedding-3-small`). The model returns a 1536-dimensional vector representing the semantic meaning of that chunk.
5. **Storage:** The chunk text, page number, and the vector are saved into the `document_chunks` PostgreSQL table using `pgvector`. The document status is updated to `READY`.

## 2. Retrieval Pipeline (Synchronous)

When a user asks a question in the chat interface, we must rapidly find the most relevant chunks of text to send to the LLM.

1. **Query Optimization (Optional):** If the user says "Explain it more", that query lacks context. We first pass the chat history and the query to a fast, cheap LLM to generate a standalone query: "Explain the indemnification clause in the uploaded contract".
2. **Query Embedding:** We convert this optimized query into a 1536-dimensional vector.
3. **Hybrid Search:** 
   - We execute a semantic search in PostgreSQL using the pgvector Cosine Distance operator (`<=>`) to find chunks with similar meaning.
   - *Tenant Security:* This SQL query strictly includes `AND document_id IN (SELECT id FROM documents WHERE user_id = :current_user)` to ensure the user only searches their own files.
4. **Context Assembly:** We retrieve the top *K* (e.g., top 5) most relevant chunks.

## 3. Generation Preparation

Before sending the chunks to the LLM, we must prepare the prompt.

- **Token Budgeting:** LLMs have strict context limits (e.g., 8k or 128k tokens). We use libraries like `tiktoken` to calculate the exact size of the retrieved chunks plus the chat history. If it exceeds the limit, we strategically drop the oldest chat history or the least relevant chunks.
- **Prompt Injection:** We inject the retrieved chunks into the `System Prompt` of the LLM. 

**Example Prompt Payload:**
```text
You are a helpful legal assistant. Answer the user's query using ONLY the provided context. If the answer is not in the context, say "I do not know."

<context>
[Doc ID: 1, Page 4]: The indemnification clause states...
[Doc ID: 1, Page 5]: Furthermore, liability is capped at...
</context>
```
