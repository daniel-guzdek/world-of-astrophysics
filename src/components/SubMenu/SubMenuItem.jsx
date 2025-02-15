import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenuItem = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showSubMenu = () => setIsVisible(!isVisible);

  return (
    <>
      <Link
        to={item?.path}
        className="submenu-link"
        onClick={item?.sublinks && showSubMenu}
      >
        <div className="submenu-link-icon">{item?.icon}</div>
        <div className="submenu-link-title">{item?.category}</div>
      </Link>
      {isVisible &&
        item?.sublinks?.map((item, index) => {
          return (
            <Link to={item?.path} key={index} className="sidebar-link">
              {item?.icon}
              <span className="sidebar-link-item-label">{item?.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenuItem;
