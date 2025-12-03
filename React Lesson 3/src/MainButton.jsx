import React from 'react'

function MainButton() {
  return (
    <div className='bases'>
      <button className='btn1'>Каталог</button>
      <input type="text" placeholder='Find' className='btnInput' onChange={(item)=>{setValue(item.target.value)}}/>
      {/* <button className='btn2' onClick={filterProduct}>Найти</button> */}
      <button className='btn4'>Корзина</button>
      <button className='btn3'>Войти</button>
    </div>
  )
}

export default MainButton