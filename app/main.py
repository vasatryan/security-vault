from fastapi.staticfiles import StaticFiles
import packet as user
# import auth.signUp as signUp
from dotenv import load_dotenv
import os

load_dotenv()

user.app.mount("/static", StaticFiles(directory="static"), name="static")

if __name__ == "__main__":
    import uvicorn

    # Correct the typo here as well
    port = int(os.getenv('APP_PORT', 7777))
    uvicorn.run(user.app, host="127.0.0.1", port=port)

