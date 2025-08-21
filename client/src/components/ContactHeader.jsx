import React from 'react';
import './ContactHeader.css';

const ContactHeader = () => {
  const backgroundImage = '/images/bg.avif'; 
  return (
    <section
      className="contact-header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <h1>Contact</h1>
    </section>
  );
};

export default ContactHeader;
