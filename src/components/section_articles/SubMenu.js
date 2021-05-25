import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link to={item.path} className="submenu__link" onClick={item.sublinks && showSubnav}>
        <div className="submenu__link-icon">{item.icon}</div>
        <div className="submenu__link-title">{item.link_title}</div>
      </Link>
      {subnav &&
        item.sublinks.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="sidebar__link">
              {item.icon}
              <div className="sidebar__link-dropdown-label">{item.title}</div>
            </Link>
          );
        })}
    </>
  )
}

export default SubMenu;