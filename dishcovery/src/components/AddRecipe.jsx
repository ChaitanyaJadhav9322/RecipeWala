import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/addRecipe.css";
import Chatbot from "../components/Chatbot";
import Notification from "../components/Notifications";

export const AddRecipe = ({ setNotifications }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);
  const [cuisine, setCuisine] = useState("");
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !desc || !ingredients || !image || !cuisine) {
      setNotification({ message: "All fields are required!", type: "error" });
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("ingredients", ingredients);
    formData.append("cuisine", cuisine);
    formData.append("image", image);

    try {
      await axios.post("https://backend-aivq.onrender.com/recipes/add-recipe", formData);
      setNotification({ message: "Recipe Added Successfully!", type: "success" });
      setNotifications((prev) => [...prev, { message: "Recipe Added Successfully!", type: "success" }]);
      navigate("/feed");
    } catch (error) {
      setNotification({ message: "Error adding recipe!", type: "error" });
    }
  };

  return (
    <div className="container mt-4">
      {notification && <Notification {...notification} onClose={() => setNotification(null)} />}
      <h2 className="text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
        <input type="text" className="form-control mb-3" placeholder="Recipe Title" onChange={(e) => setTitle(e.target.value)} required />
        <textarea className="form-control mb-3" placeholder="Description" onChange={(e) => setDesc(e.target.value)} required></textarea>
        <input type="text" className="form-control mb-3" placeholder="Ingredients (comma-separated)" onChange={(e) => setIngredients(e.target.value)} required />
        <input type="file" className="form-control mb-3" accept="image/*" onChange={handleImageChange} required />
        <input type="text" className="form-control mb-3" placeholder="Cuisine Type" onChange={(e) => setCuisine(e.target.value)} required />
        <button type="submit" className="btn btn-success w-100">Add Recipe</button>
      </form>
      <Chatbot />
    </div>
  );
};
