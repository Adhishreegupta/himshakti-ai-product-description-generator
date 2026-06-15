function Card({title}){

return(

<div
className="bg-white rounded-3xl p-10
shadow-sm hover:shadow-xl
duration-500
hover:-translate-y-2"
>

<div
className="
w-16
h-16
rounded-2xl
bg-green-100
mb-6
"
/>

<h2
className="
text-3xl
font-semibold
mb-5
"
>

{title}

</h2>

<p
className="
text-gray-600
leading-8
"
>

Generate compelling product content,
SEO optimization,
and AI-enhanced e-commerce listings.

</p>

</div>

)

}

export default Card