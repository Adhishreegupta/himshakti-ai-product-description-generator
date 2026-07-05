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

<p className="mt-6 text-emarald-600 text-base sm:text-lg max-w-2xl">

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


{/* Live Products */}

<section className="py-24 px-6 bg-green-50">

<div className="max-w-6xl mx-auto">

<div className="text-center mb-14">

<h2 className="text-5xl font-bold text-green-800">

🌿 Live Products

</h2>

<p className="mt-4 text-gray-600 text-lg">

Recently added products from our marketplace.

</p>

</div>

<div className="space-y-8">

{products
.slice(0, 4)
.map((p) => (

<div

key={p.id}

className="
bg-white
rounded-3xl
shadow-xl
hover:shadow-green-400/30
transition
duration-300
flex
items-center
overflow-hidden
"

>

<img

src={`http://127.0.0.1:8000${p.image}`}

alt={p.name}

className="
w-40
h-40
object-cover
flex-shrink-0
"

/>

<div className="flex-1 p-8">

<div className="flex justify-between items-start">

<div>

<h3 className="text-2xl font-bold text-gray-800">

{p.name}

</h3>

<p className="text-gray-500 mt-1">

{p.weight}

</p>

</div>

<span
className="
bg-green-600
text-white
px-4
py-2
rounded-full
text-sm
font-semibold
"
>

{p.tone}

</span>

</div>

<p className="mt-5 text-gray-600 leading-7">

{p.features.length > 120
? p.features.substring(0,120) + "..."
: p.features}

</p>

<button
className="
mt-6
text-green-700
font-semibold
hover:underline
"
>

Read More →

</button>

</div>

</div>

))}

</div>

</div>

</section>

<Footer/>

</>

)

}

export default Home