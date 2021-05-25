import React  from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import Calc2Math from './Calc2Math';
import Footer from '../components_footer/Footer';

const Calc2 = () => {
  return(
    <>
      <div className="calc-wrapper">
        <Link to='/calculators' className="return-link"><IoArrowBackCircle className="return-icon"/><em className="return-em">Back to Calculators Section</em></Link>
        <h1 className="calc-item__title">Gravity Law for celestial bodies</h1>
        <p className="calc-item__description">Calculate the body drop time from 10 meters for celestial bodies of our Solar System.</p>

        <div className="calc-panel">
          <div className="calculator-math"><Calc2Math /></div>
          <div className="explanation-formulas">
            <p className="explanation">In general, according to Newton's classical theory of gravity, the acceleration of a body in the gravitational field of another body does not depend on the weight of the body being attracted, but depends on the weight attracting the body. The acceleration of point body 2 caused by the spot gravity or spherically symmetrical (e. g. spherical) body 1 data is a formula:</p><img className="formula formula-big" src="../images/formulas/calc-2/1.png" alt="gravitational acceleration formula"/>
            <p className="explanation">Where: <br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-2/a2.png" alt="gravitational acceleration"/> - gravitational acceleration of body 2 attracted by body 1,<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-2/G.png" alt="gravity constant"/> - gravity constant<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-2/m1.png" alt="mass of the body"/> - the mass of the body producing the gravitational field<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-2/r.png" alt="distance"/> - distance between the centers of attracting bodies<br/><br/>Therefore, we can assume that the gravitational acceleration on any celestial body is equal:<img className="formula formula-big" src="../images/formulas/calc-2/2.png" alt="gravitational acceleration formula"/>Where: <br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-2/a.png" alt="gravitational acceleration on this celestial body"/> -  gravitational acceleration on this celestial body,<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-2/M.png" alt="celestial body mass"/> - celestial body mass,<br/><br/>
            <img className="formula formula-medium" src="../images/formulas/calc-2/Radius.png" alt="celestial body radius"/> - celestial body radius<br/><br/>
            </p>
            <p className="explanation">The acceleration of body 2 measured in the reference system moving with body 1 shall have a total value of a1 + a2. In the case, however, when the difference in masses of both bodies is very large, then the acceleration of the "large" body by the "small" body is completely negligible. Hence, within the limits of a measurement error, very often gravitational acceleration does not depend on the weight of the "small" body. The gravitational acceleration of the locomotive and feather falling to the ground is practically the same. <br/>The feather falls to the ground slower because it has greater aerodynamic resistance when falling, and not because it is "less" attracted. <br/>This term is most often used in systems where one object has a very large mass and the other has a very small one. With the surface of a large spherical object (e. g. planets), the value of gravitational acceleration is roughly constant, i. e. it does not fluctuate by more than 2-3%. <br/>So, to calculate the body drop time from 10 meters for individual planets of our Solar System, the Moon or the Sun.<br/>If we want to count how long a body falls from a given height <img className="formula formula-small" src="../images/formulas/calc-2/h0.png" alt="initial height"/>  to the surface  of any celestial body (for which<img className="formula formula-small" src="../images/formulas/calc-2/h0equals0.png" alt="h(t) = 0"/>) we will use the equation:<br/><img className="formula formula-big" src="../images/formulas/calc-2/3.png" alt="free fall body formula"/><br/>As we can see after the transformations, we get a fall time, where for the value of<img className="formula formula-small" src="../images/formulas/calc-2/a.png" alt="gravitational acceleration"/> (gravitational acceleration on individual celestial bodies) we substitute the formula:<img className="formula formula-big" src="../images/formulas/calc-2/2.png" alt="gravitational acceleration for celestial bodies formula"/><br/>The final formula takes the form of:</p>
            <img className="formula formula-big" src="../images/formulas/calc-2/4.png" alt="fall time formula"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )  
}

export default Calc2