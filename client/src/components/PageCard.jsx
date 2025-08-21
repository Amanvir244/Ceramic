import React from 'react';
import './PageCard.css';

const PageCard = ({ image, title, date, description }) => {
  return (
    <div className="page-card">
      <img src={image} alt={title} className="page-image" />
      <div className="page-info">
        <h3>{title}</h3>
        <p className="page-date">{date}</p>
        <p className="page-desc">{description}</p>
        <a href="#" className="page-link">Czytaj więcej</a>
      </div>
    </div>
  );
};

export default PageCard;
