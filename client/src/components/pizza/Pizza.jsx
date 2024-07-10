import React from 'react';
import './Pizza.css';
import './MediaPizza.css';
import My_pizza from './My_pizza';

function Pizza() {
  const handlePizzaScroll = () => {
    const pizzaExample = document.querySelector('.pizza_example');
    pizzaExample.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOftenScroll = () => {
    const pizzaExample = document.querySelector('.often');
    pizzaExample.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='pizza'>
        <button className='what_pizza marginForSE' onClick={handlePizzaScroll}>
          Пицца
        </button>
        <button className='what_pizza marginForSE' onClick={handleOftenScroll}>
          Часто заказывают
        </button>
        <button className='what_pizza marginForSE'>Акции</button>
        <button className='what_pizza'>Закуски</button>
        <button className='what_pizza'>Сэндвичи</button>
        <button className='what_pizza'>Напитки</button>
        <button className='what_pizza'>Соусы</button>
      </div>
      <div className='pizza_list'>
        <My_pizza />
      </div>
    </>
  );
}

export default Pizza;
