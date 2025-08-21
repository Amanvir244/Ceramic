import React from 'react';
import './ShopHeader.css';

const ShopHeader = () => {
  const backgroundImage = '/images/shop1.jpeg'; 
  return (
    <section
      className="shop-header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <h1>Shop</h1>
    </section>
  );
};

export default ShopHeader;
