import React from 'react';
import './Pizza.css';
import pizza1 from '../../assets/photoPizza/pizza1.png';

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
      <div className='pizza_list'>
        <div className='pizza_example'>
          <img src={pizza1} alt='pizza1' className='photoPizzaExample' />
          <p className='NamePizzaExample'>Маргарита Гурме</p>
          <p className='textPizzaExple'>
            Сыр моцарелла, томаты, соус песто, сыр пармезан, фирменный томатный соус
          </p>
        </div>
        <div className='pizza_example'>w</div>
        <div className='pizza_example'>e</div>
        <div className='pizza_example'>r</div>
        <div className='pizza_example'>z</div>
      </div>
    </>
  );
}

export default Pizza;
