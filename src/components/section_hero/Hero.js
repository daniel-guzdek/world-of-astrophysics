import React from 'react';
import '../../css/style.css';
import '../../videos/Nebula_1920px.mp4';
import '../../videos/Nebula_1280px.mp4';
import '../../videos/Nebula_880px.mp4';
import '../../videos/Nebula_640px.mp4';
import Footer from '../components_footer/Footer';
import TimeDateLongitudeLatitude from './TimeDateLongitudeLatitude';

function Hero() {
  return (
    <>
      <div className="hero-container">
        <video autoPlay loop muted src="../../videos/Nebula_1920px.mp4">
          <source media="(min-width: 1600px)" srcSet="../../videos/Nebula_1920px.mp4"/>
          <source media="(min-width: 1200px)" srcSet="../../videos/Nebula_1280px.mp4"/>
          <source media="(min-width: 800px)" srcSet="../../videos/Nebula_880px.mp4"/>
          <source media="(min-width: 300px)" srcSet="../../videos/Nebula_640px.mp4"/>
        </video>
        <div className="hero-content">
          <h1 className="hero-content__title">World of Astrophysics</h1>
          <h2 className="hero-content__subtitle">Interesting topics in astrophysics, cosmology, astronomy, atomic physics, nuclear physics and quantum mechanics</h2>
        </div>
        {<TimeDateLongitudeLatitude />}
      </div>
      <Footer />
    </>
  )
}

export default Hero