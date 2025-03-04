import React from "react";
import "../Styles/notification.css";

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      {message}
      <button className="close-btn" onClick={onClose}>✖</button>
    </div>
  );
};

export default Notification;
