import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Navbar = ({ isLoggedIn, handleLogout, notifications }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const username = localStorage.getItem("username") || "User";
  const email = localStorage.getItem("email") || "example@example.com";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow">
      <div className="container-fluid">
        {/* Logo / Brand Name */}
        <Link className="navbar-brand fw-bold fs-1" to="/" style={{ fontFamily: "Poppins, sans-serif" }}>
          Recipe<span className="text-warning">Hub</span>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4">
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-semibold text-light" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-semibold text-light" to="/explore">Explore</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link fs-5 fw-semibold text-light" to="/feed">Feed</Link>
                </li>

                 

                {/* Account Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fs-5 fw-semibold" href="#" id="navbarDropdown" data-bs-toggle="dropdown">
                    Account
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><span className="dropdown-item-text text-white">{username}</span></li>
                    <li><span className="dropdown-item-text text-white">{email}</span></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link fs-5 fw-semibold text-light" to="/account">Create Account</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="btn btn-primary fw-bold px-4">Sign In</Link>
                </li>
              </>
            )}
          </ul>


           
          {/* Notification Icon */}
          <div className="nav-item position-relative">
                  <FaBell className="text-light fs-4 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
                  {notifications.length > 0 && <span className="badge bg-danger">{notifications.length}</span>}
                </div>
                {showDropdown && (
                  <div className="dropdown-menu dropdown-menu-end p-2">
                    {notifications.length === 0 ? (
                      <p className="dropdown-item">No notifications</p>
                    ) : (
                      notifications.map((note, index) => (
                        <p key={index} className={`dropdown-item ${note.type}`}>{note.message}</p>
                      ))
                    )}
                  </div>
                )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
