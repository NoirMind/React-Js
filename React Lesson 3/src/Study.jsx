import React from 'react'
import tel from "./assets/img/tel.jpg";
import tel2 from "./assets/img/tel2.jpg";

function Study() {
  return (
    <div className='container study-products'>
        <div className="variant">
         <img className='shop-img' src={tel} alt="photo" style={{ width: "200px", height: "240px"}}/>
         <p className='shop-p-second'>Смартфон Infinix Note 50 Pro, 12+12/256Гб, AMOLED 144Гц, 5200mAч 90W, беспроводная зарядка</p>
         <p className='shop-p'>3 282 020 сум</p>
         <p>⭐⭐⭐⭐</p>
         <mark shop-mark>237 220 сумм/мес</mark>
         <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant">
         <img className='shop-img' src={tel2} alt="photo" style={{ width: "200px", height: "240px"}}/>
         <p className='shop-p-second'>IPhone 17 Pro/Pro Max,256/512/17 Pro Max 256 по цене 17 Pro /Apple/IMEI-пройден беспроводная</p>
         <p className='shop-p'>18 584 280 сум</p>
         <p>⭐⭐⭐⭐</p>
         <mark shop-mark>18 584 280 сумм/мес</mark>
         <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
    </div>
  )
}

export default Study