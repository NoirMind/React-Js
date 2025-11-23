import React from 'react'

import divan from "./assets/img/divan.jpg";
import divan2 from "./assets/img/divan2.jpg";
import divan3 from "./assets/img/divan3.jpg";
import divan4 from "./assets/img/divan4.jpg";
import divan5 from "./assets/img/divan5.jpg";
import divan6 from "./assets/img/divan6.jpg";
import divan7 from "./assets/img/divan7.jpg";
import divan8 from "./assets/img/divan8.jpg";
import divan9 from "./assets/img/divan9.jpg";
import divan10 from "./assets/img/divan10.jpg";

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
                <img className='shop-img' src={divan4} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Диван Оливия Про Woodline Woodline корейский стиль иссиқ аёллар эркаклар</p>
                <p className='shop-p'>7 182 450 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>513 895 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
            <div className="variant">
                <img className='shop-img' src={divan5} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Подушка для сна, декоративная, гипоаллергенная, для офиса, дома,</p>
                <p className='shop-p'>67 620 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>4 887 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
            <div className="variant">
                <img className='shop-img' src={divan6} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Многоразовые стрейч пакеты бахилы на резинке от продуктов,</p>
                <p className='shop-p'>8 720 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>8 720 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
             <div className="variant">
                <img className='shop-img' src={divan7} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Держатель для губки на раковину, крючок самоклеящийся,</p>
                <p className='shop-p'>26 093 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>1 905 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
            <div className="variant">
                <img className='shop-img' src={divan8} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Полка для ванной комнаты, без сверления, с двойной липучкой,</p>
                <p className='shop-p'>23 040 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>1 700 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
            <div className="variant">
                <img className='shop-img' src={divan9} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Универсальный органайзер, пластиковая, косметики </p>
                <p className='shop-p'>23 040 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>1 700 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
            <div className="variant">
                <img className='shop-img' src={divan10} alt="photo" style={{ width: "200px", height: "240px"}}/>
                <p className='shop-p-second'>Термокружка из нержавеющей стали, для чая и кофе</p>
                <p className='shop-p'>60 043 сум</p>
                <p>⭐⭐⭐⭐</p>
                <mark shop-mark>4 384 сумм/мес</mark>
                <button class="shopBtn"><i class="fa-solid fa-bag-shopping"></i>Savat</button>
            </div>
        </div>
  )
}

export default HomeProducts