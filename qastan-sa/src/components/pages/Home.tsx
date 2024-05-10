import React from 'react'
import Hero from '../Hero'
import Slider from '../Partners'
import LogosSlider from '../Slider'
import Cards from '../TextAndImage'
import Oplossingen from '../Cards'


function Home() {
  return (
    <>
      <Hero /> 
      {/* <Slider/>  */}
      <LogosSlider />
      <Cards/>
      <Oplossingen/>
    </>
  )
}

export default Home
