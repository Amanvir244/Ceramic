import React from 'react';
import './WorkshopSection.css';

function WorkshopSection({ title, text, image, reverse }) {
  return (
    <div className={`workshop-section ${reverse ? 'reverse' : ''}`}>
      <div className="workshop-image">
        <img src={image} alt={title} />
      </div>
      <div className="workshop-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="workshop-buttons">
          <button className="subscribe">Subscribe</button>
          <button className="show-more">Show more</button>
        </div>
      </div>
    </div>
  );
}

export default WorkshopSection;
