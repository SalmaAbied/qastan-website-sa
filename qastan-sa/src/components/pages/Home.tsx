import React from "react";
import Hero from "../Hero";
import LogosSlider from "../Slider";
import Card from "../TextAndImage";
import Oplossingen from "../Cards";
import CtaBanner from "../CTABanner";
import CardWithText from "../ImageAndText";


function Home() {
  return (
    <>
      <Hero />
      <LogosSlider />
      <Card />
      <Oplossingen />
      <CtaBanner/>
      <CardWithText/>
    </>
  );
}

export default Home;
