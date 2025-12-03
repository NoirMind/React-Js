import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'


function Fetch() {
    const [value, setValue] = useState()
    const [allProduct, setProduct] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data.products)
        })
    }, [])

    return (
    <div>
      <Category data={allProduct} />
    </div>
  );
}

export default Fetch

function Category() {
  return (
    <div className='container shop-boxes'>
        <div className="variant">
            
        </div>
    </div>
  )
}

export default Category