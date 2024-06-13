import React, { createContext, useState } from 'react';
import pizza1 from '../../assets/photoPizza/pizza1.png';
import pizza2 from '../../assets/photoPizza/pizza2.png';
import pizza3 from '../../assets/photoPizza/pizza3.png';
import pizza4 from '../../assets/photoPizza/pizza4.png';
import pizza5 from '../../assets/photoPizza/pizza5.png';
import pizza6 from '../../assets/photoPizza/pizza6.png';
import pizza7 from '../../assets/photoPizza/pizza7.png';
import pizza8 from '../../assets/photoPizza/pizza8.png';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([
    {
      id: 1,
      name: 'Маргарита Гурме',
      description:
        'Сыр моцарелла, томаты, соус песто, сыр пармезан, фирменный ароматный томатный соус',
      image: pizza1,
      price: 'от 359₽',
    },
    {
      id: 2,
      name: 'Карбонара',
      description:
        'Бекон, сыр моцарелла, сливочный соус, сыр пармезан, чипсы из бекона, рубленная петрушка',
      image: pizza2,
      price: 'от 569₽',
    },
    {
      id: 3,
      name: '4 сыра',
      description: 'Сыр моцарелла, сыр чеддер, сыр блю чиз, сыр пармезан, фирменный сливочный соус',
      image: pizza3,
      price: 'от 679₽',
    },
    {
      id: 4,
      name: 'BBQ Микс',
      description:
        'Ветчина, бекон, курица, перец соломка, красный лук, соус барбекю, сыр моцарелла, томатный соус',
      image: pizza4,
      price: 'от 569₽',
      new: 'Новинка',
    },
    {
      id: 5,
      name: 'Чизбургер',
      description:
        'Говяжий фарш, сыр моцарелла, огурцы соленые, лук, кетчуп, сырный соус, горчичный соус',
      image: pizza5,
      price: 'от 679₽',
    },
    {
      id: 6,
      name: 'Пепперони Ранч',
      description: 'Пепперони, сыр моцарелла, перец соломка, сливочно-чесночный соус',
      image: pizza6,
      price: 'от 429₽',
    },
    {
      id: 7,
      name: 'Маргарита',
      description: 'Сыр моцарелла, фирменный томатный соус, вкусный лаваш',
      image: pizza7,
      price: 'от 289₽',
    },
    {
      id: 8,
      name: '3 мяса',
      description: 'Ветчина, охотничьи колбаски, бекон, сыр моцарелла, фирменный томатный соус',
      image: pizza8,
      price: 'от 569₽',
    },
  ]);

  return <PizzaContext.Provider value={{ pizzas, setPizzas }}>{children}</PizzaContext.Provider>;
};
