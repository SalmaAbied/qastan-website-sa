import React from "react";
import Hero from "../Hero";
import LogosSlider from "../Slider";
import Card from "../TextAndImage";
import CardWithHover from "../Cards";
import CtaBanner from "../CTABanner";
import CardWithText from "../ImageAndText";
import CardWithDynamicContent from "../CardWithText";

function Home() {
  return (
    <>
        <Hero />
        <LogosSlider />
        <Card />
        <CardWithHover />
        <CtaBanner />
        <CardWithText />
        <CardWithDynamicContent />
    </>
  );
}

export default Home;
