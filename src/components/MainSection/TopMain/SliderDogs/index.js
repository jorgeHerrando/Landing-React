import React from "react";
import Slider from "react-slick";

import sliderDogStyles from "./SliderDogs.module.css";
import pictureDog from "../../../../assets/img/dog1.png";

export default function SliderDogs() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "20px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "20px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "25px",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 469,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  const settingsDesktop = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const pictures = [pictureDog, pictureDog, pictureDog, pictureDog, pictureDog];
  return (
    <>
      <div className={sliderDogStyles.sliderContainer}>
        <Slider {...settings}>
          {pictures.map((picture, i) => {
            return (
              <div
                className={sliderDogStyles.sliderImgContainer}
                key={`card_${i}`}
              >
                <img src={picture} alt="dog" />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className={sliderDogStyles.sliderContainerDesktop}>
        <Slider {...settingsDesktop}>
          {pictures.map((picture, i) => {
            return (
              <div
                className={sliderDogStyles.sliderImgContainer}
                key={`card_${i}`}
              >
                <img src={picture} alt="dog" />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
