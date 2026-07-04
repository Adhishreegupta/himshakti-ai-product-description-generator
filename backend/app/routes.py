from fastapi import APIRouter, HTTPException
from app.models import Product
from app.database import products_collection

router = APIRouter()


# ==========================
# GET ALL PRODUCTS
# ==========================
@router.get("/products")
def get_products():

    products = list(products_collection.find({}, {"_id": 0}))

    return products


# ==========================
# SEARCH PRODUCTS
# ==========================
@router.get("/products/search")
def search(name: str):

    products = list(

        products_collection.find(

            {
                "name": {
                    "$regex": name,
                    "$options": "i"
                }
            },

            {
                "_id": 0
            }

        )

    )

    return products


# ==========================
# GET SINGLE PRODUCT
# ==========================
@router.get("/products/{product_id}")
def get_product(product_id: int):

    product = products_collection.find_one(

        {
            "id": product_id
        },

        {
            "_id": 0
        }

    )

    if product:

        return product

    raise HTTPException(

        status_code=404,

        detail="Product not found"

    )


# ==========================
# CREATE PRODUCT
# ==========================
@router.post("/products", status_code=201)
def create_product(product: Product):

    existing = products_collection.find_one(

        {
            "id": product.id
        }

    )

    if existing:

        raise HTTPException(

            status_code=400,

            detail="Product ID already exists"

        )

    products_collection.insert_one(

        product.model_dump()

    )

    return {

        "message": "Product created"

    }


# ==========================
# UPDATE PRODUCT
# ==========================
@router.put("/products/{product_id}")
def update_product(product_id: int, updated: Product):

    result = products_collection.update_one(

        {
            "id": product_id
        },

        {
            "$set": updated.model_dump()
        }

    )

    if result.matched_count == 0:

        raise HTTPException(

            status_code=404,

            detail="Product not found"

        )

    return {

        "message": "Updated successfully"

    }


# ==========================
# DELETE PRODUCT
# ==========================
@router.delete("/products/{product_id}")
def delete_product(product_id: int):

    result = products_collection.delete_one(

        {
            "id": product_id
        }

    )

    if result.deleted_count == 0:

        raise HTTPException(

            status_code=404,

            detail="Product not found"

        )

    return {

        "message": "Deleted successfully"

    }