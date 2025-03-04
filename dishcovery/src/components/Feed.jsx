import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import Chatbot from "../components/Chatbot";  // ✅ Import Chatbot

export const Feed = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://backend-aivq.onrender.com/recipes/get-recipes")
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleLike = (recipeId) => {
    setLikedRecipes((prev) => ({
      ...prev,
      [recipeId]: !prev[recipeId],
    }));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Recipe Feed</h2>

      <div className="input-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-secondary">Search</button>
      </div>

      <div className="row">
        {filteredRecipes.length === 0 ? (
          <p className="text-center">No recipes found.</p>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe._id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow">
                <img
                  src={`https://backend-aivq.onrender.com${recipe.image}`}
                  className="card-img-top"
                  alt={recipe.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">
                    {recipe.desc.length > 100
                      ? recipe.desc.substring(0, 100) + "..."
                      : recipe.desc}
                  </p>

                  {/* Like Button */}
                  <button
                    className="btn"
                    style={{
                      backgroundColor: likedRecipes[recipe._id]
                        ? "#007bff"
                        : "#6c757d",
                      color: "white",
                      marginRight: "10px",
                    }}
                    onClick={() => toggleLike(recipe._id)}
                  >
                    {likedRecipes[recipe._id] ? <FaThumbsUp /> : <FaRegThumbsUp />}{" "}
                    {likedRecipes[recipe._id] ? "Liked" : "Like"}
                  </button>

                  <button className="btn btn-primary" onClick={() => navigate(`/recipe/${recipe._id}`)}>
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Add New Recipe Button */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div
            className="card h-100 d-flex align-items-center justify-content-center text-center bg-light border"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/add-recipe")}
          >
            <h3 className="text-success">+</h3>
            <p>Add New Recipe</p>
          </div>
        </div>
      </div>

      {/* ✅ Floating Chatbot Added to Feed Page */}
      <Chatbot />
    </div>
  );
};
