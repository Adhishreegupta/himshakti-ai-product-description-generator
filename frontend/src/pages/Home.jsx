import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import Footer from "../components/Footer"

function Home(){

return(

<>

<Navbar/>

<Hero/>

<section className="py-28 px-8 w-full px-4 sm:px-6 lg:px-8">

<div className="max-w-7xl mx-auto">
<div className="text-center w-full flex flex-col items-center">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
    Why Choose CopyCart AI?
  </h1>

  <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg text-center max-w-2xl">
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

<Footer/>

</>

)

}

export default Home