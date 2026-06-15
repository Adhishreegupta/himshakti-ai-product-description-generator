import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import hero from "../assets/hero-bg1.jpg"

function Login(){

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

<div className="absolute inset-0 bg-black/60"/>

<div
className="
relative
z-10
flex
justify-center
items-center
pt-32
pb-20
"
>

<div
className="
bg-white/15
backdrop-blur-xl
border
border-white/20
rounded-[40px]
p-12
w-full
max-w-md
text-white
"
>

<h1
className="
text-4xl
font-bold
"
>

Welcome Back

</h1>

<p
className="
mt-4
text-gray-200
"
>

Continue creating high-converting listings.

</p>

<input
type="email"
placeholder="Email"

className="
w-full
mt-8
p-5
rounded-2xl
bg-white/10
border
border-white/20
"
/>

<input
type="password"
placeholder="Password"

className="
w-full
mt-4
p-5
rounded-2xl
bg-white/10
border
border-white/20
"
/>

<button
className="
w-full
mt-8
bg-green-600
hover:bg-green-700
rounded-2xl
p-5
font-medium
duration-300
"
>

Login

</button>

</div>

</div>

</section>

</main>

<Footer/>

</>

)

}

export default Login