import React from 'react';
import './ProductCard.css';
import { useCart } from './CartContext';

function ProductCard({ image, title, price }) {
  const { addToCart } = useCart();

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."; 

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price"><strong>${price}</strong></p>
      <button
        className="add-to-cart"
        onClick={() => addToCart({ image, title, price: Number(price), description })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
