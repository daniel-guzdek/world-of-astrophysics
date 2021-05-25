import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';

function ArticleCard(props) {
  return (
    <>
    <div className="article-card">
      <div className="article-card__content">
        <h1 className="article-card__title">{props.title}</h1>
        <p className="article-card__description">{props.text}</p>
        <Link to={props.path}><button className="article-card__button">Read more</button></Link>
      </div>
      <div className="image-container">
        <img src={props.src} alt={props.title} className="article-card__image"/>
      </div>
    </div>
    </>

  )
}

export default ArticleCard
