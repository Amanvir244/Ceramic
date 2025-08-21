import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useCart } from './CartContext';
import CartModal from './CartModal';

function Navbar() {
  const location = useLocation();
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span role="img" aria-label="logo">🌿🍀</span> ceramic
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/shop" className={location.pathname === "/shop" ? "active" : ""}>SHOP</Link>
          <Link to="/workshop" className={location.pathname === "/workshop" ? "active" : ""}>WORKSHOP</Link>
          <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>BLOG</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>CONTACT</Link>
         <Link to="/Login" className={location.pathname === "/Login" ? "active" : ""}>LOGIN</Link>
         <Link to="/Signup" className={location.pathname === "/Signup" ? "active" : ""}>SIGNUP</Link>
         <Link to="/account" className="profile-link">
            <span role="img" aria-label="profile">👤</span>
          </Link>

          <span className="cart-icon" onClick={() => setShowCart(true)}>
            <img src="/images/shopping-cart.png" alt="Cart" />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </span>
        </div>
      </nav>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </>
  );
}

export default Navbar;
