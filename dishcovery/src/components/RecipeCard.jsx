import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Recipecard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={`http://localhost:5000${recipe.image}`} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <Link to={`/recipe/${recipe._id}`} className="details-btn">See Details</Link>
    </div>
  );
};

export default RecipeCard;
