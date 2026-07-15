import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)
print("Loaded NEW ai.py")
def generate_product_description(
    name,
    ingredients,
    weight,
    features,
    tone,
):
    prompt = f"""
You are an expert Amazon product copywriter.

Generate an attractive e-commerce product description.

Product Name: {name}
Ingredients: {ingredients}
Weight: {weight}
Features: {features}
Tone: {tone}

Requirements:
- 120-180 words
- SEO friendly
- Professional
- Highlight benefits
"""
    print("Using model: gemini-2.5-flash-lite")
    response = client.models.generate_content(
        model="gemini-3.1-flash-lite",
        contents=prompt,
    )

    return response.text