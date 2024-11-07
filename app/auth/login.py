import auth.signUp as user
from fastapi import Form
from fastapi.responses import RedirectResponse
from database import conn
from auth.jwt import create_access_token,create_refresh_token
import bcrypt


app = user.app

async def execute_query(query, *args):
    async with conn.acquire() as connection:
        return await connection.fetchrow(query, *args)






@app.post("/login")
async def login(Email: str = Form(...), Password: str = Form(...)):
    errors = {}
    try:
        pool = await conn()
    
        async with pool.acquire() as connection:
            
            query = """
                    SELECT * FROM users
                    WHERE email = $1
                """
            user_data = await connection.fetchrow(query, Email)
                





            hashed_password = user_data['password']
            if not bcrypt.checkpw(Password.encode('utf-8'), hashed_password.encode('utf-8')):
                errors["password"] = "Invalid credentials"

            access_token = create_access_token({"email": Email, "type": "auth"})
            # refresh_token = create_refresh_token({"email": Email})
            if errors:
                response = RedirectResponse(url="/en/login", status_code=303)
                response.set_cookie("errors", errors)
                return response
            else:
                # response = RedirectResponse(url=f"/en/{userID}", status_code=303)
                response = RedirectResponse(url="/en", status_code=303)
                response.set_cookie("access_token", access_token)
                response.delete_cookie("errors")
                # response.set_cookie("refresh_token", refresh_token)
                return response
            
    

    except Exception as e:
        errors["email"] = "User not found"
        response = RedirectResponse(url="/en/login", status_code=303)
        response.set_cookie("errors", errors)
        return response

    finally:
        await pool.close()
