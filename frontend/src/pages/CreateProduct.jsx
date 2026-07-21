import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
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
      toast.warning("Please fill all product details first.");
      return;
    }

   
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
   toast.success("AI Description Generated!");

} catch (error) {

  toast.error("Failed to generate AI description. Please try again.");

} finally {

  setLoadingAI(false);

}
  };
  const copyDescription = () => {

    navigator.clipboard.writeText(description);

    toast.success("Description Copied!");

};

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

      toast.success("Product Added Successfully!");

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
        toast.error(error.response.data.detail);
      } else {
        toast.error("Backend Connection Error");
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
              disabled={loadingAI}
            />

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
              disabled={loadingAI}
            />

            <textarea
              name="ingredients"
              rows="3"
              placeholder="Ingredients"
              value={product.ingredients}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
              disabled={loadingAI}
            />

            <input
              type="text"
              name="weight"
              placeholder="Weight"
              value={product.weight}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
              disabled={loadingAI}
            />
            <input
  type="number"
  name="price"
  placeholder="Price (₹)"
  value={product.price}
  onChange={handleChange}
  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
  required
  disabled={loadingAI}
/>
            <textarea
              name="features"
              rows="3"
              placeholder="Features"
              value={product.features}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
              disabled={loadingAI}
            />

            <select
              name="tone"
              value={product.tone}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              required
              disabled={loadingAI}
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
              {loadingAI ? (
  <div className="flex justify-center items-center gap-3">
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    <span>Generating AI Description...</span>
  </div>
) : (
  "✨ Generate AI Description"
          )}
            </button>
            
            {description && (
  <div className="bg-zinc-800 rounded-xl p-6 border border-green-600">
    <h2 className="text-green-400 font-bold mb-4">
      AI Generated Description
    </h2>

    <textarea
      rows="8"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="
      w-full
      bg-transparent
      text-white
      outline-none
      resize-none
      "
    />
  </div>
    )}
            {description && (
  <button
    type="button"
    onClick={generateDescription}
    disabled={loadingAI}
    className="
    w-full
    mt-4
    bg-purple-600
    hover:bg-purple-700
    text-white
    py-3
    rounded-xl
    font-semibold
    "
  >
    🔄 Regenerate Description
  </button>
  

)}
{description && (
  <button
    type="button"
    onClick={copyDescription}
    className="
    w-full
    mt-3
    bg-green-600
    hover:bg-green-700
    text-white
    py-3
    rounded-xl
    font-semibold
    "
  >
    📋 Copy Description
  </button>
)}
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
                disabled={loadingAI}
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

        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateProduct;