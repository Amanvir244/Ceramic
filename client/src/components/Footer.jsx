
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-grid">
        <div>
          <p>02–233 Warszawa</p>
          <p>Al. Jerozolimskie 12</p>
        </div>
        <div>
          <p>email@contact.com</p>
          <p>+48 500 500 500</p>
        </div>
        <div>
          <p>Store Regulations</p>
          <p>Privacy policy</p>
        </div>
        <div>
          <p>Delivery</p>
          <p>Returns & exchanges</p>
        </div>
        <div className="socials">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
