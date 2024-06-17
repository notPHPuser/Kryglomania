import React, { useState, useRef, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Header.css';
import './MediaHeader.css';
import basket from '../../assets/basket.png';
import courier from '../../assets/courier.png';
import Country from '../country/Country';
import axios from 'axios';

function Header() {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [deliveryText, setDeliveryText] = useState('Самовывоз');
  const [showPopup, setShowPopup] = useState(false);
  const [showCourier, setShowCourier] = useState(true);
  const [phone, setPhone] = useState('');
  const [showCountry, setShowCountry] = useState(false);
  const countryRef = useRef(null);
  const [userPhone, setUserPhone] = useState('');

  const addUser = async () => {
    try {
      await axios.post('http://localhost:5001/api/user', { phone });
      setUserPhone('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserPhoneChange = (event) => {
    if (event && event.target) {
      const value = event.target.value;
      setUserPhone(value);
    }
  };

  const handleBasketClick = () => {
    setShowCourier(!showCourier);
  };

  const handleAdressClick = () => {
    setShowCountry(true);
  };

  const handleAdressClose = () => {
    setShowCountry(false);
  };

  const buttonChange = () => {
    setIsButtonActive(!isButtonActive);
    setDeliveryText(isButtonActive ? 'Самовывоз' : 'Доставка');
  };
  const handleEnterClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setUserPhone(value);
  };

  return (
    <div id='header' className='header'>
      <h1 className='logo'>
        <span className='logo_red'>Кругло</span>
        <span className='logo_yellow'>мания</span>
      </h1>

      <button onClick={handleAdressClick} className='adress'>
        <p className='for_adress hiddenSE'>Адрес доставки</p>
        <p className='for_adress new_adress'>Выберете адрес доставки</p>
      </button>

      <div className='but'>
        <button
          className={isButtonActive ? 'what_you_want active' : 'what_you_want'}
          onClick={buttonChange}
        >
          <img
            id='img_basket'
            src={showCourier ? basket : courier}
            className={isButtonActive ? 'basket active' : 'basket'}
            alt='basket'
          />
          <button
            onClick={handleBasketClick}
            id='or_or'
            className={isButtonActive ? 'or_or active' : 'or_or'}
          >
            {deliveryText}
          </button>
        </button>
      </div>
      <button onClick={handleEnterClick} className='enter'>
        Войти
      </button>
      {showPopup && (
        <form onSubmit={addUser} id='popup_container' className='popup_container'>
          <div className='overlay' onClick={handleClosePopup}></div>
          <div id='popup' className='popup'>
            <h2 className='r_f'>Введите телефон</h2>

            <PhoneInput
              className='register_form'
              country={'ru'}
              value={userPhone}
              containerClass='custom-container'
              inputClass='custom-input'
              hideDropdown={true}
              onChange={handleUserPhoneChange}
              inputStyle={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
            />
            <button type='submit' className='submit'>
              Зарегестрироваться
            </button>
          </div>
        </form>
      )}
      {showCountry && (
        <>
          <button className='handleAdressClose' onClick={handleAdressClose}>
            &#10006;
          </button>
          <div className='overlay1'></div>
          <Country />
        </>
      )}
    </div>
  );
}

export default Header;
