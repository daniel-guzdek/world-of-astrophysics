import React, { useState, useEffect } from "react";
import Preloader from "../../components/Preloader/Preloader";
import Lightbox from "../../components/LightBox/Lightbox";

const Images = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    setLoadedImages({});
  }, [images]);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const openLightbox = (initialIndex) => {
    setLightboxImage(initialIndex);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      <div className="images-grid-container">
        <div className="images-grid">
          {images?.map((img, index) => (
            <div
              key={img.id}
              className="images-grid-item"
              onClick={() => openLightbox(index)}
            >
              {!loadedImages[img.id] && (
                <div className="images-loader">
                  <Preloader />
                </div>
              )}
              <div className="image-wrapper">
                <img
                  className={`image-photo ${
                    loadedImages[img.id] ? "loaded" : "loading"
                  }`}
                  src={img.largeImageURL}
                  alt={img.tags}
                  onLoad={() => handleImageLoad(img.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightboxImage !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxImage}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default Images;
