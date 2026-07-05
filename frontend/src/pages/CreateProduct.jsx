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
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("id", product.id);
    formData.append("name", product.name);
    formData.append("ingredients", product.ingredients);
    formData.append("weight", product.weight);
    formData.append("features", product.features);
    formData.append("tone", product.tone);
    formData.append("image", selectedImage);

    try {

      await axios.post(

        "http://127.0.0.1:8000/products",

        formData,

        {
          headers: {
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
      });

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
              placeholder="Ingredients"
              rows="3"
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

            <textarea
              name="features"
              placeholder="Features"
              rows="3"
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
              <option value="Traditional">Traditional</option>
              <option value="Modern">Modern</option>
              <option value="Luxury">Luxury</option>
              <option value="Friendly">Friendly</option>
            </select>

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