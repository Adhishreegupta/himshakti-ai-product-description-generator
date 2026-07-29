import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    axios
      .get(`http://127.0.0.1:8000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);


  if (!product) {

    return (
      <>
        <Navbar />

        <div className="
          min-h-screen 
          flex 
          justify-center 
          items-center 
          text-3xl 
          bg-[#021a0b]
          text-white
        ">
          Loading...
        </div>

        <Footer />
      </>
    );

  }


  return (

    <>

      <Navbar />


      <div
        className="
        min-h-screen
        py-24
        bg-gradient-to-br
        from-[#021a0b]
        via-[#052e16]
        to-[#0f5132]
        "
      >


        <div
          className="
          max-w-7xl
          mx-auto
          bg-[#0b1f14]/90
          backdrop-blur-xl
          border
          border-green-500/20
          rounded-3xl
          shadow-2xl
          p-10
          "
        >


          <div className="grid lg:grid-cols-2 gap-14">


            {/* Image */}

            <div>

              <img
                src={`http://127.0.0.1:8000${product.image}`}
                alt={product.name}
                className="
                w-full
                rounded-3xl
                shadow-2xl
                border
                border-white/10
                "
              />

            </div>



            {/* Product Info */}


            <div>


              <h1 className="
              text-5xl
              font-bold
              text-white
              ">
                {product.name}
              </h1>



              <p className="
              text-green-400
              text-xl
              mt-4
              ">
                ⭐⭐⭐⭐⭐ 4.8 (256 Reviews)
              </p>




              <div className="mt-8">

                <span
                  className="
                  bg-green-600
                  text-white
                  px-5
                  py-2
                  rounded-full
                  "
                >
                  {product.tone}
                </span>

              </div>




              <p className="
              mt-8
              text-5xl
              font-bold
              text-red-500
              ">
                ₹{product.price}
              </p>




              <p className="
              text-green-300
              font-semibold
              mt-2
              ">
                In Stock
              </p>




              <div className="flex gap-5 mt-10">


                <button
                  className="
                  bg-yellow-400
                  hover:bg-yellow-500
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  transition
                  "
                >
                  Add to Cart
                </button>



                <button
                  className="
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  transition
                  "
                >
                  Buy Now
                </button>


              </div>


            </div>


          </div>





          {/* Description */}


          <div className="mt-20">


            <h2 className="
            text-3xl
            font-bold
            text-white
            ">
              AI Generated Description
            </h2>



            <p className="
            mt-5
            leading-9
            text-gray-300
            ">
              {product.description}
            </p>


          </div>





          {/* Ingredients */}


          <div className="mt-16">


            <h2 className="
            text-3xl
            font-bold
            text-white
            ">
              Ingredients
            </h2>



            <p className="
            mt-5
            text-gray-300
            leading-8
            ">
              {product.ingredients}
            </p>


          </div>





          {/* Features */}


          <div className="mt-16">


            <h2 className="
            text-3xl
            font-bold
            text-white
            ">
              Features
            </h2>



            <p className="
            mt-5
            text-gray-300
            leading-8
            ">
              {product.features}
            </p>


          </div>





          {/* Weight */}


          <div className="mt-16">


            <h2 className="
            text-3xl
            font-bold
            text-white
            ">
              Weight
            </h2>



            <p className="
            mt-5
            text-gray-300
            ">
              {product.weight}
            </p>


          </div>





          <Link
            to="/"
            className="
            inline-block
            mt-16
            bg-green-600
            hover:bg-green-700
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            transition
            "
          >
            ← Back to Home
          </Link>



        </div>


      </div>



      <Footer />

    </>

  );

}


export default ProductDetails;