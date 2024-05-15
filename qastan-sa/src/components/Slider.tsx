import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    id: 1,
    name: "Gaverzicht",
    logoUrl: "https://www.qastan.be/swfiles/files/Gaverzicht.jpg?nc=1709650208"
  },
  {
    id: 2,
    name: "AVIA",
    logoUrl: "https://www.qastan.be/swfiles/files/AVIA.jpg?nc=1709650208"
  },
  {
    id: 3,
    name: "Brouwerij Van Honsebrouck",
    logoUrl: "https://www.qastan.be/swfiles/files/Brouwerij-Van-Honsebrouck.jpg?nc=1709650208"
  },
  {
    id: 4,
    name: "Frame",
    logoUrl: "https://www.qastan.be/swfiles/files/Frame.svg?nc=1709650208"
  },
  {
    id: 5,
    name: "KV Kortrijk",
    logoUrl: "https://www.qastan.be/swfiles/files/club-logo-kv-kortrijk-qastan.png?nc=1709650208"
  },
  {
    id: 6,
    name: "Bpost",
    logoUrl: "https://www.qastan.be/swfiles/files/Bpost_logo-1.svg?nc=1709650208"
  },
  {
    id: 7,
    name: "Lecot",
    logoUrl: "https://www.qastan.be/swfiles/files/Lecot.jpg?nc=1709650208"
  },
  {
    id: 8,
    name: "Televic",
    logoUrl: "https://www.qastan.be/swfiles/files/Televic_logo_new_600-1.svg?nc=1709650208"
  }
];

const LogosSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="container mx-auto my-20">
      <h2 className="text-4xl md:text-5xl font-semibold text-center">Enkele partners</h2>
      <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-orange-500 block mt-4 mb-6" />
      <Slider ref={sliderRef} {...settings} className="py-10 flex justify-center">
        {partners.map(partner => (
          <div key={partner.id} className="px-5 flex justify-center">
            <img src={partner.logoUrl} alt={partner.name} className="mx-auto w-36 h-36 object-contain" />
          </div>
        ))}
      </Slider>
      <button onClick={goToPrevSlide}>
        <ArrowLeftIcon size={24} />
      </button>
      <button onClick={goToNextSlide}>
        <ArrowRightIcon size={24} />
      </button>
    </div>
  );
};

export default LogosSlider;
