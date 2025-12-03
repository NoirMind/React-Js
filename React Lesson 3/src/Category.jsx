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


function Category({data}) {
  return (
    <div className='container shop-boxes'>
        {data.map((item) => {
    return (
        <div key={item.id} className='product'>
            <img
                className='shop-img'
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "200px", height: "240px" }}
            />
            <p className='shop-p-second'>{item.title}</p>
            <p className='shop-p'>{item.price} сум</p>
            <p>⭐️⭐️⭐️⭐️</p>
            <mark className='shop-mark'>{Math.floor(item.price / 12)} сум/мес</mark>
            <button className="shopBtn">
                <i className="fa-solid fa-bag-shopping"></i> Savat
            </button>
        </div>
    )
})}

    </div>
  )
}

export default Fetch;