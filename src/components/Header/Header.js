import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';
import userIcon from '../../images/user-icon.svg';
import basketIcon from '../../images/basket-icon.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="header__nav">
        <Link to="promo" smooth={true} duration={500} className="header__nav-link">Home</Link>
        <Link to="about-us" smooth={true} duration={500} className="header__nav-link">About</Link>
        <Link to="our-services" smooth={true} duration={500} className="header__nav-link">Services</Link>
      </nav>
      <div className="header__icons">
        <img src={userIcon} alt="User Icon" className="header__icon" />
        <img src={basketIcon} alt="Basket Icon" className="header__icon" />
      </div>
    </header>
  );
}

export default Header;