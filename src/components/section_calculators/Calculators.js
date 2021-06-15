import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components_footer/Footer';

function Calculators() {
  return (
    <>
      <div className="calculators-wrapper">
        <video autoPlay loop muted src="../videos/Asteroid_1920px.mp4">
          <source media="(min-width: 1200px)" srcSet="../videos/Asteroid_640px.mp4"/>
          <source media="(min-width: 640px)" srcSet="../videos/Asteroid_340px.mp4"/>
        </video>
        <div className="calculators-container">
          <div className="calculators-content">
            <h1 className="calculators-content__title">Calculators</h1>
            <p className="calculators-content__description">In this section, you can count how long a year lasts on each planet in the solar system, calculate how many seconds a body will fall from 10 meters on each planet, or calculate the mass of each planet.</p>
            <div className="calculators-blocks">
              <Link to='/calculators/calc_1' className="calc-block">
                <h2 className="calc-block__title">Kepler's Third Law</h2>
                <p className="calc-block__description">Calculating how long a year takes on each planet (full lap of the Sun by the planet).</p>
              </Link>
              <Link to='/calculators/calc_2' className="calc-block">
                <h2 className="calc-block__title">Gravity Law for celestial bodies</h2>
                <p className="calc-block__description">Calculating the body drop time from 10 meters for individual planets.</p>
              </Link>
              <Link to='/calculators/calc_3' className="calc-block">
                <h2 className="calc-block__title">Star and Galaxy distances</h2>
                <p className="calc-block__description">Determining the distance of stars and galaxies using the absolute brightness and brightness observed.</p>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Calculators
