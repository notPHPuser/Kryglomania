import React, { useContext, useState } from 'react';
import './Pizza.css';
import './MediaPizza.css';
import { PizzaContext } from './PizzaContext';

function Pizza() {
  const { pizzas } = useContext(PizzaContext);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedLiOfPizza, setSelectedLiOfPizza] = useState(null);

  const handleLiOfPizzaClick = (index) => {
    setSelectedLiOfPizza(index);
  };

  const handlePizzaClick = (pizza) => {
    setSelectedPizza(pizza);
  };

  const handleClosePizzaClick = (pizza) => {
    setSelectedPizza(!pizza);
  };

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
        <button className='what_pizza' onClick={handlePizzaScroll}>
          Пицца
        </button>
        <button className='what_pizza' onClick={handleOftenScroll}>
          Часто заказывают
        </button>
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
            <div className='selectedPizzaInfo'>
              <h2 className='selectedPizzaName'>{selectedPizza.name}</h2>
              <p className='selectedPizzaDescription'>{selectedPizza.description}</p>
              <ul className='ulOfPizza'>
                {['Оригинальное', 'Тонкое', 'Римское'].map((item, index) => (
                  <li
                    key={index}
                    className={`liOfPizza ${selectedLiOfPizza === index ? 'active' : ''}`}
                    onClick={() => handleLiOfPizzaClick(index)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default Pizza;
