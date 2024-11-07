import jwt
import datetime
from fastapi import HTTPException
from passlib.context import CryptContext
import secrets
from passlib.context import CryptContext
import auth.utils



# Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")



def create_access_token(data: dict):
    """
    Create JWT access token with expiration time.
    """
    encoded_jwt = auth.utils.encode_jwt(data)
    return encoded_jwt


def create_refresh_token(data: dict):
    
    encoded_jwt = auth.utils.encode_jwt(data)
    return encoded_jwt


def verify_token(token: str):
    """
    Verify JWT token.
    """
    try:
        payload = auth.utils.decode_jwt(token)
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")