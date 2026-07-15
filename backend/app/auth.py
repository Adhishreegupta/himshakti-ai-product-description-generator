from fastapi import (
    APIRouter,
    HTTPException,
    Depends,
    Request
)

from fastapi.security import OAuth2PasswordRequestForm

from slowapi import Limiter
from slowapi.util import get_remote_address

from app.models import User
from app.database import users_collection

from app.security import (
    hash_password,
    verify_password,
    create_access_token,
)

# -----------------------------
# Rate Limiter
# -----------------------------
limiter = Limiter(key_func=get_remote_address)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

# ==========================
# REGISTER
# ==========================

@router.post("/register")
@limiter.limit("5/minute")
def register(
    request: Request,
    user: User
):

    existing = users_collection.find_one(
        {"email": user.email}
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hash_password(user.password)
    }

    users_collection.insert_one(new_user)

    return {
        "message": "User registered successfully"
    }


# ==========================
# LOGIN
# ==========================

@router.post("/login")
@limiter.limit("5/minute")
def login(
    request: Request,
    form_data: OAuth2PasswordRequestForm = Depends()
):

    db_user = users_collection.find_one(
        {
            "email": form_data.username
        }
    )

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not verify_password(
        form_data.password,
        db_user["password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = create_access_token(
        {
            "sub": str(db_user["_id"]),
            "email": db_user["email"]
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }