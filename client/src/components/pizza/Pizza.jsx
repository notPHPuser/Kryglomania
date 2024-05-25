import React from 'react';
import './Pizza.css';

function Pizza() {
  return (
    <>
      <div className='pizza'>
        <button className='what_pizza'>Пицца</button>
        <button className='what_pizza'>Часто заказывают</button>
        <button className='what_pizza'>Акции</button>
        <button className='what_pizza'>Закуски</button>
        <button className='what_pizza'>Сэндвичи</button>
        <button className='what_pizza'>Напитки</button>
        <button className='what_pizza'>Соусы</button>
      </div>
    </>
  );
}

export default Pizza;
