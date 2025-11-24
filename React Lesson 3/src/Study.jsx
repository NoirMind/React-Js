import React from 'react'
import tel from "./assets/img/tel.jpg";
import tel2 from "./assets/img/tel2.jpg";
import tel3 from "./assets/img/tel3.jpg";
import tel4 from "./assets/img/tel4.jpg";

function Study() {
  return (
    <div className='container home-boxes'>
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
         <mark shop-mark>1 584 280 сумм/мес</mark>
         <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant">
         <img className='shop-img' src={tel3} alt="photo" style={{ width: "200px", height: "240px"}}/>
         <p className='shop-p-second'>Складной смартфон-планшет HONOR Magic V3 с гибким экраном Fold, NFC, 12/512 GB, 5G беспроводная</p>
         <p className='shop-p'>16 561 020сум</p>
         <p>⭐⭐⭐⭐</p>
         <mark shop-mark>11 197 012сумм/мес</mark>
         <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant">
         <img className='shop-img' src={tel4} alt="photo" style={{ width: "200px", height: "240px"}}/>
         <p className='shop-p-second'>Смартфон Motorola G35 5G, 8/256 GB, 6.72”, аккумулятор 5000 мАч, NFC, 12/512 GB, 5G беспроводная</p>
         <p className='shop-p'>16 561 020сум</p>
         <p>⭐⭐⭐⭐</p>
         <mark shop-mark>140 958сумм/мес</mark>
         <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
    </div>
  )
}

export default Study