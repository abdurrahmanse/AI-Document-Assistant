from app.core.config import settings
import asyncio
import asyncpg

async def drop():
    # Connect to default postgres DB to drop the custom one
    sys_uri = settings.DATABASE_URL.replace('ai_document_db', 'postgres').replace('+asyncpg', '')
    conn = await asyncpg.connect(sys_uri)
    try:
        # Terminate existing connections first
        await conn.execute('''
            SELECT pg_terminate_backend(pg_stat_activity.pid)
            FROM pg_stat_activity
            WHERE pg_stat_activity.datname = 'ai_document_db'
              AND pid <> pg_backend_pid();
        ''')
        await conn.execute('DROP DATABASE IF EXISTS ai_document_db')
        print("Database dropped.")
    finally:
        await conn.close()

if __name__ == "__main__":
    asyncio.run(drop())
