import React, { useState, useEffect } from "react";

const CardImage = ({ src, title, icon, category }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (src) {
      setIsLoading(true);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="card-image-container">
      {src && isLoading && <div class="loader"></div>}
      {src && (
        <img src={src} alt={title} className="card-image" onLoad={handleLoad} />
      )}
      {!src && (
        <div className="card-icon">
          <span>{icon}</span>
          <span>{category}</span>
        </div>
      )}
    </div>
  );
};

export default CardImage;
