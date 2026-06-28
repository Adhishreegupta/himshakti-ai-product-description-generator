from pydantic import BaseModel


class Product(BaseModel):
    id:int
    name:str
    ingredients:str
    weight:str
    features:str
    tone:str