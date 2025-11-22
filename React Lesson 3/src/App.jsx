import React from 'react'
import LogoBox from './LogoBox.jsx'
import MainButton from './MainButton.jsx'
import ImgBox from './ImgBox.jsx'
import MainBtns from './MainBtns.jsx'
import Category from './Category.jsx'
function App() {
  return (
    <div>
      <LogoBox title='Hello'/>
      <MainButton/>
      <MainBtns/>
      <ImgBox/>
      <Category/>
    </div>
  )
}


export default App