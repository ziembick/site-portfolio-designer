import React from "react";
import { useState } from "react";
import "../css/imageslider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: 'white',
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

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="sliderStyles">
      <div className="leftArrowStyles" onClick={goToPrevious}>
        ❰
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ❱
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyle}>
        {slides.map((slides, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
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