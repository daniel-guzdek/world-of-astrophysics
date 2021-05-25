import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';
import {FiPhone} from 'react-icons/fi';
import {BsEnvelope} from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';
import {AiFillFacebook} from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {GrLinkedin} from 'react-icons/gr';
import Footer from '../components_footer/Footer';

function Contact() {
  return (
    <div className="contact">
      {/* CONTACT INFO */}
      <h1 className="contact__main-title">Contact Form</h1>
      <h2 className="contact__main-subtitle">Feel free to contact us</h2>
      <div className="contact-wrapper">
        <div className="contact__info">
          <h2 className="contact__info-title">Contact informations</h2>
          <p className="contact__info-description">Lorem ipsum dolor, sit amet.</p>

          <div className="contact__info-item">
            <i className="info-item__icon"><FiPhone/></i><span className="info-item__data">00 0123 456 789</span>
          </div>
          <div className="contact__info-item">
            <i className="info-item__icon"><BsEnvelope /></i><span className="info-item__data">astrophysics@email.com</span>
          </div>
          <div className="contact__info-item">
            <i className="info-item__icon"><FiMapPin /></i><span className="info-item__data">86th Street, Oxford, United Kingdom</span>
          </div>
          {/* ENDS CONTACT INFO */}

          <div className="s-media">
            <Link to="https://www.facebook.com/" className="social-icon__link"><AiFillFacebook/></Link>
            <Link to="https://twitter.com/" className="social-icon__link"><FaTwitter/></Link>
            <Link to="https://www.instagram.com/" className="social-icon__link"><FiInstagram/></Link>
            <Link to="https://linkedin.com/" className="social-icon__link"><GrLinkedin/></Link>
          </div>
        </div>
        <div className="form"><Form/></div>
      </div> 
      <Footer />
    </div>
  )
}

export default Contact
