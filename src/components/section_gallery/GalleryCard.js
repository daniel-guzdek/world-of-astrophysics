import React from 'react'

function GalleryCard(props) {
  return (
    <div className="gallery-card">
      <div className="title-container">
        <h3 className="card__title">{props.title}</h3>
      </div>
      <div className="image-container">
        <img className="card__image" src={props.src} alt={props.title}/>
      </div>  
    </div>
  )
}

export default GalleryCard
