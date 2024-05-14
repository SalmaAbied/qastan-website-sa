import React from "react";
import HeroCollage from "../../HeroCollage";
import CarouselWithText from "../../Carousel";
import CardBlock from "../../CardBlock";
import LogosSlider from "../../Slider";
import CtaBanner from "../../CTABannerTwo";

const images = ["https://www.qastan.be/swfiles/files/competentiematrix.jpeg", "https://www.qastan.be/swfiles/files/digitale-productieplanning.jpeg", "https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://www.qastan.be/swfiles/files/artificiele-intelligentie-ai-voor-documenten.jpeg", "https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

function Oplossingen() {
  return (
    <>
      <HeroCollage images={images} />
      <CarouselWithText />
      <CardBlock />
      <CtaBanner />
      <LogosSlider />
    </>
  );
}

export default Oplossingen;
