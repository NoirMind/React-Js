import React from 'react'
import LogoBox from './LogoBox.jsx'
import MainButton from './MainButton.jsx'
import ImgBox from './ImgBox.jsx'
import MainBtns from './MainBtns.jsx'
import Category from './Category.jsx'
import MidText from './MidText.jsx'
import HomeProducts from './HomeProducts.jsx'
import Intro from './Intro.jsx'
import HomeText from './HomeText.jsx'
import Study from './Study.jsx'


function App() {
  return (
    <div>
      <LogoBox title='Hello'/>
      <MainButton/>
      <MainBtns/>
      <Intro/>
      <ImgBox/>
      <Category/>
      <MidText/>
      <HomeProducts/>
      <HomeText/>
      <Study/>
    </div>
  )
}


export default App