import React from 'react';
import logo from '../../images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="logo logo__footer" />
      <p className='footer__text'>© 2024 Online store of 3D models. All rights reserved.</p>
      <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src='https://img.icons8.com/?size=100&id=84521&format=png&color=FFFFFF' alt="Tiktok" className="social-icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src='https://img.icons8.com/?size=100&id=435&format=png&color=FFFFFF' alt="Facebook" className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src='https://img.icons8.com/?size=100&id=437&format=png&color=FFFFFF' alt="Twitter" className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src='https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF' alt="Instagram" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


