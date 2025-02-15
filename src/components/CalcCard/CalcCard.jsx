import React from "react";
import { Link } from "react-router-dom";

const CalcCard = ({ path, title, description }) => {
  return (
    <Link to={path} className="calc-card">
      <h2 className="calc-card__title">{title}</h2>
      <p className="calc-card__description">{description}</p>
    </Link>
  );
};

export default CalcCard;
