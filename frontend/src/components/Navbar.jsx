import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Navbar(){

const [dark,setDark]=useState(
localStorage.getItem("theme")==="dark"
)

useEffect(()=>{

if(dark){

document.documentElement.classList.add("dark")

}

else{

document.documentElement.classList.remove("dark")

}

localStorage.setItem(
"theme",
dark?"dark":"light"
)

},[dark])

return(

<nav className="absolute top-0 left-0 w-full z-50">

<div className="max-w-7xl mx-auto px-8 py-6">

<div className="flex justify-between items-center">

<h1 className="text-3xl font-bold text-white">

CopyKart AI

</h1>

<div className="flex items-center gap-8">

<div className="hidden md:flex gap-10 text-white font-medium">

<Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/dashboard">Dashboard</Link>

<Link to="/login">Login</Link>

</div>

<button
onClick={()=>setDark(!dark)}
className="
bg-green-600
hover:bg-green-700
text-white
px-4
py-2
rounded-lg
duration-300
"
>

{dark ? "☀ Light" : "🌙 Dark"}

</button>

</div>

</div>

</div>

</nav>

)

}

export default Navbar