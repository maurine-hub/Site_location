import React from "react";
import { useState } from "react";
// import {App} from' ./App.css'

const images = [
    'https://z-p3-scontent.fdla3-2.fna.fbcdn.net/v/t1.6435-9/148517593_436563641097067_4196685435971799826_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8BHYbPVzNIwQ7kNvgE7tUAs&_nc_ht=z-p3-scontent.fdla3-2.fna&oh=00_AYCm705Lrd9bN3W2ze8RcEYeKXHr2ideNI8BA_Fimdb8SA&oe=67091D80',
    'https://z-p3-scontent.fdla3-2.fna.fbcdn.net/v/t1.6435-9/95426627_231804684906298_3246708737032847360_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8DAB-8YY5LIQ7kNvgFyObFJ&_nc_ht=z-p3-scontent.fdla3-2.fna&oh=00_AYBQtSHu6lnhQ_nuHaODI2wu1E0J8L3SS2nL3dbxJEedKQ&oe=670925F2',
    'https://z-p3-scontent.fdla3-2.fna.fbcdn.net/v/t1.6435-9/95797559_231804424906324_5602294305122156544_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ji2JGW3fw7cQ7kNvgFjYwtx&_nc_ht=z-p3-scontent.fdla3-2.fna&oh=00_AYCPo4I6tiRx1SINTGajs8tjHO0HEZ2S0lTjnrDbHIwz1A&oe=670A6079'

];

export function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    return (
      <div className="carousel-container">
        <button onClick={handlePrev} className="carousel-button">Précédent</button>
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="carousel-button">Suivant</button>
      </div>
    );
}