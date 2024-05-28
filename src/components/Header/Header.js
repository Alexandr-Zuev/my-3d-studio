import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.svg';
import userIcon from '../../images/user-icon.svg';
import basketIcon from '../../images/basket-icon.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="header__icons">
        <img src={userIcon} alt="User Icon" className="header__icon" />
        <img src={basketIcon} alt="Basket Icon" className="header__icon" />
      </div>
    </header>
  );
}

export default Header;