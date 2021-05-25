import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';
import { create, all } from 'mathjs';
import { IoArrowBackCircle } from 'react-icons/io5';
import Calc3aMath from './Calc3aMath';
import Calc3bMath from './Calc3bMath';
import Footer from '../components_footer/Footer';

const Calc3 = () => {
  const config = { }
  const math = create(all, config);
  const hubbleConstant = 67.8;
  
  const [ageOfTheUniverse, setAgeOfTheUniverse] = useState('');

  const calculateAgeOfTheUniverse = () => {
    const ageOfTheUniverse = (math.evaluate(`(1 / ${hubbleConstant}) * 1000`)).toFixed(2);
    setAgeOfTheUniverse(ageOfTheUniverse);
  }

  useEffect(() => {
    calculateAgeOfTheUniverse();
  })


  return(
    <>
      <div className="calc-wrapper">
        <Link to='/calculators' className="return-link"><IoArrowBackCircle className="return-icon"/><em className="return-em">Back to Calculators Section</em></Link>
        <h1 className="calc-item__title">Star and Galaxy distances</h1>
        <p className="calc-item__description">Determining the distance of stars and galaxies using the absolute brightness and brightness observed.</p>

        <div className="calc-panel">
          <div className="calculator-math"><Calc3aMath /></div>
          <div className="explanation-formulas">
            <h1 className="chapter__title">Hubble's law</h1>
            <p className="explanation">Distance measurements are one of the most important and at the same time the most
            widely used by astronomers. The most important result of concluding the extragalactic distance scale is the determination of the Hubble constant value<img className="formula formula-small" src="../images/formulas/calc-3/calc3a/H0.png" alt="Hubble constant"/>, which determines the age and size of the universe observed. The Hubble's Law formula is:</p><img className="formula formula-big" src="../images/formulas/calc-3/calc3a/1.png" alt="Hubble's law formula"/>
            <p className="explanation">Where: <br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-3/calc3a/v.png" alt="recessional velocity"/> - is the recessional velocity, typically expressed in km/s,<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-3/calc3a/H0.png" alt="Hubble constant"/> - Hubble constant<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-3/calc3a/r.png" alt="galaxy distance"/> - galaxy distance measured in mega parsecs (Mpc)<br/><br/>From this formula we can calculate the approximate age of the Universe:<img className="formula formula-big" src="../images/formulas/calc-3/calc3a/2.png" alt="gravitational acceleration formula"/>If we assume that the Hubble constant is <img className="formula formula-small" src="../images/formulas/calc-3/calc3a/Hubble_constant.png" alt="Hubble constant"/> the time since the Big Bang and at the same time age of the Universe is: <span className="calc-item__description" style={{fontWeight: 700}}>{ageOfTheUniverse}</span> billion years.</p><br/><br/>

            <h1 className="chapter__title">Distance to the nearest stars (measured by parallax)</h1>
            <p className="explanation">Distance to close stars is measured by parallax and calculated from the formula:
            <img className="formula formula-big" src="../images/formulas/calc-3/calc3a/3.png" alt="distance to close stars measured by parallax"/>Where: <br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-3/calc3a/d.png" alt="the distance to star (pc)"/> - is the distance to star (pc),<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-3/calc3a/parallax.png" alt="parallax angle ('')"/> - parallax angle ('')<br/><br/>Above is a calculator counting distances for the most important and closest to us stars in (pc), light years (ly) and in kilometers (km).</p><br/><br/>

            <h1 className="chapter__title">Determining the distance to the distant stars using absolute magnitude and apparent magnitude</h1>
            <div className="calculator-math"><Calc3bMath /></div>
            <p className="explanation">Absolute magnitude <em style={{fontWeight: 700}}>M</em> is a measure of the luminosity of a celestial object, on an inverse logarithmic astronomical magnitude scale. An object's absolute magnitude is defined to be equal to the apparent magnitude that the object would have if it was viewed from a distance of exactly 10 parsecs (32.6 light-years), without extinction (or dimming) of its light due to absorption by interstellar matter and cosmic dust. Absolute stellar magnitude symbol is <em style={{fontWeight: 700}}>M</em> and is expressed in magnitudo (<em style={{fontWeight: 700}}>mag</em> or <sup style={{fontWeight: 700}}>m</sup>). This figure may have both positive and negative values.</p><br/>
            <p className="explanation">For example: the weakest stars seen by the largest telescopes: +24<sup>m</sup>, stars barely visible to the naked eye: +6<sup>m</sup>, brightest star of the winter sky - Sirius: -1<sup>m</sup>.5, Venus in maximum brightness: -4<sup>m</sup>.3, full moon: -12<sup>m</sup>.3, Sun: -26<sup>m</sup>.9</p>

            <p className="explanation">Let's calculate what brightness a star would have at a distance of 10pc if, at the actual distance <img className="formula formula-small" src="../images/formulas/calc-3/calc3b/distance.png" alt="distance"/>, it gives illuminance<img className="formula formula-small" src="../images/formulas/calc-3/calc3b/illuminance.png" alt="illuminance"/>.</p>
            <p className="explanation">For each light source observed from two different distances <img className="formula formula-small" src="../images/formulas/calc-3/calc3b/l1.png" alt="distance - 1"/> and <img className="formula formula-small" src="../images/formulas/calc-3/calc3b/l2.png" alt="distance - 2"/>, the relationship between them is:</p>
            <img className="formula formula-big" src="../images/formulas/calc-3/calc3b/1.png" alt="relationship between illuminance and distance of the stars"/>
            <p className="explanation">And how will such "moving" of a nearby star at a contractual distance of 10pc affect its magnitudo?</p>
            <img className="formula formula-big formula-magnitudo" src="../images/formulas/calc-3/calc3b/2.png" alt="relationship between magnitudo and illuminance of the stars"/>
            <p className="explanation">To make the final design more readable, let's change the markings:<br/>
            <img className="formula formula-small" src="../images/formulas/calc-3/calc3b/m2toM.png" alt="m2toM"/> - absolute magnitude<br/>
            <img className="formula formula-small" src="../images/formulas/calc-3/calc3b/m1tom.png" alt="m1tom"/> - apparent magnitude<br/>
            <img className="formula formula-small" src="../images/formulas/calc-3/calc3b/l2to10pc.png" alt="l2to10pc"/>,<br/>
            <img className="formula formula-small" src="../images/formulas/calc-3/calc3b/l1tol.png" alt="l1tol"/> - distance between an observer and a star<br/></p>
            <p className="explanation">Finally, the relationship between absolute magnitude, apparent magnitude and distance is:
            <img className="formula formula-big" src="../images/formulas/calc-3/calc3b/3.png" alt="absolute magnitude formula"/>Where: <br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-3/calc3b/M.png" alt="absolute magnitude"/> - absolute magnitude,<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-3/calc3b/magnitudo.png" alt="apparent magnitude"/> - apparent magnitude,<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-3/calc3b/distance.png" alt="distance"/> - distance between an observer and a star<br/><br/>
            Of course, we have to submit the extinction for each object and put it in the above formula. The further stars and galaxies are, the other objects can distort the apparent magnitude of the object.
            <br/><br/>Above is a calculator counting distances to distant stars in (pc) and light years (ly) using absolute magnitude and apparent magnitude.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )  
}

export default Calc3