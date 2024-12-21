from fastapi import FastAPI
from backend.src.router import router

app = FastAPI()
app.include_router(router)
