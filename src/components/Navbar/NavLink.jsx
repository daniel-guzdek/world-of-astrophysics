import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ path, text, className, handler }) => {
  return (
    <li className="nav-item">
      <Link to={path} className={className} onClick={handler}>
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
