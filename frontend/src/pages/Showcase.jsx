import { useState } from "react";

import {
Button,
Input,
Modal,
Toast,
Loader,
} from "../components/ui";

function Showcase() {

const [open,setOpen]=useState(false)

const [showToast,setShowToast]=useState(false)

return(

<div className="p-10 space-y-10">

<h1 className="text-5xl">
UI Components
</h1>

<div className="flex gap-5">

<Button>
Primary
</Button>

<Button variant="secondary">
Secondary
</Button>

<Button variant="outline">
Outline
</Button>

</div>

<Input
label="Email"
placeholder="Enter email"
/>

<Button
onClick={()=>setOpen(true)}
>
Open Modal
</Button>

<Button
variant="secondary"
onClick={()=>{
setShowToast(true)

setTimeout(()=>{
setShowToast(false)
},3000)

}}
>
Show Toast
</Button>

<div>

<h2 className="mb-3">
Loader Example
</h2>

<div className="w-fit">
<Loader/>
</div>

</div>

<Modal
isOpen={open}
onClose={()=>setOpen(false)}
title="Demo Modal"
>

<p>
This is modal component.
</p>

</Modal>

{
showToast
&&
<Toast
message="Component Working"
/>
}

</div>

)

}

export default Showcase