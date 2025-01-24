from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # React frontend'in çalıştığı URL burada belirtilebilir
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/read-text")
async def read_text():
    # data.txt dosyasını oku
    try:
        with open("data.txt", "r", encoding="utf-8") as file:
            content = file.read()
        return JSONResponse(content={"content": content})
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
