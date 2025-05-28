import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const images = [
    "/assets/images/is1.jpg",
    "/assets/images/is2.jpg",
    "/assets/images/is3.jpg",
    "/assets/images/is4.jpg",
    "/assets/images/is5.jpg",
  ];

  return (
    <div className="relative max-w-full rounded-lg shadow-lg">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className="w-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;