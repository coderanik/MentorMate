import React, { useState } from 'react';
import './Landingpage.css';

const Landingpage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    password: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  // Predefined user credentials for demonstration (can be replaced with dynamic backend logic)
  const predefinedUser = {
    username: 'testuser',
    password: 'password123',
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Toggle between Signup and Login forms
  const handleToggle = () => {
    setIsSignup(!isSignup);
    setError(''); // Clear error messages when toggling
  };

  // Handle form submission for signup or login
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, username, password } = formData;

    if (isSignup) {
      // Signup logic
      console.log('Sign Up Details:', formData);
      alert('Account created successfully!');
      setLoggedIn(false); // Not logging in directly after signup
      setFormData({ fullname: '', username: '', password: '' });
    } else {
      // Login logic: Check if username and password match predefined user
      if (username === predefinedUser.username && password === predefinedUser.password) {
        console.log('Login Successful');
        setLoggedIn(true);
        setError('');
      } else {
        console.log('Login Failed');
        setError('Invalid username or password. Please try again.');
      }
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <div className="logo-circle"></div>
          <span>MentorMate</span>
        </div>
        <div className="menu-icons">
          <div className="menu-icon"></div>
          <div className="user-icon"></div>
        </div>
      </header>

      <div className="left-side">
        <div className="circle">
          <div className="icons">
          </div>
        </div>
      </div>

      <div className="right-side">
        {!loggedIn ? (
          <div className="signup-form">
            <div className="form-header">
              <button
                className={isSignup ? 'active' : ''}
                onClick={handleToggle}
              >
                Sign Up
              </button>
              <button
                className={!isSignup ? 'active' : ''}
                onClick={handleToggle}
              >
                Log In
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {isSignup && (
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Your Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  pattern="^[a-zA-Z0-9]+$"
                  title="Alphanumeric only"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="signup-button">
                {isSignup ? 'Sign Up' : 'Log In'}
              </button>

              {error && <p className="error-message">{error}</p>}
            </form>

            <div className="login-link">
              <p>
                {isSignup ? 'Already a member?' : 'Not a member yet?'}
                <a href="#" onClick={handleToggle}>
                  {isSignup ? ' Log in' : ' Sign up'}
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="welcome-message">
            <h2>Welcome back, {formData.username}!</h2>
            <p>You are successfully logged in.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landingpage;
