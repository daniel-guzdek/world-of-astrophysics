import React from "react";

const CardImage = ({ src, title, icon, category }) => {
  return (
    <div className="card-image-container">
      {src ? (
        <img src={src} alt={title} className="card-image" />
      ) : (
        <div className="card-icon">
          <span>{icon}</span>
          <span>{category}</span>
        </div>
      )}
    </div>
  );
};

export default CardImage;
