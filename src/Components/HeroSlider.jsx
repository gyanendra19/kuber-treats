import { useState, useEffect } from "react";
import "./HeroSlider.css";
import image1 from "../assets/SliderImages/image1.jpg";
import image2 from "../assets/SliderImages/image2.jpg";
import image3 from "../assets/SliderImages/image3.jpg";
import image4 from "../assets/SliderImages/image4.jpg";
import image5 from "../assets/SliderImages/image5.jpg";

const images = [
  `${image5}`
  // `${image1}`,
  // `${image2}`,
  // `${image3}`,
  // `${image4}`
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="overlay"></div>
      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          ></span>
        ))}
        </div>
    </div>
  );
};

export default HeroSlider;
