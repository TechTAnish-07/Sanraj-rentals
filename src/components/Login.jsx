// pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import userData from './userData';
const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleFullNameInput = (e) => {
    setFullName(e.target.value);
  };

const handleSubmitButton = (e) => {
  e.preventDefault();

  if (isSignIn) {
  const foundUser = userData.find(
    (user) => user.email === email && user.password === password
  );
  
  if (foundUser) {
    localStorage.setItem("isLoggedIn", "true");
   
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    navigate("/");
  } else {
    alert("Invalid credentials!"); 
  }
 } else {
   const newUser = {
    id: Date.now(),
    fullName,
    email,
    password
  };
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  userData.push({newUser});
  navigate("/");
}
  setEmail('');
  setPassword('') 
  setFullName('');
};


  return (
    <div className="auth-container">
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <form className="auth-form" onSubmit={handleSubmitButton}>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="auth-input"
            value={fullName}
            onChange={handleFullNameInput}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={handleEmailInput}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={handlePasswordInput}
          required
        />

        <button type="submit" className="auth-button">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <p className="warning-message">
        {isSignIn ? (
          <>
            🚨 Don't have an account?{' '}
            <button onClick={toggleForm} className="toggle-button">
              Please Sign Up
            </button>
          </>
        ) : (
          <>
            🔐 Already have an account?{' '}
            <button onClick={toggleForm} className="toggle-button">
              Sign In
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default Login;