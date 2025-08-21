import React from 'react';
import './WorkshopHeader.css';

const WorkshopHeader = () => {
  const backgroundImage = '/images/adult.jpg'; 
  return (
    <section
      className="Workshop-header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <h1>Workshop</h1>
    </section>
  );
};

export default WorkshopHeader;
