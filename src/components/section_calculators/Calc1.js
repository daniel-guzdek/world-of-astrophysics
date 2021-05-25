import React  from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import Calc1Math from './Calc1Math';
import Footer from '../components_footer/Footer';

const Calc1 = () => {
  return(
    <>
      <div className="calc-wrapper">
        <Link to='/calculators' className="return-link"><IoArrowBackCircle className="return-icon"/><em className="return-em">Back to Calculators Section</em></Link>
        <h1 className="calc-item__title">Kepler's Third Law</h1>
        <p className="calc-item__description">You can calculate how long a year takes on each planet (full lap of the Sun by the planet) by following formula.</p>

        <div className="calc-panel">
          <div className="calculator-math"><Calc1Math /></div>
          <div className="explanation-formulas">
            <p className="explanation">In his work, Newton presented a coherent theory of gravity, describing both the falling of objects on the Earth and the movement of celestial bodies. The English physicist relied on his proposed principles of dynamics and Kepler's rights regarding the distance of the planet from the Sun.<br/><br/>To simplify, let's assume that two planets move in circular orbit. Kepler's Law will take the form of:</p><img className="formula formula-big" src="../images/formulas/calc-1/1.png" alt="Kepler's third law formula"/>
            <p className="explanation">Where: <br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-1/3.png" alt="semi-major axis"/> - the semi-major axis of planet's orbit, <br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-1/4.png" alt="orbital period"/> - orbital period of planets</p>
            <p className="explanation">To calculate how long a year on a planet lasts, we can compare its distance from the Sun with our distance from the Sun (1 AU - astronomical unit) and use it as <img className="formula formula-small" src="../images/formulas/calc-1/5.png" alt="orbital period"/> in the formula. <br/>By transforming the formula and knowing the distance of a planet from the Sun (<img className="formula formula-small" src="../images/formulas/calc-1/6.png" alt="distance from the Sun"/>), we can get the time value of its orbital period.<br/><br/>Below: </p>
            <img className="formula formula-big" src="../images/formulas/calc-1/2.png" alt="orbital period of a planet"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )  
}

export default Calc1
