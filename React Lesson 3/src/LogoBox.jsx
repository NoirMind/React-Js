import React from 'react'
import warrior from "./assets/img/warrior.png";
import gra from "./assets/img/gra.jpg";

function LogoBox() {
  return (
    <div className='main-page'>
        <div className="logobox-img">
            <img src={warrior} alt="logo" loading='lazy' width='60px' height='60px'/>
        <p className='paragh'>Kingdom</p>
        </div>
        <ul className='aslan'>
            <li><a href="#">Home</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">Prices</a></li>
        <li><a href="#">About us</a></li>
        </ul>
    </div>
  )
}

export default LogoBox