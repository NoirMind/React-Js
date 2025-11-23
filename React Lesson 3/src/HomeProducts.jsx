import React from 'react'

import divan from "./assets/img/divan.jpg";
import divan2 from "./assets/img/divan2.jpg";
import divan3 from "./assets/img/divan3.jpg";

function HomeProducts() {
  return (
     <div className='container home-boxes'>
            <div className="variant">
                <img className='shop-img' src={divan} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Кровать Норис Лайт Woodline корейский стиль иссиқ аёллар эркаклар</p>
                <p className='shop-p'>3 163 050 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>226 312 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
            <div className="variant">
                <img className='shop-img' src={divan2} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Светодиодная гирлянда роса, на батарейках, 3 м, 5 расцветок Лайт Woodline</p>
                <p className='shop-p'>7 886 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>312 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
            <div className="variant">
                <img className='shop-img' src={divan3} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Диван Миллениум Мини Woodline Woodline корейский стиль иссиқ аёллар эркаклар</p>
                <p className='shop-p'>4 903 470 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>350 837 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
            <div className="variant">
                <img className='shop-img' src={divan3} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Диван Миллениум Мини Woodline Woodline корейский стиль иссиқ аёллар эркаклар</p>
                <p className='shop-p'>4 903 470 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>350 837 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
            <div className="variant">
                <img className='shop-img' src={divan3} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Диван Миллениум Мини Woodline Woodline корейский стиль иссиқ аёллар эркаклар</p>
                <p className='shop-p'>4 903 470 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>350 837 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
        </div>
  )
}

export default HomeProducts