import asyncpg
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

async def conn():
    print("Connecting to PostgreSQL")
    DATABASE_USER = os.getenv('DATABASE_USER')
    DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD')
    DATABASE_NAME = os.getenv('DATABASE_NAME')
    DATABASE_HOST = os.getenv('DATABASE_HOST')
    DATABASE_PORT = os.getenv('DATABASE_PORT')
    try:
        pool = await asyncpg.create_pool(
            user=DATABASE_USER,
            password=DATABASE_PASSWORD,
            database=DATABASE_NAME,
            host=DATABASE_HOST,
            port=DATABASE_PORT,
            ssl=None
        )
        print("Connection established")
        return pool

    except Exception as e:
        print(f"Failed to connect to the database: {e}")
        return None

#conn = connect_to_database()
