import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselWithText = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const images = [
    { id: 1, src: "https://www.qastan.be/swfiles/files/penguin-blue.svg?nc=1715340943", alt: "Lego Digitaliseren", title: "Digitaliseren", link: "/Oplossingen/Digitaliseren" },
    { id: 2, src: "https://www.qastan.be/swfiles/files/penguin-orange.svg?nc=1715340943", alt: "Lego Automatiseren", title: "Automatiseren", link: "/Oplossingen/Automatiseren" },
    { id: 3, src: "https://www.qastan.be/swfiles/files/penguin-red.svg?nc=1715340943", alt: "Lego Plannen", title: "Plannen", link: "/Oplossingen/Plannen" },
    { id: 4, src: "https://www.qastan.be/swfiles/files/penguin-yellow.svg?nc=1715340943", alt: "Lego IT", title: "IT-beheer", link: "/Oplossingen/IT" },
  ];

  return (
    <>
      <div className="container mx-auto my-20">
        <h2 className="text-4xl md:text-5xl font-semibold text-center">Onze oplossingen</h2>
        <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-orange-500 block mt-4 mb-6" />

        <Carousel swipeable={true} draggable={true} showDots={true} responsive={responsive} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={5000} keyBoardControl={true} customTransition="transform 600ms ease-in-out" transitionDuration={300} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
          {images.map((image) => (
            <Link key={image.id} to={image.link}>
              <div className="bg-white shadow-lg p-4 m-10">
                <img className="w-64 h-64 mx-auto object-contain" src={image.src} alt={image.alt} />
                <h2 className="text-center mt-2">{image.title}</h2>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselWithText;
