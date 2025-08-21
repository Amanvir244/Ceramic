import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url('/images/bg.avif')" }}
    >
      <div className="hero-content">
        <h1>Ceramics Studio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci massa,
          dapibus quis molestie sit amet, pharetra vitae dolor. Praesent auctor, dui id
          maximus sagittis, lectus enim pharetra quam, ut laoreet tortor metus ut ipsum.
        </p>
        <button className="hero-btn">Show More</button>
      </div>
    </section>
  );
};

export default HeroSection;
