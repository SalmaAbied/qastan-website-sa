import React from 'react'
import Hero from '../Hero'
import Slider from '../Partners'
import LogosSlider from '../Slider'
import Cards from '../TextAndImage'


function Home() {
  return (
    <>
      <Hero /> 
      {/* <Slider/>  */}
      <LogosSlider />
      <Cards/>
    </>
  )
}

export default Home
