import views.users as user
import auth.valid as validation
from fastapi import Form, HTTPException
from fastapi.responses import JSONResponse, RedirectResponse
from database import conn
from auth.jwt import create_access_token
import bcrypt

app = user.app




def hashing_password(password):
    hash_pass = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(hash_pass, salt)
    password = hashed_password.decode("utf-8")
    return password

@app.post("/signup")
async def sign_up(
    FirstName: str = Form(...),
    LastName: str = Form(...),
    Email: str = Form(...),
    PhoneNumber: str = Form(...),
    Password: str = Form(...),
    RepeatPassword: str = Form(...)
):
    errors = {}

    first_name_error = validation.validate_firstname(FirstName)
    if first_name_error:
        errors["first_name"] = first_name_error

    last_name_error = validation.validate_lastname(LastName)
    if last_name_error:
        errors["last_name"] = last_name_error

    email_error = validation.validate_email(Email)
    if email_error:
        errors["email"] = email_error

    phone_error = validation.validate_phone(PhoneNumber)
    if phone_error:
        errors["phone"] = phone_error

    password_error = validation.validate_password(Password)
    if password_error:
        errors["password"] = password_error

    if Password != RepeatPassword:
        errors["repeat_password"] = "Passwords don't match"

    if errors:
        response = RedirectResponse(url="/en/sign_up", status_code=303)
        response.set_cookie("errors", errors)
        return response

    try:                       
        hash_password = hashing_password(Password)
                     
        pool = await conn()

        async with pool.acquire() as connection:
            query = """
                    INSERT INTO users (firstname, lastname, email, phonenumber, password)
                    VALUES ($1, $2, $3, $4, $5)
                """
            await connection.execute(query, FirstName, LastName, Email, PhoneNumber, hash_password)


        
        access_token = create_access_token({"email": Email, "type": "auth"})
        # refresh_token = create_refresh_token({"email": Email, "type": "auth"})
        # if errors:
                # return JSONResponse(status_code=422, content={"errors": errors})
        # else:
        response = RedirectResponse(url="/en", status_code=303)
        response.set_cookie("access_token", access_token)
        response.delete_cookie("errors")
        return response

    except Exception:
        errors["email"] = "This user already exists."
        response = RedirectResponse(url="/en/login", status_code=303)
        response.set_cookie("errors", errors)
        return response
    finally:
        await pool.close()
