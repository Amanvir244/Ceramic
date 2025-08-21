import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './Signup.css';
import { handleError, handleSuccess } from '../utils';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError('Name, email and password are required');
    }

    try {
      const url = "http://localhost:4000/auth/Signup";
      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message ,error} = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate('/'), 1000);

      } else if(error){
        const details=error?.details[0].message;
        handleError(details);
      }else if (!success){
        handleError(message);
      }
        else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Create a new account</h1>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={signupInfo.name}
              autoFocus
              placeholder='Enter your name...'
            />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={signupInfo.email}
              placeholder='Enter your email...'
            />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={signupInfo.password}
              placeholder='Enter your password...'
            />
          </div>

          <button type="submit">Signup</button>
          <span>
            Already have an account? <Link to='/Login'>Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
