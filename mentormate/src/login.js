import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in both fields");
      return;
    }
    

    try {
      // Replace with your actual API endpoint//
      const response = await fetch("https://your-api-endpoint.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Authentication successful
        setError("");
        setIsLoggedIn(true);
        console.log("Login successful!", data);
        // You can store user data or token if needed, e.g., localStorage.setItem('token', data.token);
      } else {
        // Authentication failed
        setError(data.message || "Invalid username or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {isLoggedIn ? (
        <div className="success-message">
          <h3>Welcome, {username}!</h3>
          <p>You have successfully logged in.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text" pattern="[a-zA-Z0-9]+" title="Only letters"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username with no special character"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
