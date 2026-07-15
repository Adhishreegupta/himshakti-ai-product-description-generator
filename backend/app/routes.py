from fastapi import APIRouter, HTTPException, UploadFile, File, Form, Depends
from app.models import Product, DescriptionRequest
from app.database import products_collection
from app.dependencies import verify_token
from app.ai import generate_product_description
import shutil
import os

router = APIRouter()


# ==========================
# GET ALL PRODUCTS (Public)
# ==========================
@router.get("/products")
def get_products():

    products = list(
        products_collection.find({}, {"_id": 0})
    )

    return products


# ==========================
# SEARCH PRODUCTS (Public)
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
# GET SINGLE PRODUCT (Public)
# ==========================
@router.get("/products/{product_id}")
def get_product(product_id: int):

    product = products_collection.find_one(
        {"id": product_id},
        {"_id": 0}
    )

    if product:
        return product

    raise HTTPException(
        status_code=404,
        detail="Product not found"
    )


# ==========================
# CREATE PRODUCT (Protected)
# ==========================
@router.post("/products", status_code=201)
async def create_product(

    user=Depends(verify_token),

    id: int = Form(...),
    name: str = Form(...),
    ingredients: str = Form(...),
    weight: str = Form(...),
    features: str = Form(...),
    tone: str = Form(...),
    price: float = Form(...),

    # Optional AI Description
    description: str = Form(""),

    image: UploadFile = File(...)

):

    existing = products_collection.find_one(
        {"id": id}
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Product ID already exists"
        )

    os.makedirs("uploads", exist_ok=True)

    filename = image.filename

    filepath = os.path.join(
        "uploads",
        filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(
            image.file,
            buffer
        )

    product = {

        "id": id,
        "name": name,
        "ingredients": ingredients,
        "weight": weight,
        "features": features,
        "tone": tone,
        "price": price,
        "description": description,
        "image": f"/uploads/{filename}"

    }

    products_collection.insert_one(product)

    return {
        "message": "Product Created Successfully"
    }


# ==========================
# GENERATE AI DESCRIPTION
# ==========================
@router.post("/generate-description")
def generate_description(data: DescriptionRequest):

    description = generate_product_description(

        name=data.name,
        ingredients=data.ingredients,
        weight=data.weight,
        features=data.features,
        tone=data.tone,

    )

    return {
        "description": description
    }


# ==========================
# UPDATE PRODUCT (Protected)
# ==========================
@router.put("/products/{product_id}")
def update_product(

    product_id: int,
    updated: Product,
    user=Depends(verify_token)

):

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
# DELETE PRODUCT (Protected)
# ==========================
@router.delete("/products/{product_id}")
def delete_product(

    product_id: int,
    user=Depends(verify_token)

):

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