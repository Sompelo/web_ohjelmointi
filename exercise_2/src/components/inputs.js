import React, { useState } from 'react'

export default function Inputs(props)
{
    const [product, setProduct] = useState("");
    return <div>
        <div>Teksti: <input type="type" value = { product } onChange = { (event) => setProduct(event.target.value)}/></div>
        <button onClick = { () => props.onAddClick(product)}>Lisää</button>
        
    </div>
}