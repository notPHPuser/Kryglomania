import React, { useContext, useState } from 'react';
import './Pizza.css';
import { PizzaContext } from './PizzaContext';

function Pizza() {
  const { pizzas } = useContext(PizzaContext);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handlePizzaClick = (pizza) => {
    setSelectedPizza(pizza);
  };

  const handleClosePizzaClick = (pizza) => {
    setSelectedPizza(!pizza);
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
            <p className='pricePizzaExample'>{pizza.price}</p>

            <button className='selectPizzaExample'>Выбрать</button>
            <p className='newPizzaExample'>{pizza.new}</p>
          </div>
        ))}
      </div>
      {selectedPizza && (
        <form>
          <div className='overlay2'></div>

          <div className='selectedPizza'>
            <button className='handleClosePizzaClick' onClick={handleClosePizzaClick}>
              &#10006;
            </button>
            <img className='photoPizzaExampleNew' src={selectedPizza.image} alt='pizza' />
            <h2>{selectedPizza.name}</h2>
            <p>{selectedPizza.description}</p>
          </div>
        </form>
      )}
    </>
  );
}

export default Pizza;
