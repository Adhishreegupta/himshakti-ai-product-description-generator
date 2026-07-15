from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.routes import router
from app.auth import router as auth_router

# Rate Limiting
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from slowapi import _rate_limit_exceeded_handler

# Create limiter
limiter = Limiter(key_func=get_remote_address)

app = FastAPI(
    title="CopyCart AI API"
)

# Register limiter
app.state.limiter = limiter

# Rate limit handler
app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler
)

# Middleware
app.add_middleware(SlowAPIMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static folder
app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)

# Routers
app.include_router(router)
app.include_router(auth_router)

@app.get("/")
def home():
    return {
        "message": "Backend Running"
    }