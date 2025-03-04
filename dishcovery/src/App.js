import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notification from "./components/Notifications";
import "./styles.css";
import { Explore } from "./components/Explore";
import { Feed } from "./components/Feed";
import { AddRecipe } from "./components/AddRecipe";
import Login from "./components/Login";
import Register from "./components/Register";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import RecipeDetails from "./components/RecipeDetails";
import About from "./components/About";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
  };

  const addNewRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} notifications={notifications} />
      <div className="content">
        {notifications.length > 0 && (
          <Notification {...notifications[notifications.length - 1]} onClose={() => setNotifications([])} />
        )}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signin" element={<Login setIsLoggedIn={setIsLoggedIn} setNotifications={setNotifications} />} />
          <Route path="/account" element={<Register setIsLoggedIn={setIsLoggedIn} setNotifications={setNotifications} />} />
          <Route path="/feed" element={isLoggedIn ? <Feed /> : <Navigate to="/signin" />} />
          <Route path="/chatbot" element={isLoggedIn ? <Chatbot /> : <Navigate to="/signin" />} />
          <Route path="/recipe/:id" element={isLoggedIn ? <RecipeDetails /> : <Navigate to="/signin" />} />
          <Route path="/add-recipe" element={isLoggedIn ? <AddRecipe setNotifications={setNotifications} /> : <Navigate to="/signin" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;