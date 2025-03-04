import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faConciergeBell, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import mainImage from "../assets/images/seventh.png";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";
import fourth from "../assets/images/fourth.png";
import fifth from "../assets/images/fifth.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="row align-items-center text-center text-lg-start">
        {/* Left Side - Main Image */}
        <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
          <img
            src={mainImage}
            alt="Main Dish"
            className="img-fluid rounded shadow"
            style={{ width: "100%", maxWidth: "500px", height: "250px", objectFit: "cover" }}
          />
        </div>

        {/* Right Side - About Content */}
        <div className="col-lg-6">
         
          <p className="text-muted">
            Explore a world of delicious recipes, from quick meals to gourmet dishes.
            Our platform helps you find the best recipes, cooking tips, and meal ideas
            to elevate your culinary skills.
          </p>

          {/* Row of Circular Images */}
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-3">
            {[first, second, third, fourth, fifth].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Dish ${index + 1}`}
                className="rounded-circle shadow"
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <button className="btn btn-danger px-4 py-2" onClick={() => navigate("/explore")}>
              Explore Recipes
            </button>
            <button className="btn btn-primary px-4 py-2" onClick={() => navigate("/signin")}>
              Get Started!
            </button>
          </div>

          {/* Icons Section */}
          <div className="d-flex justify-content-center justify-content-lg-start gap-4 mt-4 fs-2 text-danger">
            <FontAwesomeIcon icon={faUtensils} />
            <FontAwesomeIcon icon={faConciergeBell} />
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
