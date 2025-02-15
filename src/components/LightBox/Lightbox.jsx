import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Lightbox = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    },
    // eslint-disable-next-line
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-overlay">
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      <div className="lightbox-content">
        <button
          className="lightbox-nav lightbox-prev"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="lightbox-image-container">
          <img
            src={currentImage.largeImageURL}
            alt={currentImage.tags}
            className="lightbox-image"
          />
          <div className="lightbox-description">{currentImage.tags}</div>
        </div>

        <button
          className="lightbox-nav lightbox-next"
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;
