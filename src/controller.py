import asyncpg
import asyncio
import sys
import subprocess
from pathlib import Path
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

sys.path.append(str(Path(__file__).resolve().parent.parent))

from app.database import conn

async def fetch_and_update_data(pool, purchase_id):
    try:
        async with pool.acquire() as connection:
            async with connection.transaction():
                request_query = """SELECT PurchaseID, URL, Body, UserID FROM purchase_history WHERE PurchaseID = $1 FOR UPDATE"""
                result = await connection.fetchrow(request_query, purchase_id)
                if result:
                    purchase_id, url, body, user_id = result['purchaseid'], result['url'], result['body'], result['userid']
                    print(f"URL: {url}\nBody: {body}")

                    update_query = """UPDATE purchase_history SET IsUsed = TRUE WHERE PurchaseID = $1"""
                    await connection.execute(update_query, purchase_id)

                    return user_id, url, body
                else:
                    print(f"No data found for PurchaseID = {purchase_id}")
                    return None, None, None
    except Exception as e:
        print(f"An error occurred in fetch_and_update_data: {e}")
        return None, None, None

async def send_email(user_email, report_file):
    try:
        # Email configuration
        sender_email = '...@coderepublic.am'
        sender_password = 'password'
        subject = 'Your Report'
        
        # Create message
        message = MIMEMultipart()
        message['From'] = sender_email
        message['To'] = user_email
        message['Subject'] = subject

        # Attach report file
        with open(report_file, 'r') as f:
            report_content = MIMEText(f.read(), 'plain')
            report_content.add_header('Content-Disposition', 'attachment', filename=report_file)
            message.attach(report_content)

        # Send email
        await aiosmtplib.send(
            message,
            hostname='smtp.yandex.com',
            port=465,
            username=sender_email,
            password=sender_password,
            use_tls=True
        )
        
        print("Email sent successfully!")
    except Exception as e:
        print(f"Error sending email: {e}")

async def handle_postgresql_notification(pool, purchase_id):
    try:
        user_id, url, body = await fetch_and_update_data(pool, purchase_id)
        if user_id and url and body:
            # Perform actions based on the PostgreSQL notification
            subprocess.run(["python3", "src/post.py", url, body])
            subprocess.run(["python3", "src/get.py", url])

            # Send email to user
            async with pool.acquire() as connection:
                user_email_query = """SELECT Email FROM Users WHERE UserID = $1"""
                user_email = await connection.fetchval(user_email_query, user_id)
                
                if user_email:
                    await send_email(user_email, '/tmp/report_mail.txt')
                else:
                    print("User email not found.")
    except Exception as e:
        print(f"An error occurred while handling PostgreSQL notification: {e}")

async def listen_for_notifications(pool):
    try:
        async with pool.acquire() as connection:
            await connection.add_listener('purchase_channel', lambda conn, pid, channel, payload: asyncio.create_task(handle_postgresql_notification(pool, int(payload))))
            print("Listening for notifications on channel 'purchase_channel'...")

            while True:
                await asyncio.sleep(1)  # Keeps the connection open to listen for notifications
    except Exception as e:
        print(f"An error occurred while listening for notifications: {e}")

async def main():
    try:
        pool = await conn()
        await listen_for_notifications(pool)
    except Exception as e:
        print(f"An error occurred in main: {e}")
    finally:
        await pool.close()

if __name__ == "__main__":
    asyncio.run(main())
