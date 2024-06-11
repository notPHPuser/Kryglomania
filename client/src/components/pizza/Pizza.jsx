import React, { useContext, useState } from 'react';
import './Pizza.css';
import { PizzaContext } from './PizzaContext';

function Pizza() {
  const { pizzas } = useContext(PizzaContext);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handlePizzaClick = (pizza) => {
    setSelectedPizza(pizza);
  };

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
        {pizzas.map((pizza) => (
          <div key={pizza.id} className='pizza_example' onClick={() => handlePizzaClick(pizza)}>
            <img src={pizza.image} alt={pizza.name} className='photoPizzaExample' />
            <p className='NamePizzaExample'>{pizza.name}</p>
            <p className='textPizzaExple'>{pizza.description}</p>
          </div>
        ))}
      </div>
      {selectedPizza && (
        <div className='selected-pizza'>
          <img src={selectedPizza.image} alt='pizza' />
          <h2>{selectedPizza.name}</h2>
          <p>{selectedPizza.description}</p>
        </div>
      )}
    </>
  );
}

export default Pizza;
