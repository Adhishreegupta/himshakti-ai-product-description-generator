from pydantic import BaseModel
from pydantic import BaseModel

class Product(BaseModel):
    id: int
    name: str
    ingredients: str
    weight: str
    features: str
    tone: str
    image: str  | None = None

class Product(BaseModel):
    id:int
    name:str
    ingredients:str
    weight:str
    features:str
    tone:str