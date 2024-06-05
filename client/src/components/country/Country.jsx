import React from 'react';
import './Country.css';
// import Map from './Map/Map';

function Country() {
  return (
    <>
      <div className='country'>
        <p className='choose_country'>Выберете город</p>
        <div className='grid_first'>
          <p className='first_country'>Москва</p>
          <p className='first_country'>Домодедово</p>
          <p className='first_country'>Балашиха</p>
          <p className='first_country'>Котельники</p>
          <p className='first_country'>Лобня</p>
        </div>
        <div className='grid_second'>
          <p className='second_country'>Видное</p>
          <p className='second_country'>Красногорск</p>
          <p className='second_country'>Люберцы</p>
          <p className='second_country'>Мытици</p>
          <p className='second_country'>Реутов</p>
        </div>

        {/* <Map /> */}
      </div>
    </>
  );
}

export default Country;
