from fastapi import FastAPI
from app.routes import router


app = FastAPI(
title="CopyCart AI API"
)


app.include_router(router)


@app.get("/")
def home():

    return {
        "message":"Backend Running"
    }