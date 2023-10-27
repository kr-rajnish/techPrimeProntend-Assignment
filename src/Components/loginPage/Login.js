import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import bgImage from "../image/loginbg1.svg";
import Logo from "../image/Logo.svg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can add your login logic. For a basic example, we'll just set isLoggedIn to true if the username and password are not empty.
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleClick = () => {
    navigate("/");
  };
  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        <button
          onClick={() => {
            setIsLoggedIn(false);
            setUsername("");
            setPassword("");
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <img
        className="image-back"
        src={bgImage}
        alt="IMG"
        style={{ width: "1520px" }}
      />
      <form onSubmit={handleSubmit} className="form-container">
        <div className="email-input">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="password-input">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </form>
      <img className="logo-img" src={Logo} alt="Logo" />
    </div>
  );
}

export default Login;
