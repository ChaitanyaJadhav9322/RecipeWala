import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Notification from "../components/Notifications";

const Register = ({ setIsLoggedIn, setNotifications }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post("https://backend-aivq.onrender.com/auth/register", { username, email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", username);
      setIsLoggedIn(true);
      setNotification({ message: "SignUp Successful", type: "success" });
      setNotifications((prev) => [...prev, { message: "SignUp Successful", type: "success" }]);
      navigate("/feed");
    } catch (error) {
      setNotification({ message: error.response?.data?.message || "Registration Failed!", type: "error" });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {notification && <Notification {...notification} onClose={() => setNotification(null)} />}
      <div className="card p-4 shadow" style={{ width: "25rem" }}>
        <h2 className="text-center mb-3">Register</h2>
        <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-success w-100" onClick={handleRegister}>Register</button>
        <p className="text-center mt-3">Already have an account? <Link to="/signin">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
