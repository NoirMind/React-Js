import React from 'react'

import kurtka from "./assets/img/kurtka.jpg";
import kurtka2 from "./assets/img/kurtka2.jpg";
import kurtka3 from "./assets/img/kurtka3.jpg";
import kurtka4 from "./assets/img/kurtka4.jpg";

function Category() {
  return (
    <div className='container shop-boxes'>
        <div className="variant">
            <img className='shop-img' src={kurtka} alt="photo" style={{ width: "200px", height: "240px"}}/>
            <p className='shop-p-second'>Куртка теплая женская мужская unisex зимняя y2k корейский стиль иссиқ аёллар эркаклар</p>
            <p className='shop-p'>287 000</p>
            <p>⭐⭐⭐⭐</p>
            <mark shop-mark>22900 сумм/мес</mark>
            <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant">
            <img className='shop-img' src={kurtka2} alt="photo" style={{ width: "200px", height: "240px"}}/>
            <p className='shop-p-second'>Куртка, утеплённая водоотталкивающая, маломерит на 1-1,5 размера, изучите табл</p>
            <p className='shop-p'>192 010</p>
            <p>⭐⭐⭐⭐</p>
            <mark shop-mark>14095 сумм/мес</mark>
            <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant">
            <img className='shop-img' src={kurtka3} alt="photo" style={{ width: "200px", height: "240px"}}/>
            <p className='shop-p-second'>Тапочки домашние иссиқ аёллар закрытые маломерит на 1-1,5 размера, изучите табл</p>
            <p className='shop-p'>80 700</p>
            <p>⭐⭐⭐⭐</p>
            <mark shop-mark>6020 сумм/мес</mark>
            <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant">
            <img className='shop-img' src={kurtka4} alt="photo" style={{ width: "200px", height: "240px"}}/>
            <p className='shop-p-second'>Женская зимняя куртка с капюшоном и меховой отделкой, с поясом и накладными карманами</p>
            <p className='shop-p'>296 000</p>
            <p>⭐⭐⭐⭐</p>
            <mark shop-mark>28900 сумм/мес</mark>
            <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant">
            <img className='shop-img' src={kurtka} alt="photo" style={{ width: "200px", height: "240px"}}/>
            <p className='shop-p-second'>Куртка теплая женская мужская unisex зимняя y2k корейский стиль иссиқ аёллар эркаклар</p>
            <p className='shop-p'>287 000</p>
            <p>⭐⭐⭐⭐</p>
            <mark shop-mark>22900 сумм/мес</mark>
            <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant">
            <img className='shop-img' src={kurtka2} alt="photo" style={{ width: "200px", height: "240px"}}/>
            <p className='shop-p-second'>Куртка, утеплённая водоотталкивающая, маломерит на 1-1,5 размера, изучите табл</p>
            <p className='shop-p'>192 010</p>
            <p>⭐⭐⭐⭐</p>
            <mark shop-mark>14095 сумм/мес</mark>
            <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant-second">
            <img className='shop-img' src={kurtka3} alt="photo" style={{ width: "200px", height: "240px"}}/>
            <p className='shop-p-second'>Тапочки домашние иссиқ аёллар закрытые маломерит на 1-1,5 размера, изучите табл</p>
            <p className='shop-p'>80 700</p>
            <p>⭐⭐⭐⭐</p>
            <mark shop-mark>6020 сумм/мес</mark>
            <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
        <div className="variant">
            <img className='shop-img' src={kurtka4} alt="photo" style={{ width: "200px", height: "240px"}}/>
            <p className='shop-p-second'>Женская зимняя куртка с капюшоном и меховой отделкой, с поясом и накладными карманами</p>
            <p className='shop-p'>296 000</p>
            <p>⭐⭐⭐⭐</p>
            <mark shop-mark>28900 сумм/мес</mark>
            <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
        </div>
    </div>
  )
}

export default Category