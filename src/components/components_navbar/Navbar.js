import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import { GiBlackHoleBolas } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  // Changing Burger image (Bars and Times) on click 
  const closeMobileMenu = () => {
    setClicked(false);
    // fixing scrolling to the web side's top after clicking ,,nav link''
    window.scrollTo(0, 0);
  };

  // Showing or hiding burger menu after click burger icon
  const showMobileMenu = () => {
    document.querySelector('.nav-menu').classList.toggle('active');
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar__logo-name-container">
            <Link to='/' className="navbar__logo-name-link" style={{ color: 'cornflowerblue', textDecoration: 'inherit'}} onClick={closeMobileMenu}>
              <div className="navbar__logo"><GiBlackHoleBolas /></div>
              <div className="navbar__name-container"><p className="navbar__name-part-I">World of</p><p className="navbar__name-part-II">Astrophysics</p></div>
            </Link>  
          </div>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-menu__item">
              <Link to='/articles' className="nav-menu__link text-link" onClick={closeMobileMenu}>Articles</Link>
            </li>
            <li className="nav-menu__item">
              <Link to='/calculators' className="nav-menu__link text-link" onClick={closeMobileMenu}>Calculators</Link>
            </li>
            <li className="nav-menu__item">
              <Link to='/gallery' className="nav-menu__link text-link" onClick={closeMobileMenu}>Gallery</Link>
            </li>
            <li className="nav-menu__item">
              <Link to='/contact' className="nav-menu__link text-link" onClick={closeMobileMenu}>Contact</Link>
            </li>
          </ul>
          <div className="burger-container" onClick={handleClick}><i className="burger__icon" onClick={showMobileMenu}>{clicked ? <FaTimes /> : <FaBars />}</i></div>
        </div>  
      </nav>
    </>
  )
}

export default Navbar
