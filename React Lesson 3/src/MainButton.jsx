import React from 'react'

function MainButton() {
  return (
    <div className='bases'>
      <button className='btn1'>Каталог</button>
      <input type="text" placeholder='Find' className='btnInput'/>
      <button className='btn2'>Войти</button>
      <button className='btn3'>Избранние</button>
      <button className='btn4'>Корзина</button>
    </div>
  )
}

export default MainButton