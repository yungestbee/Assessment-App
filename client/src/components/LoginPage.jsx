import React, { useState } from "react";
import axios from "axios";
import "../css/login.css";
import { Link, Routes, Route } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Validation checks
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (email.includes(" ")) {
      setError("Email should not contain spaces");
      return;
    }

    if (!validateEmail(email)) {
      setError("Enter a valid email address");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password.length > 40) {
    setError("Password must not exceed 40 characters");
    return;
  }

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,40}$/;
  if (!passwordRegex.test(password)) {
    setError("Password must contain at least one number and one special character");
    return;
  }

    try {
      const response = await axios.post("http://localhost:6000/api/v1/login", {
        email,
        password,
      });

      console.log("Login success:", response.data);
      setError(""); // Clear error on success
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <section id="body">
      <div className="overall">
        <div>
          <p className="text1">Login</p>
        </div>
        <form className="group2" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="aa">
            {/* <a className="link" href="#">Forgot Password?</a> */}
            <Link to="/forgot-password" className = "link">Forgot Password</Link>
          </div>

          {error && <p className="error">{error}</p>}

          <div className="btn-top aa">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
