import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/hero-bg1.jpg";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
function Dashboard() {
  
  const [products, setProducts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(true);
const [editProduct, setEditProduct] = useState({
  id: "",
  name: "",
  ingredients: "",
  weight: "",
  price: "",
  features: "",
  tone: "",
  image: "",
});
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => { setLoading(true);

    try {
      const token = localStorage.getItem("token");

const response = await axios.get(
    "http://127.0.0.1:8000/products",
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
);
setProducts(response.data);
    
    } catch (error) {
      console.log(error);
       toast.error("Failed to load products.");
      
    }finally {

    setLoading(false);

  }
  };
const deleteProduct = async () => {

  try {
    const token = localStorage.getItem("token");
    await axios.delete(
      `http://127.0.0.1:8000/products/${selectedProduct.id}`,
       {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);


    await fetchProducts();
    toast.success("Product Deleted Successfully!");

    setShowDeleteModal(false);

    setSelectedProduct(null);

  } catch (error) {

    console.log(error);
    toast.error("Failed to delete product.");

  }

};
const openEditModal = (product) => {

  setEditProduct(product);

  setShowEditModal(true);

};

const handleEditChange = (e) => {

  setEditProduct({

    ...editProduct,

    [e.target.name]: e.target.value,

  });

};

const saveChanges = async () => {

  try {
    const token = localStorage.getItem("token");

    await axios.put(

      `http://127.0.0.1:8000/products/${editProduct.id}`,

      editProduct,
      {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

    );

    setShowEditModal(false);

    await fetchProducts();

    toast.success("Product Updated Successfully!");

    

  }

  catch(error){

    console.log(error);

    toast.error("Update Failed");

  }

};
  return (
    <>
      <Navbar />

      <main>

        <section
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >

          <div className="absolute inset-0 bg-[#062615]/80"></div>

          <div
            className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-8
            pt-32
            pb-20
            "
          >

            <h1 className="text-white text-5xl font-bold">

              Dashboard

            </h1>

            <p className="text-green-200 mt-5 text-lg">

              Monitor and manage your AI generated product listings.

            </p>

            {/* Statistics */}

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-white">

                <h2 className="text-5xl font-bold">

                  {products.length}

                </h2>

                <p className="mt-4">

                  Products

                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-white">

                <h2 className="text-5xl font-bold">

                  AI

                </h2>

                <p className="mt-4">

                  Description Generator

                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-white">

                <h2 className="text-5xl font-bold">

                  4

                </h2>

                <p className="mt-4">

                  Tone Styles

                </p>

              </div>

            </div>

            {/* Products */}

            <div className="mt-20">

              <h2 className="text-white text-4xl font-bold mb-10">

                Your Products

              </h2>

              {loading ? (<Loader />) :  products.length === 0 ? (

                <div className="bg-white rounded-3xl p-10 text-center shadow-xl">

                  <h3 className="text-2xl font-bold">

                    No Products Added Yet

                  </h3>

                  <p className="text-gray-500 mt-3">

                    Create your first product to see it here.

                  </p>

                </div>

              ) : (

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                  {products.map((product) => (

                    <div
                      key={product.id}
                      className="
                      bg-white
                      rounded-3xl
                      overflow-hidden
                      shadow-2xl
                      hover:shadow-green-500/30
                      hover:-translate-y-2
                      transition
                      duration-300
                      "
                    >

                      <img
                        src={`http://127.0.0.1:8000${product.image}`}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                      />

                      <div className="p-6">

                        <h2 className="text-2xl font-bold text-gray-800">

                          {product.name}

                        </h2>
                        <p className="text-3xl font-bold text-green-700 mt-2">
  ₹{product.price}
</p>
                        <div className="mt-4 space-y-3 text-gray-700">

                          <p>

                            <span className="font-semibold">

                              Weight:

                            </span>{" "}

                            {product.weight}

                          </p>

                          <p>

                            <span className="font-semibold">

                              Ingredients:

                            </span>

                            <br />

                            {product.ingredients}

                          </p>                            
                          <p>

<span className="font-semibold">

Description:

</span>

<br/>

{product.description
  ? (
      product.description.length > 120
        ? product.description.substring(0, 120) + "..."
        : product.description
    )
  : "No description available."}

</p>
                        </div>

                        <span
                          className="
                          inline-block
                          mt-5
                          px-4
                          py-2
                          rounded-full
                          bg-green-600
                          text-white
                          font-semibold
                          "
                        >

                          {product.tone}

                        </span>

                        <div className="mt-6">

<Link

to={`/product/${product.id}`}

className="
inline-block
mb-5
text-green-700
font-bold
hover:underline
"

>

Read More →

</Link>

<div className="flex gap-4">

<button

onClick={() => openEditModal(product)}

className="
flex-1
bg-blue-600
hover:bg-blue-700
text-white
py-3
rounded-xl
font-semibold
"

>

Update

</button>

<button

onClick={() => {

setSelectedProduct(product);

setShowDeleteModal(true);

}}

className="
flex-1
bg-red-600
hover:bg-red-700
text-white
py-3
rounded-xl
font-semibold
"

>

Delete

</button>

</div>

</div>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

        </section>

      </main>
      {showDeleteModal && (

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

<div className="bg-zinc-900 rounded-3xl p-8 w-[420px] border border-green-700 shadow-2xl">

<div className="text-center">

<div className="text-6xl mb-4">

⚠️

</div>

<h2 className="text-3xl font-bold text-white">

Delete Product

</h2>

<p className="text-gray-400 mt-5">

Are you sure you want to delete

</p>

<p className="text-green-400 text-xl font-semibold mt-2">

{selectedProduct?.name}

</p>

<p className="text-red-400 mt-4">

This action cannot be undone.

</p>

<div className="flex gap-4 mt-8">

<button

onClick={() => {

setShowDeleteModal(false);

setSelectedProduct(null);

}}

className="
flex-1
py-3
rounded-xl
bg-gray-700
hover:bg-gray-600
text-white
font-semibold
"

>

Cancel

</button>

<button

onClick={deleteProduct}

className="
flex-1
py-3
rounded-xl
bg-red-600
hover:bg-red-700
text-white
font-semibold
"

>

Delete

</button>

</div>

</div>

</div>

</div>

)}
{showEditModal && (

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

<div className="bg-zinc-900 w-[650px] rounded-3xl p-8 border border-green-700">

<h2 className="text-3xl font-bold text-white mb-8">

Edit Product

</h2>

<div className="space-y-5">

<input
type="text"
name="name"
value={editProduct.name}
onChange={handleEditChange}
placeholder="Product Name"
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>

<input
type="text"
name="image"
value={editProduct.image}
onChange={handleEditChange}
placeholder="Image Path"
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>

<textarea
name="ingredients"
value={editProduct.ingredients}
onChange={handleEditChange}
rows={3}
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>

<input
type="text"
name="weight"
value={editProduct.weight}
onChange={handleEditChange}
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>
<input
type="number"
name="price"
value={editProduct.price}
onChange={handleEditChange}
placeholder="Price"
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>
<textarea
name="features"
value={editProduct.features}
onChange={handleEditChange}
rows={3}
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>

<select

name="tone"

value={editProduct.tone}

onChange={handleEditChange}

className="w-full p-4 rounded-xl bg-zinc-800 text-white"

>

<option>Traditional</option>

<option>Modern</option>

<option>Luxury</option>

<option>Friendly</option>

</select>

<div className="flex gap-4 pt-4">

<button

onClick={() => setShowEditModal(false)}

className="
flex-1
py-3
rounded-xl
bg-gray-600
hover:bg-gray-500
text-white
"

>

Cancel

</button>

<button

onClick={saveChanges}

className="
flex-1
py-3
rounded-xl
bg-green-600
hover:bg-green-700
text-white
"

>

Save Changes

</button>

</div>

</div>

</div>

</div>

)}

      <Footer />

    </>
  );
}

export default Dashboard;