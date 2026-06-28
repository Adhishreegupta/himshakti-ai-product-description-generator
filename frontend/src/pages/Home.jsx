import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import Footer from "../components/Footer"

function Home(){

const [products,setProducts]=useState([])

useEffect(()=>{

axios
.get(
"http://127.0.0.1:8000/products"
)

.then((res)=>{

setProducts(
res.data
)

})

.catch((err)=>{

console.log(err)

})

},[])

return(

<>

<Navbar/>

<Hero/>

<section className="py-28 px-4 sm:px-6 lg:px-8">

<div className="max-w-7xl mx-auto">

<div className="text-center flex flex-col items-center">

<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">

Why Choose CopyCart AI?

</h1>

<p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl">

Create high-converting product listings in seconds.

</p>

</div>

<div
className="
grid
md:grid-cols-3
gap-10
mt-20
"
>

<Card title="AI Description"/>

<Card title="SEO Optimized"/>

<Card title="Tone Selection"/>

</div>

</div>

</section>


{/* Backend Connected Section */}

<section className="pb-28 px-6">

<div className="max-w-7xl mx-auto">

<h2 className="text-3xl font-bold text-center mb-12">

Live Product Data

</h2>

<div className="grid md:grid-cols-2 gap-8">

{

products.map((p)=>(

<div

key={p.id}

className="bg-white rounded-3xl shadow-xl p-8"

>

<h3 className="text-2xl font-bold">

{p.name}

</h3>

<p className="mt-3">

Ingredients:
{p.ingredients}

</p>

<p>

Weight:
{p.weight}

</p>

<p>

Features:
{p.features}

</p>

<p>

Tone:
{p.tone}

</p>

</div>

))

}

</div>

</div>

</section>

<Footer/>

</>

)

}

export default Home