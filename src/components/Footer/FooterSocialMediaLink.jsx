import React from "react";
import { Link } from "react-router-dom";

const FooterSocialMediaLink = ({
  platform,
  path,
  IconComponent,
  className,
}) => {
  return (
    <li className="social-item">
      <Link to={path} className="social-link">
        <IconComponent className={className} />
        <p className="social-name">{platform}</p>
      </Link>
    </li>
  );
};

export default FooterSocialMediaLink;
