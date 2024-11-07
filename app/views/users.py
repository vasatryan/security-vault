from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse
from jinja2 import Environment, FileSystemLoader
from auth.jwt import verify_token
import jwt 
from datetime import datetime,timedelta
from schemas import settings
import ast




app = FastAPI()

env = Environment(loader=FileSystemLoader("templates"))
languages = ["en", "fr", "ge", "ru"]
pages = ['about','contact_us',"faq","login","packet","payment_page","profile","purchase","sign_up","terms&policy"]
# private_pages = ["profile",]



@app.middleware("http")
async def redirect_root_to_en(request: Request, call_next):
    if request.url.path == "/":
        return RedirectResponse(url="/en")
    response = await call_next(request)
    return response





# @app.get("/{lang}", response_class=HTMLResponse)
# async def read_root(request: Request, lang: str = "en"):
#     access_token = request.cookies.get("access_token")
#     if lang not in languages:
#         raise HTTPException(status_code=404, detail="Language not supported")

#     if access_token:
#         # Decode and verify the access token to extract user information
#         # user_info = verify_token(access_token)
#         href = f"/{lang}"
#     else:
#         # If the user is not logged in, construct the href link without user ID
#         href = f"/{lang}"

#     template = env.get_template(f"{lang}/index.html")
#     return template.render(href=href)



@app.get("/{lang}", response_class=HTMLResponse)
async def read_root(request: Request, lang: str = "en"):
    # access_token = request.cookies.get("access_token")
    if lang not in languages:
        raise HTTPException(status_code=404, detail="Language not supported")
    
    template = env.get_template(f"{lang}/index.html")
    return template.render(page="home", lang=lang)







@app.get("/{lang}/{page}", response_class=HTMLResponse)
async def read_page(request: Request, lang: str = "en", page: str = "index"):
    access_token = request.cookies.get("access_token")
    errors = request.cookies.get("errors")

    try:
        errors = ast.literal_eval(errors)
    except:
        errors = {'password': None, "email": None, "first_name": None, "last_name": None, "phone": None, "repeat_password": None}

    if lang not in languages:
        raise HTTPException(status_code=404, detail="Language not supported")
    
    if access_token:
        template = env.get_template(f"{lang}/{page}.html")
        return template.render(page=page)
    if page in pages:
        template = env.get_template(f"{lang}/{page}.html")
        return template.render(errors=errors, page=page, lang=lang)