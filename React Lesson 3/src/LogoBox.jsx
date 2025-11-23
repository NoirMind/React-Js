import React from 'react'
import warrior from "./assets/img/warrior.png";
import gra from "./assets/img/background.jpg";

function LogoBox() {
  return (
    <div className='main-page'>
        <div className="logobox-img">
            <img src={warrior} alt="logo" loading='lazy' width='60px' height='60px'/>
        <p className='paragh'>KINGDOM MARKET</p>
        </div>
        <ul className='aslan'>
            <li><a href="#">Домой</a></li>
        <li><a href="#">Контакты</a></li>
        <li><a href="#">Локации</a></li>
        <li><a href="#">Цены</a></li>
        <li><a href="#">О нас</a></li>
        </ul>
    </div>
  )
}

export default LogoBox