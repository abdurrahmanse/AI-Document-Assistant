import asyncio

import asyncpg
from app.core.config import settings


async def main():
    print(f"Connecting to Postgres to create {settings.POSTGRES_DB}...")
    conn = await asyncpg.connect(
        user=settings.POSTGRES_USER,
        password=settings.POSTGRES_PASSWORD,
        host=settings.POSTGRES_HOST,
        port=settings.POSTGRES_PORT,
        database="postgres"
    )
    try:
        await conn.execute(f'CREATE DATABASE "{settings.POSTGRES_DB}"')
        print("Database created!")
    except Exception as e:  # noqa: BLE001
        print(f"Error: {e}")
    finally:
        await conn.close()

if __name__ == '__main__':
    asyncio.run(main())
