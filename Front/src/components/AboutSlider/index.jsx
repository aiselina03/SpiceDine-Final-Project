import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

function AboutSlider() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <div className="aboutSlider">
        <Slider {...settings}>
          <div className="photo">
            <img src="/src/images/about-slider-1.jpg" alt="" />
          </div>
          <div className="photo">
            <img src="/src/images/about-slider-2.jpg" alt="" />
          </div>
          <div className="photo">
            <img src="/src/images/about-slider-3.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default AboutSlider;
