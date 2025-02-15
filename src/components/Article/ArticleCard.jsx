import React from "react";
import { Link } from "react-router-dom";
import CardImage from "../CardImage/CardImage";
import Button from "../common/Button/Button";

const ArticleCard = (props) => {
  return (
    <>
      <div className="article-card">
        <div className="article-card-content">
          <CardImage
            src={props.src}
            title={props.title}
            icon={props.icon}
            category={props.category}
          />
          <h1 className="article-card-title">{props.title}</h1>
          <p className="article-card-description">{props.text}</p>
          <Link to={props.path}>
            <Button name="Read more" className="read-more-btn" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
