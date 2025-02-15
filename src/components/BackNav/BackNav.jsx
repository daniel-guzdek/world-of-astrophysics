import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const BackNav = ({ text, path }) => {
  return (
    <Link to={path} className="back-link">
      <IoArrowBackCircle className="back-icon" />
      <em className="back-text">{text}</em>
    </Link>
  );
};

export default BackNav;
