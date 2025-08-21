import React from 'react';
import './CartModal.css';
import { useCart } from './CartContext';

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" role="dialog" aria-modal="true" aria-label="Shopping Cart Modal">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>My Cart</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close Cart">×</button>
        </div>

      {cartItems.length === 0 ? (
  <div className="cart-empty-container">
    <div className="cart-empty-box">
      <p>The cart is empty</p>
    </div>
    <div className="cart-footer empty">
      <button className="keep-shopping-btn" onClick={() => window.location.href = '/shop'}>
        KEEP SHOPPING
      </button>
    </div>
  </div>
) : (
          <>
            <div className="cart-table-header">
              <span className="item-col">Items</span>
              <span className="qty-col">Qty</span>
              <span className="unit-col">Unit Price</span>
              <span className="total-col">Total</span>
            </div>

            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item-row">
                  <div className="item-col">
                    <img src={item.image} alt={item.title} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <p className="cart-item-description">{item.description}</p>
                    </div>
                  </div>
                  <div className="qty-col">{item.quantity}</div>
                  <div className="unit-col">${item.price.toFixed(2)}</div>
                  <div className="total-col">
                    ${(item.price * item.quantity).toFixed(2)}
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.title)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <button className="keep-shopping-btn" onClick={onClose}>KEEP SHOPPING</button>
              <div className="cart-total">
                <p><strong>SUBTOTAL:</strong> ${total.toFixed(2)}</p>
                <button className="checkout-btn">NEXT</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
