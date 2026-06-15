import { Link } from "react-router-dom"

function Navbar(){

return(

<nav className="absolute top-0 left-0 w-full z-50">

<div className="max-w-7xl mx-auto px-8 py-6">

<div className="flex justify-between items-center">

<h1 className="text-3xl font-bold text-white">

CopyKart AI

</h1>

<div className="hidden md:flex gap-10 text-white font-medium">

<Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/dashboard">Dashboard</Link>

<Link to="/login">Login</Link>

</div>

</div>

</div>

</nav>

)

}

export default Navbar