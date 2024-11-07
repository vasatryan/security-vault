import asyncio
from database import conn

async def create_packets(sql_commands):
    pool = await conn()
    try:
        if pool is None:
            print("Failed to connect to the database. Aborting table creation.")
            return
        # Acquire a connection from the pool
        async with pool.acquire() as connection:
            # Execute the SQL commands
            for command in sql_commands:
                await connection.execute(command)

        print("Packets created successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")

    finally:
        # Close the pool
        await pool.close()

async def main():
    sql_script =  [
        """INSERT INTO packet (packetname, price, shortinfo, description) VALUES ('Start', 1000, 'Network easy','lorem lorem');""",
        # """INSERT INTO packet (packetname, price, description) VALUES ('Enterprice', 2000, 'Network middle,Web application,Password');""",
        # """INSERT INTO packet (packetname, price, description) VALUES ('Pro', 5000, 'Network middle,Web application,Password,Social account');""",
        # """INSERT INTO packet (packetname, price, description) VALUES ('Pro+', 7000, 'Network middle,Web application,Password,Social account,Database,IP camera,Cloude,Social engineering');""",
    ]

    await create_packets(sql_script)

if __name__ == "__main__":
    asyncio.run(main())
