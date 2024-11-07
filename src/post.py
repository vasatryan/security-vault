import sys
import asyncio
import aiohttp
import random
import string

async def send_post_request(session, url, payload):
    try:
        async with session.post(url, json=payload) as response:
            if response.status != 200:
                with open("/tmp/report_mail.txt", "w") as file:
                    file.write(f"Testing Position: {url}, Status Code: {response.status}\n")
            return response
    except aiohttp.ClientError as e:
        with open("/tmp/report_mail.txt", "w") as file:
            file.write(f"Error sending request to {url}: {e}\n")
        return None

async def main():
    if len(sys.argv) != 3:
        print("Usage: python script.py <url> <body>")
        return

    url = sys.argv[1]
    body = sys.argv[2]
    count = 1

    tasks = []
    async with aiohttp.ClientSession() as session:
        for _ in range(count):
            tasks.append(asyncio.create_task(send_post_request(session, url, body)))
        responses = await asyncio.gather(*tasks)
        # print(responses)  # Print all responses if needed
    with open("/tmp/report_mail.txt", "a") as file:
        file.write("All requests completed successfully.\n")
    


if __name__ == "__main__":
    asyncio.run(main())
