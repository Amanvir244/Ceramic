import React from 'react';
import './Bestsellers.css';

const products = [
  {
    title: 'Panda Mug',
    price: '20 USD',
    image: '/images/mug.jpg',
  },
  {
    title: 'Printed Plate',
    price: '30 USD',
    image: '/images/plate.jpg',
  },
  {
    title: 'Silver Set',
    price: '40 USD',
    image: '/images/silver.jpg',
  },
  {
    title: 'Workshops for adults',
    price: '210 USD',
    image: '/images/adult.jpg',
  },
];

function Bestsellers() {
  return (
    <section className="bestsellers-section">
      <h2 className="bestsellers-heading">Bestsellers</h2>
      <div className="bestsellers-grid">
        {products.map((item, index) => (
          <div key={index} className="bestseller-card">
            <img src={item.image} alt={item.title} className="bestseller-image" />
            <div className="bestseller-info">
              <p className="bestseller-title">{item.title}</p>
              <p className="bestseller-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Bestsellers;
