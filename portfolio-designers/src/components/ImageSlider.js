import React from "react";
import { useState } from "react";
import "../css/imageslider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="sliderStyles">
      <div className="leftArrowStyles" onClick={goToPrevious}>
        ❰
      </div>
      <div className="rightArrowStyles" onClick={goToNext}>
        ❱
      </div>
      <div
        className="slideStyles"
        style={slideStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && <div className="textOverlay">{slides[currentIndex].title}</div>}
      </div>
      <div className="dotsContainerStyle">
        {slides.map((slides, slideIndex) => (
          <div
            key={slideIndex}
            className="dotStyles"
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
