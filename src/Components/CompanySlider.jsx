import { useState, useEffect } from "react";
import "./CompanySlider.css";
import { coImage1, coImage2, coImage3, coImage4 } from "../assets/CompanySliderImages";

const images = [
  `${coImage1}`,
  `${coImage2}`,
  `${coImage3}`,
  `${coImage4}`
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // 5 seconds

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="co-slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="co-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`co-dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
