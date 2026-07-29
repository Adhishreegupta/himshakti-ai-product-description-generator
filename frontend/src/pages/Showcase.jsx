import { useState } from "react";

import {
Button,
Input,
Modal,
Toast,
Loader,
} from "../components/ui";

function Showcase() {

  const products = [
    {
      name: "Himalayan Organic Honey",
      weight: "500g",
      tone: "Premium",
      description:
        "Pure Himalayan honey collected from natural forests. Rich in taste and natural nutrients."
    },
    {
      name: "Traditional Millet Cookies",
      weight: "250g",
      tone: "Traditional",
      description:
        "Healthy millet cookies made using traditional recipes and wholesome ingredients."
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-center mb-12">
        AI Generated Creations
      </h1>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product,index)=>(

          <div
          key={index}
          className="bg-gray-900 p-6 rounded-xl border border-gray-700"
          >

            <h2 className="text-2xl font-bold">
              {product.name}
            </h2>

            <p className="text-green-400 mt-2">
              {product.tone}
            </p>

            <p className="mt-3 text-gray-300">
              Weight: {product.weight}
            </p>

            <p className="mt-5 text-gray-400">
              {product.description}
            </p>


            <button
            className="mt-5 bg-green-600 px-5 py-2 rounded-full"
            >
              View Details
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Showcase;

