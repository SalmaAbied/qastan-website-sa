import React from "react";
import Hero from "../Hero";
import LogosSlider from "../Slider";
import Cards from "../TextAndImage";
import Oplossingen from "../Cards";
import CtaBanner from "../CTABanner";

function Home() {
  return (
    <>
      <Hero />
      <LogosSlider />
      <Cards />
      <Oplossingen />
      <CtaBanner/>
    </>
  );
}

export default Home;
