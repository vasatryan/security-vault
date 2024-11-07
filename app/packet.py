import auth.login as user
from fastapi import Form, HTTPException, Request
from fastapi.responses import RedirectResponse
from database import conn
from auth.jwt import verify_token
from datetime import datetime,timezone



app = user.app



@app.post("/packet")
async def packet(request: Request, url: str = Form(...), body: str = Form(...)):

    # return "hit"
    
    try:                       
        pool = await conn()
        
        access_token = request.cookies.get("access_token")
        user_info = verify_token(access_token)
        Email = user_info["email"]
        
        
        # return user_info
    
        async with pool.acquire() as connection:
            user_query = """
                    SELECT * FROM users
                    WHERE email = $1
                """
                
            # packet_query = """
            #         SELECT * FROM packet
            #         WHERE packetname = $1
            # """
            
            query = """
                    INSERT INTO purchase_history (UserID, PacketID, PurchaseDate, URL, Body)
                    VALUES ($1, $2, $3, $4, $5)
                """
                
            # packet_data = await connection.fetchrow(packet_query, PacketName)
            user_data = await connection.fetchrow(user_query, Email)
            user_id = user_data["userid"]
            now = datetime.now(timezone.utc)
            
            await connection.execute(query, user_id, 1, now, url, body)

            response = RedirectResponse(url="/en/packet", status_code=303)
            return response

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred while registering user: {e}")

    finally:
        await pool.close()
