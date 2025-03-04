import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faConciergeBell, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import mainImage from "../assets/images/seventh.png"; // Left-side image
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";
import fourth from "../assets/images/fourth.png";
import fifth from "../assets/images/fifth.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      {/* Left Side - Main Image */}
      <div style={leftStyle}>
        <img src={mainImage} alt="Main Dish" style={mainImageStyle} />
      </div>

      {/* Right Side - About Content */}
      <div style={rightStyle}>
        <h1 style={titleStyle}>About Recipe.com</h1>
        <p style={textStyle}>
          Explore a world of delicious recipes, from quick meals to gourmet dishes.
          Our platform helps you find the best recipes, cooking tips, and meal ideas
          to elevate your culinary skills.
        </p>

        {/* Row of Circular Images */}
        <div style={imageRowStyle}>
          <img src={first} alt="Dish 1" style={imageStyle} />
          <img src={second} alt="Dish 2" style={imageStyle} />
          <img src={third} alt="Dish 3" style={imageStyle} />
          <img src={fourth} alt="Dish 4" style={imageStyle} />
          <img src={fifth} alt="Dish 5" style={imageStyle} />
        </div>

        {/* Buttons */}
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => navigate("/explore")}>
            explore our some recipies
          </button>
          <button style={buttonStyleSecondary} onClick={() => navigate("/signin")}>
             Get Started !!
          </button>
        </div>

        {/* Icons Section */}
        <div style={iconContainerStyle}>
          <FontAwesomeIcon icon={faUtensils} style={iconStyle} />
          <FontAwesomeIcon icon={faConciergeBell} style={iconStyle} />
          <FontAwesomeIcon icon={faHeart} style={iconStyle} />
        </div>
      </div>
    </div>
  );
};

/* Styles */
const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
  maxWidth: "1200px",
  margin: "auto",
  flexWrap: "wrap",
};

const leftStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
};

const rightStyle = {
  flex: "1",
  textAlign: "left",
  padding: "20px",
};

const mainImageStyle = {
  width: "100%",
  maxWidth: "500px", // Increased width
  height: "300px", // Reduced height
  borderRadius: "10px",
  objectFit: "cover", // Ensures proper aspect ratio
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
};

const titleStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "10px",
};

const textStyle = {
  fontSize: "1.1rem",
  color: "#555",
  marginBottom: "20px",
};

const imageRowStyle = {
  display: "flex",
  justifyContent: "flex-start",
  gap: "10px",
};

const imageStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const buttonContainerStyle = {
  marginTop: "20px",
  display: "flex",
  gap: "15px",
};

const buttonStyle = {
  backgroundColor: "#ff5722",
  color: "#fff",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
};

const buttonStyleSecondary = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
};

const iconContainerStyle = {
  marginTop: "20px",
  display: "flex",
  gap: "15px",
  fontSize: "24px",
};

const iconStyle = {
  color: "#ff5722",
};

export default About;
