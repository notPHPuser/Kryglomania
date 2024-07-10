import React, { useContext } from 'react';
import './Often.css';
import { PizzaContext } from '../../context/PizzaContext';

function Often() {
  const { often } = useContext(PizzaContext);

  return (
    <>
      <div className='often'>
        <p className='oftenText'>Часто заказывают</p>
        {often.map((pizza) => (
          <div
            key={often.id}
            className='pizza_example'
            onClick={() => handlePizzaClick(pizza)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Often;
