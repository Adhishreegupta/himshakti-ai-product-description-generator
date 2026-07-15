import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CreateProduct() {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    ingredients: "",
    weight: "",
    features: "",
    tone: "",
    price: "",
  });

  const [description, setDescription] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const generateDescription = async () => {
    if (
      !product.name ||
      !product.ingredients ||
      !product.weight ||
      !product.features ||
      !product.tone
    ) {
      alert("Please fill all product details first.");
      return;
    }

   setError("");
   setLoadingAI(true);

    try {
  const response = await axios.post(
    "http://127.0.0.1:8000/generate-description",
    {
      name: product.name,
      ingredients: product.ingredients,
      weight: product.weight,
      features: product.features,
      tone: product.tone,
    }
  );

  setDescription(response.data.description);

} catch (error) {

  setError("Failed to generate AI description. Please try again.");

} finally {

  setLoadingAI(false);

}
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("id", product.id);
    formData.append("name", product.name);
    formData.append("ingredients", product.ingredients);
    formData.append("weight", product.weight);
    formData.append("features", product.features);
    formData.append("tone", product.tone);
    formData.append("price", product.price);
    formData.append("description", description);
    formData.append("image", selectedImage);

    try {
      const token = localStorage.getItem("token");

await axios.post(
  "http://127.0.0.1:8000/products",
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  }
);

      setMessage("✅ Product Added Successfully!");

      setProduct({
        id: "",
        name: "",
        ingredients: "",
        weight: "",
        features: "",
        tone: "",
        price: "",
      });

      setDescription("");
      setSelectedImage(null);
      setPreview(null);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.detail);
      } else {
        setMessage("Backend Connection Error");
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black py-20">
        <div className="max-w-3xl mx-auto bg-zinc-900 rounded-2xl shadow-2xl p-10">

          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Create Product
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="number"
              name="id"
              placeholder="Product ID"
              value={product.id}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
            />

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
            />

            <textarea
              name="ingredients"
              rows="3"
              placeholder="Ingredients"
              value={product.ingredients}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
            />

            <input
              type="text"
              name="weight"
              placeholder="Weight"
              value={product.weight}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
            />
            <input
  type="number"
  name="price"
  placeholder="Price (₹)"
  value={product.price}
  onChange={handleChange}
  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
  required
/>
            <textarea
              name="features"
              rows="3"
              placeholder="Features"
              value={product.features}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
            />

            <select
              name="tone"
              value={product.tone}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
            >
              <option value="">Choose Tone</option>
              <option value="Premium">Premium</option>
              <option value="Traditional">Traditional</option>
              <option value="Health-Focused">Health-Focused</option>
              <option value="Friendly">Friendly</option>
            </select>

            <button
              type="button"
              onClick={generateDescription}
              disabled={loadingAI}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold"
            >
              {loadingAI
                ? "Generating...⏳"
                : "✨ Generate AI Description"}
            </button>
            {error && (  <p className="text-red-500 font-semibold mb-3">
            {error}
            </p>
             )}
            <textarea
              rows="8"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Generated description will appear here..."
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
            />

            <div>
              <label className="text-white font-semibold">
                Upload Product Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 block w-full text-white"
                required
              />
            </div>

            {preview && (
              <div className="mt-5">
                <p className="text-white mb-3 font-semibold">
                  Preview
                </p>

                <img
                  src={preview}
                  alt="Preview"
                  className="w-64 h-64 rounded-xl object-cover border-2 border-green-500 shadow-lg"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition"
            >
              Add Product
            </button>

          </form>

          {message && (
            <p className="text-center mt-6 text-green-400 font-bold">
              {message}
            </p>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateProduct;