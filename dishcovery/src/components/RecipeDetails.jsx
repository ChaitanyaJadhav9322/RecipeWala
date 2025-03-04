import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from "../components/Chatbot";  // ✅ Import Chatbot

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://backend-aivq.onrender.com/recipes/recipe/${id}`)
      .then((res) => {
        setRecipe(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ Error fetching recipe details!");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p>⏳ Fetching your delicious recipe...</p>
      </div>
    );

  if (error)
    return <div className="text-center mt-5 text-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
          🔙 Back
        </button>
        <h2 className="text-center flex-grow-1">{recipe.title} 🍽️</h2>
      </div>

      <div className="card shadow-lg border-0 mt-4 mx-auto" style={{ maxWidth: "700px" }}>
        <img
          src={`https://backend-aivq.onrender.com${recipe.image}`}
          className="card-img-top rounded"
          alt={recipe.title}
          style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}
        />
        <div className="card-body text-center">
          <h4 className="card-title text-primary">🔥 {recipe.title}</h4>
          <p className="card-text text-muted">A mouth-watering dish you’ll love! 😍</p>
        </div>
      </div>

      <div className="card shadow-sm p-4 mt-4">
        <h4 className="mb-3 text-primary">📜 Recipe Details</h4>
        <p><strong>📝 Description:</strong> {recipe.desc}</p>
        <h5 className="mt-3 text-success">🛒 Ingredients</h5>
        <ul className="list-group mb-3">
          {recipe.ingredients.split(",").map((item, index) => (
            <li key={index} className="list-group-item">✅ {item.trim()}</li>
          ))}
        </ul>
        <p><strong>🌍 Cuisine:</strong> {recipe.cuisine} 🍛</p>
      </div>

      {/* ✅ Floating Chatbot */}
      <Chatbot />
    </div>
  );
};

export default RecipeDetails;
