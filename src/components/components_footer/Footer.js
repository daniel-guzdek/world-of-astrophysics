import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';

function Footer() {

  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="footer">
      <div className="panels-wrapper">
        <div className="panel__footer-menu">
          <ul className="footer-menu__container">
            <li className="footer-menu__item">
              <Link to="/" className="footer-menu__link text-link" onClick={scrollTop}>Home</Link>
            </li>
            <li className="footer-menu__item">
              <Link to="/articles" className="footer-menu__link text-link" onClick={scrollTop}>Articles</Link>
            </li>
            <li className="footer-menu__item">
              <Link to="/calculators" className="footer-menu__link text-link" onClick={scrollTop}>Calculators</Link>
            </li>
            <li className="footer-menu__item">
              <Link to="/gallery" className="footer-menu__link text-link" onClick={scrollTop}>Gallery</Link>
            </li>
            <li className="footer-menu__item">
              <Link to="/contact" className="footer-menu__link text-link" onClick={scrollTop}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="panel__social-media">
          <ul className="icons-container">
            <li className="icon__item">
              <Link to="/" className="icon__link"><AiOutlineFacebook className="icon-facebook"/><p className="social-name">Facebook</p></Link>
            </li>
            <li className="icon__item">
              <Link to="/" className="icon__link"><FiTwitter className="icon-twitter"/><p className="social-name">Twitter</p></Link>
            </li>
            <li className="icon__item">
              <Link to="/" className="icon__link"><AiOutlineLinkedin className="icon-linkedin"/><p className="social-name">Linkedin</p></Link>
            </li>
            <li className="icon__item">
              <Link to="/" className="icon__link"><GrInstagram className="icon-instagram"/><p className="social-name">Instagram</p></Link>
            </li>
            <li className="icon__item">
              <Link to="/" className="icon__link"><FcGoogle/><p className="social-name">Google</p></Link>
            </li>
          </ul>
        </div>   
      </div>
      <div className="footer-down">
        <h1 className="footer-down__title">World of Astrophysics, Copyright 2021</h1>
      </div>
    </div>
  )
}

export default Footer