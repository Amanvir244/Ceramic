import React from 'react';
import './OurStory.css';

function OurStory() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bgstory.avif)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  return (
    <section className="our-story-section" style={backgroundStyle}>
      <div className="story-content">
        <h2>Our story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien 
          vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque 
          vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem 
          efficitur. Etiam aliquam posuere hendrerit.
        </p>
      </div>
      
    </section>
  );
}

export default OurStory;
