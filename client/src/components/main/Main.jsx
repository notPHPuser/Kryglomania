import React, { useState, useEffect } from 'react';
import './Main.css';
import pizza_main_one from '../../assets/pizza_main_one.png';
import pizza_main_two from '../../assets/pizza_main_two.png';
import pizza_main_three from '../../assets/pizza_main_three.png';

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images] = useState([pizza_main_one, pizza_main_two, pizza_main_three]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <>
      <div className='main'>
        <div className='carousel-container'>
          <img src={images[currentSlide]} alt='' className='pizza_main_photo' />
        </div>
        <div className='carousel-controls'>
          <button onClick={handlePrevSlide} className='prev-button'>
            ⭠
          </button>
          <button onClick={handleNextSlide} className='next-button'>
            ⭢
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
