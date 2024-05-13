import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="container mx-auto">
      <Slider ref={sliderRef} {...settings} className="py-10 flex justify-center">
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/Gaverzicht.jpg?nc=1709650208" alt="Logo 1" className="mx-auto" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/AVIA.jpg?nc=1709650208" alt="Logo 2" className="mx-auto w-36 h-36 object-contain" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/Brouwerij-Van-Honsebrouck.jpg?nc=1709650208" alt="Logo 3" className="mx-auto w-36 h-36 object-contain" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/Frame.svg?nc=1709650208" alt="Logo 4" className="mx-auto w-36 h-36 object-contain" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/club-logo-kv-kortrijk-qastan.png?nc=1709650208" alt="Logo 5" className="mx-auto w-36 h-36 object-contain" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/Bpost_logo-1.svg?nc=1709650208" alt="Logo 6" className="mx-auto w-36 h-36 object-contain" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/Lecot.jpg?nc=1709650208" alt="Logo 7" className="mx-auto w-36 h-36 object-contain" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/Televic_logo_new_600-1.svg?nc=1709650208" alt="Logo 8" className="mx-auto w-36 h-36 object-contain" /></div>
      </Slider>  
      <button onClick={goToPrevSlide}>
        <ArrowLeftIcon size={24}/>
      </button>
      <button onClick={goToNextSlide}>
        <ArrowRightIcon size={24} />
      </button>
    </div>
  );
};

export default LogosSlider;
