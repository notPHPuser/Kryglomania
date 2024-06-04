import React from 'react';
import './Country.css';
import Map from './Map/Map';

function Country() {
  return (
    <>
      <div className='country'>
        <p className='choose_country'>Выберете город</p>
        <Map />
      </div>
    </>
  );
}

export default Country;
