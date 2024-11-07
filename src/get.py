import asyncio
import aiohttp
import sys

async def send_requests(url, num_requests):
    async with aiohttp.ClientSession() as session:
        async def fetch(session, url):
            async with session.get(url) as response:
                if response.status != 200:
                    with open("/tmp/report_mail.txt", "a") as file:
                        file.write(f"Testing Position: {url}, Status Code: {response.status}\n Your server is can't cover 1000 recuest at once\n")
                return response  # Return the response object

        tasks = []
        for _ in range(num_requests):
            task = asyncio.create_task(fetch(session, url))
            tasks.append(task)

        responses = await asyncio.gather(*tasks)
        for response in responses:
            print(response.status)

        with open("/tmp/report_mail.txt", "a") as file:
            file.write("All requests completed successfully.\n")

url = sys.argv[1]  # Replace with your target URL
num_requests = 1  # Total number of requests to send

asyncio.run(send_requests(url, num_requests))
print("All requests completed.")
