import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import hero from "../assets/hero-bg1.jpg"

function Dashboard(){

return(

<>
<br></br>
<Navbar/>
<br></br>
<main>

<section
className="
relative
min-h-screen
bg-cover
bg-center
"
style={{
backgroundImage:`url(${hero})`
}}
>

<div className="absolute inset-0 bg-[#062615]/80"/>

<div
className="
relative
z-10
max-w-7xl
mx-auto
px-8
pt-40
pb-20
"
>

<h1
className="
text-white
text-5xl
font-bold
"
>

Dashboard

</h1>

<p
className="
text-green-200
mt-5
"
>

Monitor and manage generated listings.

</p>

<div
className="
grid
md:grid-cols-3
gap-8
mt-16
"
>

{[
["124","Generated"],
["42","Saved"],
["3","Tone Styles"]
].map(([num,title])=>(

<div
key={title}

className="
bg-white/10
backdrop-blur-lg
border
border-white/20
rounded-3xl
p-10
text-white
"
>

<h2 className="text-5xl font-bold">

{num}

</h2>

<p className="mt-4">

{title}

</p>

</div>

))}

</div>

<div
className="
mt-12
bg-white
rounded-3xl
p-10
"
>

<h2 className="text-2xl font-semibold">

Recent Activity

</h2>

<p className="text-gray-500 mt-3">

No descriptions generated yet.

</p>

</div>

</div>

</section>

</main>

<Footer/>

</>

)

}

export default Dashboard