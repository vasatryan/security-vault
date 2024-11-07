import asyncio
from database import conn

# Function to execute SQL commands and create tables
async def create_tables(sql_commands):
    # Connect to the database
    pool = await conn()
    try:
        if pool is None:
            print("Failed to connect to the database. Aborting table creation.")
            return
        # Acquire a connection from the pool
        async with pool.acquire() as connection:
            # Execute the SQL commands
            await connection.execute(sql_commands)

        print("Tables created successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")

    finally:
        # Close the pool
        await pool.close()

# Run the create_tables function in an asyncio event loop
async def main():
    script_path = "database/create_tables.sql"  # Change this to the correct file path

    with open(script_path, 'r') as file:
        sql_script = file.read()

    await create_tables(sql_script)

if __name__ == "__main__":
    asyncio.run(main())