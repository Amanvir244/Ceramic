import React from 'react';
import './BlogCard.css';

const BlogCard = ({ image, title, date, description }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3>{title}</h3>
        <p className="blog-date">{date}</p>
        <p className="blog-description">{description}</p>
        <a href="#" className="read-more">Czytaj więcej</a>
      </div>
    </div>
  );
};

export default BlogCard;
