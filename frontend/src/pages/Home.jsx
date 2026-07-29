import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"


function Home(){

const [products,setProducts]=useState([])


useEffect(()=>{

const token = localStorage.getItem("token")

if(!token){
  return
}

axios
.get(
"https://himshakti-backend-j6uf.onrender.com/products",
{
headers:{
Authorization:`Bearer ${token}`
}
}
)

.then((res)=>{
setProducts(res.data)
})

.catch((err)=>{
console.log(err)
})

},[])



return(

<>

<Navbar/>

<Hero/>



{/* WHY CHOOSE COPYKART AI */}


<section

className="
py-28
px-4
sm:px-6
lg:px-8
bg-green-50
dark:bg-[#021a0b]
transition-colors
duration-700
"

>


<div className="max-w-7xl mx-auto">



<div
className="
text-center
flex
flex-col
items-center
"
>


<h1

className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-gray-900
dark:text-white
transition-colors
duration-500
"

>

Why Choose CopyCart AI?

</h1>




<p

className="
mt-6
text-emerald-600
dark:text-emerald-400
text-base
sm:text-lg
max-w-2xl
transition-colors
duration-500
"

>

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





{/* EXPLORE AI CREATIONS */}



<section

className="
py-20
bg-white
dark:bg-[#052e16]
text-gray-900
dark:text-white
transition-colors
duration-700
"

>


<div

className="
max-w-5xl
mx-auto
text-center
px-6
"

>



<h2

className="
text-4xl
font-bold
transition-colors
duration-500
"

>

Explore AI Creations ✨

</h2>





<p

className="
mt-5
text-green-900
dark:text-green-300
text-lg
transition-colors
duration-500
"

>

See how CopyCart AI transforms simple product details into powerful e-commerce stories.

</p>





<Link to="/showcase">


<button

className="
mt-10
px-10
py-4
bg-green-400
dark:bg-green-500
text-black
font-semibold
hover:bg-green-300
dark:hover:bg-green-400
transition-colors
duration-500
"

>

Explore AI Creations →

</button>


</Link>



</div>


</section>
{/* LIVE PRODUCTS */}


<section

className="
py-24
px-6
bg-green-50
dark:bg-[#020617]
transition-colors
duration-700
"

>


<div className="max-w-6xl mx-auto">



<div className="text-center mb-14">


<h2

className="
text-5xl
font-bold
text-green-800
dark:text-green-400
transition-colors
duration-500
"

>

🌿 Live Products

</h2>




<p

className="
mt-4
text-gray-600
dark:text-gray-300
text-lg
transition-colors
duration-500
"

>

Recently added products from our marketplace.

</p>



</div>





<div className="space-y-8">



{
products.length === 0 && (

<p

className="
text-center
text-gray-500
dark:text-gray-400
text-lg
"

>

No products created yet. Start creating your first AI listing!

</p>

)

}




{
products
.slice(0,4)
.map((p)=>(



<div

key={p.id}

className="
bg-white
dark:bg-[#111827]
rounded-3xl
shadow-xl
dark:shadow-black/50
hover:shadow-green-400/30
transition-all
duration-500
flex
items-center
overflow-hidden
"

>



<img

src={`https://himshakti-backend-j6uf.onrender.com${p.image}`}

alt={p.name}

className="
w-40
h-40
object-cover
flex-shrink-0
bg-gray-100
dark:bg-gray-800
"

 />




<div className="flex-1 p-8">



<div className="flex justify-between items-start">



<div>


<h3

className="
text-2xl
font-bold
text-gray-800
dark:text-white
transition-colors
duration-500
"

>

{p.name}

</h3>




<p

className="
text-gray-500
dark:text-gray-400
mt-1
"

>

{p.weight}

</p>




<p

className="
mt-2
text-2xl
font-bold
text-green-700
dark:text-green-400
"

>

₹{p.price}

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





<p

className="
mt-5
text-gray-600
dark:text-gray-300
leading-7
"

>

{
p.description?.length > 120
?
p.description.substring(0,120)+"..."
:
p.description
}

</p>




<Link

to={`/product/${p.id}`}

className="
mt-6
inline-block
text-green-700
dark:text-green-400
font-semibold
hover:underline
"

>

Read More →

</Link>




</div>




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