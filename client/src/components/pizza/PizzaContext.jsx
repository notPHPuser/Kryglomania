import React, { createContext, useState } from 'react';
import pizza1 from '../../assets/photoPizza/pizza1.png';
import pizza2 from '../../assets/photoPizza/pizza2.png';
import pizza3 from '../../assets/photoPizza/pizza3.png';
import pizza4 from '../../assets/photoPizza/pizza4.png';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([
    {
      id: 1,
      name: 'Маргарита Гурме',
      description: 'Сыр моцарелла, томаты, соус песто, сыр пармезан, фирменный томатный соус',
      image: pizza1,
    },
    {
      id: 2,
      name: 'Карбонара',
      description:
        'Бекон, сыр моцарелла, сливочный соус, сыр пармезан, чипсы из бекона, рубленная петрушка',
      image: pizza2,
    },
    {
      id: 3,
      name: '4 сыра',
      description: 'Сыр моцарелла, сыр чеддер, сыр блю чиз, сыр пармезан, фирменный сливочный соус',
      image: pizza3,
    },
    {
      id: 4,
      name: 'BBQ Микс',
      description:
        'Ветчина, бекон, курица, перец соломка, красный лук, соус барбекю, сыр моцарелла, томатный соус',
      image: pizza4,
    },
  ]);

  return <PizzaContext.Provider value={{ pizzas, setPizzas }}>{children}</PizzaContext.Provider>;
};
