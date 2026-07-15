from pydantic import BaseModel, EmailStr, Field

class Product(BaseModel):
    id: int
    name: str
    ingredients: str
    weight: str
    features: str
    tone: str
    description: str | None = ""
    price: float
    image: str | None = None

class DescriptionRequest(BaseModel):
    name: str
    ingredients: str
    weight: str
    features: str
    tone: str

class User(BaseModel):

    name: str = Field(
        min_length=3,
        max_length=40
    )

    email: EmailStr

    password: str = Field(
        min_length=6,
        max_length=30
    )
    
class LoginUser(BaseModel):

    email: EmailStr

    password: str = Field(
        min_length=6,
        max_length=30
    )