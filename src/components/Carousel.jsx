import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src={require("../assets/images/wood-1.png").default}
          alt="hero-content-1"
        />
      </div>
      <div>
        <img
          src={require("../assets/images/wood-2.jpg").default}
          alt="hero-content-2"
        />
      </div>
      <div>
        <img
          src={require("../assets/images/wood-3.jpg").default}
          alt="hero-content-3"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
