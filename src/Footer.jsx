import React from 'react';
import logo from './assets/logo.png';
import './Footer.css'; // Make sure you create this file

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer-logo" />

      <div className="footer-links">
        <p>Privacy Policy & Legal Disclaimer</p>
        <p>About Webworksco</p>
        <p>Contact Us</p>
      </div>

      <div className="footer-description">
        <p>
          The information hosted on this website is for educational purposes only and is not meant to replace medical advice.<br />
          Always reach out to your registered healthcare professional for more information.<br />
          Webworksco is a trademark owned by Webworksco<br />
          Apis Bull logo is a registered trademark of Webworksco
        </p>
      </div>

      <div className="footer-address">
        <p>Webworksco India Private Ltd.</p>
        <p>NXT-2, 1 & 2nd Floor. Embassy Manyata Business Park</p>
        <p>Nagavara Village. Kasaba Hobli</p>
        <p>Bangalore - 560045, India</p>
      </div>
    </footer>
  );
};

export default Footer;
