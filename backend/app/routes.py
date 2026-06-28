from fastapi import APIRouter, HTTPException
from app.models import Product

router = APIRouter()

products=[]


@router.get("/products")
def get_products():

    return products


@router.get("/products/{product_id}")
def get_product(product_id:int):

    for p in products:

        if p["id"]==product_id:

            return p

    raise HTTPException(
        status_code=404,
        detail="Product not found"
    )


@router.post("/products",status_code=201)
def create_product(product:Product):

    products.append(product.model_dump())

    return {
        "message":"Product created",
        "data":product
    }


@router.put("/products/{product_id}")
def update_product(
product_id:int,
updated:Product
):

    for i,p in enumerate(products):

        if p["id"]==product_id:

            products[i]=updated.model_dump()

            return {
                "message":"Updated"
            }

    raise HTTPException(
        status_code=404,
        detail="Product not found"
    )


@router.delete("/products/{product_id}")
def delete_product(product_id:int):

    global products

    for p in products:

        if p["id"]==product_id:

            products=[
                x
                for x
                in products
                if x["id"]!=product_id
            ]

            return {
                "message":"Deleted"
            }

    raise HTTPException(
        status_code=404,
        detail="Product not found"
    )


@router.get("/products/search")
def search(name:str):

    result=[

        p

        for p in products

        if name.lower()

        in p["name"].lower()

    ]

    return result