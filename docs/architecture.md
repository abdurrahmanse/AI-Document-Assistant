                  TURBOREPO
                      │
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
      WEB            APP           ADMIN
       │              │              │
       └──────────────┼──────────────┘
                      ↓
                     API
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
       Postgres     Redis       Storage
          │           │           │
          └───────────┼───────────┘
                      ↓
                 AI Pipeline
                      │
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
      LLM          RAG/Search      Tools