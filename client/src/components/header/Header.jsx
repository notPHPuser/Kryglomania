import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Header.css';
import basket from '../../assets/basket.png';
import courier from '../../assets/courier.png';

function Header() {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [deliveryText, setDeliveryText] = useState('Самовывоз');
  const [showPopup, setShowPopup] = useState(false);
  const [showCourier, setShowCourier] = useState(true);
  const [phone, setPhone] = useState('');

  const handleBasketClick = () => {
    setShowCourier(!showCourier);
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

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  return (
    <div id='header' className='header'>
      <h1 className='logo'>
        <span className='logo_red'>Кругло</span>
        <span className='logo_yellow'>мания</span>
      </h1>
      <button className='adress'>
        <p className='for_adress'>Адрес доставки</p>
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
        <form id='popup_container' className='popup_container'>
          <div className='overlay' onClick={handleClosePopup}></div>
          <div id='popup' className='popup'>
            <h2 className='r_f'>Введите телефон</h2>

            <PhoneInput
              className='register_form'
              country={'ru'}
              value={phone}
              onChange={handlePhoneChange}
              containerClass='custom-container'
              inputClass='custom-input'
              hideDropdown={true}
              inputStyle={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
            />
            {/* <button onClick={handleClosePopup} className='close_button'>
              ❌
            </button> */}
            <button type='submit' className='submit'>
              Зарегестрироваться
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Header;
