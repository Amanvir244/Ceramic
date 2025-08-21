import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './Login.css';
import { handleError, handleSuccess } from '../utils';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
  
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('email and password are required');
    }

    try {
      const url = "http://localhost:4000/auth/Login";
      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();
      const { success, message ,jwtToken,name,error} = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('loggedInUser',name);
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
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          

          <div>
            <label htmlFor='email'>Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={loginInfo.email}
              placeholder='Enter your email...'
            />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={loginInfo.password}
              placeholder='Enter your password...'
            />
          </div>

          <button type="submit">Login</button>
          <span>
            Create a new account? <Link to='/Signup'>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
