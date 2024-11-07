from pydantic import BaseModel
from pathlib import Path
from pydantic_settings import BaseSettings

BASE_DIR = Path(__file__).parent.parent


class AuthJWT(BaseModel):
    private_key_path: Path = BASE_DIR / "app" / "certs" / "jwt-private.pem"
    public_key_path: Path = BASE_DIR / "app" / "certs" / "jwt-public.pem"
    algorithm: str = "RS256"
    access_token_expire_minutes: int = 60 * 3
    refresh_token_expire_days: int = 1
    

class Settings(BaseSettings):
    auth_jwt: AuthJWT = AuthJWT()

# Define Pydantic models for validation
class Users(BaseModel):
    UserID: int
    FirstName: str
    LastName: str
    Email: str
    PhoneNumber: str
    Password: str
    RepeatPassword: str

# class PurchaseHistory(BaseModel):
#     PurchaseId: int
#     UserID: int
#     PacketID: int
#     PurchaseDate: str

# class Packet(BaseModel):
#     PacketID: int
#     PacketName: str
#     Price: float 
#     Properties: str

settings = Settings()