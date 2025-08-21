import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';

function Account() {
  const navigate = useNavigate();

  const username = localStorage.getItem('loggedInUser') || "Guest";

  const handleLogout = () => {
    localStorage.removeItem('token');       
    localStorage.removeItem('loggedInUser'); 
    setTimeout(()=>{
        navigate('/login'); 
    },1000)
 
  };

  return (
    <div className="account-page">
      <h2>My Account</h2>
      <div className="profile-info">
        <span role="img" aria-label="profile" className="profile-pic">👤</span>
        <h3>Welcome, {username}!</h3>
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
