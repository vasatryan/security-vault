import asyncio
import aiohttp

async def send_post_request(session, url, payload, headers = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxNzE0NDYxOTQ5MzY0IiwiZW1haWwiOiJwZXJhc2hraUB2YXVsdC5jb20iLCJ1c2VySWQiOiI2NjMwOWNmZGY0NzdlYWQ2NGQ0MzQwZDAiLCJpYXQiOjE3MTQ0NjE5OTgsImV4cCI6MTcxNDQ3MDk5OH0.o4NiXVVaPaSaQL66qRzH_FUo7vDukivaW-KmwVq8ImQ'}):
    async with session.post(url, json=payload, headers= {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxNzE0NDYxOTQ5MzY0IiwiZW1haWwiOiJwZXJhc2hraUB2YXVsdC5jb20iLCJ1c2VySWQiOiI2NjMwOWNmZGY0NzdlYWQ2NGQ0MzQwZDAiLCJpYXQiOjE3MTQ0NjE5OTgsImV4cCI6MTcxNDQ3MDk5OH0.o4NiXVVaPaSaQL66qRzH_FUo7vDukivaW-KmwVq8ImQ'}) as response:
        return response


async def main():
    url = 'https://api.chessnoor.com/post' 
    tasks = []
    async with aiohttp.ClientSession() as session:
        for _ in range(1):
            payload = {"title": "hackerish"}
            tasks.append(asyncio.create_task(send_post_request(session, url, payload,  headers= {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxNzE0NDYxOTQ5MzY0IiwiZW1haWwiOiJwZXJhc2hraUB2YXVsdC5jb20iLCJ1c2VySWQiOiI2NjMwOWNmZGY0NzdlYWQ2NGQ0MzQwZDAiLCJpYXQiOjE3MTQ0NjE5OTgsImV4cCI6MTcxNDQ3MDk5OH0.o4NiXVVaPaSaQL66qRzH_FUo7vDukivaW-KmwVq8ImQ'})))
        responses = await asyncio.gather(*tasks)
    print(responses)

asyncio.run(main())