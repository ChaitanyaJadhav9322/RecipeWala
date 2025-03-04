import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://backend-aivq.onrender.com/auth/login", { email, password });

      // Store user info in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("email", res.data.email || email); // Ensure email is stored

      setIsLoggedIn(true);
      alert("Login Succesful");
      navigate("/feed"); // Redirect to home page
    } catch (error) {
      alert(error.response?.data?.message || "Invalid Credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "25rem" }}>
        <h2 className="text-center mb-3">Login</h2>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
        <p className="text-center mt-3">
          New user? <Link to="/account">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
