import React from "react";
import { Link } from "react-router-dom";

const FooterPageLink = ({ path, className, text, handler }) => {
  return (
    <li className="footer-menu-item">
      <Link to={path} className={className} onClick={handler}>
        {text}
      </Link>
    </li>
  );
};

export default FooterPageLink;
