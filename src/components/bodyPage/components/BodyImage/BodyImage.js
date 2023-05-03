import React, { useState, useEffect } from "react";
import imagen1 from "./imagen1.png";
import imagen2 from "./imagen2.png";
import imagen3 from "./imagen3.png";
import imagen4 from "./imagen4.png";
import imagen5 from "./imagen5.png";
import imagen6 from "./imagen6.png";
import "./BodyImage.css";

const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];

const BodyImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="body-image-container">
      <img
        className="body-image"
        src={images[currentIndex]}
        alt="Imagen de carrusel"
      />
    </div>
  );
};

export default BodyImage;