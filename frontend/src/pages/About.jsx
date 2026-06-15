import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import hero from "../assets/hero-bg1.jpg"

function About() {
return (

<>
<br></br>
<Navbar />
<br></br>
<main>

<section
className="relative min-h-screen bg-cover bg-center"
style={{
backgroundImage:`url(${hero})`
}}
>

<div className="absolute inset-0 bg-black/60"/>

<div
className="
relative
z-10
max-w-7xl
mx-auto
px-8
pt-40
pb-24
"
>

<p className="text-green-300 font-medium">

ABOUT COPYCART AI

</p>

<h1
className="
text-white
text-5xl
font-bold
mt-5
max-w-3xl
leading-tight
"
>

Transforming Product Details Into Stories That Sell

</h1>

<p
className="
text-gray-200
mt-8
max-w-2xl
text-lg
leading-9
"
>

CopyCart AI helps food businesses generate professional and SEO-ready product descriptions for e-commerce marketplaces.

</p>

<div
className="
grid
md:grid-cols-3
gap-8
mt-20
"
>

{[
"AI Content",
"SEO Growth",
"Fast Workflow"
].map((item)=>(

<div
key={item}

className="
backdrop-blur-lg
bg-white/10
border
border-white/20
rounded-3xl
p-8
text-white
"
>

<h2 className="text-2xl font-semibold">

{item}

</h2>

<p className="mt-4 text-gray-300">

Designed for modern brands.

</p>

</div>

))}

</div>

</div>

</section>

</main>

<Footer/>

</>

)

}

export default About