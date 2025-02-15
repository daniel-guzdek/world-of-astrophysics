import React, { useState } from "react";
import { GiBlackHoleBolas } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { showMobileMenu } from "../../utils/uiHelpers";
import { Link } from "react-router-dom";
import { navLinks } from "../../utils/linkHelpers";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = () => setIsClosed(!isClosed);

  const closeMobileMenu = () => {
    setIsClosed(false);
    window.scrollTo(0, 0);
  };

  const renderNavLinks = navLinks?.map(({ path, text, className }, index) => (
    <NavLink
      key={index}
      path={path}
      text={text}
      className={className}
      handler={closeMobileMenu}
    />
  ));

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <Link
              to="/"
              className="navbar-logo-link"
              style={{ color: `$primary-color`, textDecoration: "inherit" }}
              onClick={closeMobileMenu}
            >
              <div className="navbar-logo">
                <GiBlackHoleBolas />
              </div>
              <span className="navbar-title">World of Astrophysics</span>
            </Link>
          </div>
          <ul className={isClosed ? "navmenu active" : "navmenu"}>
            {renderNavLinks}
          </ul>
          <div className="burger-container" onClick={handleClick}>
            <i className="burger-icon" onClick={showMobileMenu}>
              {isClosed ? <FaTimes /> : <FaBars />}
            </i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
