import asyncio

# Import all domain models to ensure they are registered with Base
from app.infrastructure.db.base import Base
from app.infrastructure.db.session import engine


async def init_db():
    async with engine.begin() as conn:
        print("Creating database tables...")
        await conn.run_sync(Base.metadata.create_all)
        print("Done.")

if __name__ == "__main__":
    asyncio.run(init_db())
