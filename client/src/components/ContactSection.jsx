import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-info">
        <h2>Contact us</h2>
        <p>02–233 Warszawa<br />Al. Jerozolimskie 12</p>
        <p>email@contact.com</p>
        <p>+48 500 500 500</p>
        <div className="social-icons-contact">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <h3>Collaboration</h3>
        <p>m.kowalski@contact.com</p>
      </div>
      <form className="contact-form">
        <label>First name:</label>
        <input type="text" placeholder="Anna" />
        <label>Your e–mail:</label>
        <input type="email" placeholder="your@email.pl" />
        <label>Message:</label>
        <textarea placeholder="type the message content here" />
        <button>Send</button>
      </form>
    </section>
  );
};

export default ContactSection;
