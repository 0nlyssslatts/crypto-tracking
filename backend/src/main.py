from fastapi import FastAPI
from http_client import CMCHTTPClient
from config import settings

app = FastAPI()

cmc_client = CMCHTTPClient(
    base_url= "https://pro-api.coinmarketcap.com",
    api_key= settings.API_KEY
)

@app.get("/cryptocurrencies")
async def get_cryptocurrencies():
    return await cmc_client.get_listings()

@app.get("/cryptocurrencies/{currency_id}")
async def get_cryptocurrency(currency_id: int):
    return await cmc_client.get_currency(currency_id)