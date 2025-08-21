import React from 'react';
import './NewCollection.css';

const NewCollection = () => {
  return (
    <section className="collection-section">
      <div className="collection-text">
        <h2>New Collection</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien
          ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum.
          Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et
          quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit.
          Curabitur egestas sed nisl rhoncus finibus.
        </p>
        <button className="collection-btn">More</button>
      </div>
<div className="collection-images">
  <div className="left-block">
    <img src="/images/img1.jpg" alt="ceramic 1" className="half-height" />
    <img src="/images/img2.jpg" alt="ceramic 2" className="half-height" />
  </div>
  <div className="right-block">
    <img src="/images/img3.jpeg" alt="ceramic 3" />
  </div>
</div>



    </section>
  );
};

export default NewCollection;
