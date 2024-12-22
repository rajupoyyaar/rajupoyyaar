import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        Mobile: <a href="tel:6379242219">6379242219</a> | Email: <a href="mailto:rajupoyyaar@gmail.com">rajupoyyaar@gmail.com</a>
      </p>
      <p className="footer-text">© {new Date().getFullYear()} Raju Poyyaar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
