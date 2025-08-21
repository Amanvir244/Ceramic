import React from 'react';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="/images/blog.png" alt="Social" className="sidebar-img" />
      <div className="social-label">Our social media</div>
      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>

      <div className="newsletter">
        <h3>Subscribe to our newsletter</h3>
        <form>
          <label>First name:</label>
          <input type="text" placeholder="Emily" />
          <label>Your e-mail:</label>
          <input type="email" placeholder="your@email.pl" />
          <label>Message:</label>
          <textarea placeholder="Tu wpisz treść wiadomości" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
