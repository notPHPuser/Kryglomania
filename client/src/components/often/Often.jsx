import React, { useContext, useState } from 'react';
import './Often.css';
import { PizzaContext } from '../../context/PizzaContext';

function Often() {
  const { often } = useContext(PizzaContext);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedLiOfPizza, setSelectedLiOfPizza] = useState(null);
  const handlePizzaClick = (pizza) => {
    setSelectedPizza(pizza);
  };

  const handleClosePizzaClick = (pizza) => {
    setSelectedPizza(!pizza);
  };
  const handleLiOfPizzaClick = (index) => {
    setSelectedLiOfPizza(index);
  };

  return (
    <>
      <div className='often'>
        <p className='oftenText'>Часто заказывают</p>
        <div className='div_for_often'>
          {often.map((pizza) => (
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
      </div>
    </>
  );
}

export default Often;
