import React from 'react';
import logo from '../../images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={logo} alt="logo" className="logo logo__footer" />
      </div>
      <div className="footer-column">
        <h3>Categories</h3>
        <ul>
          <li><a href="#games">3D Models for Games</a></li>
          <li><a href="#industrial-design">3D Models for Industrial Design</a></li>
          <li><a href="#architecture">3D Models for Architecture</a></li>
          <li><a href="#characters">3D Models for Characters</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li>Contact</li>
          <li>Help</li>

        </ul>
      </div>
      <div className="footer-column">
        <h3>Subscribe</h3>
        <form className="subscribe-form">
          <input type="email" placeholder="Your email" className="subscribe-input" />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;