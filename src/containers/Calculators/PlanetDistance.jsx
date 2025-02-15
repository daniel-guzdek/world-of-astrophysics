import React from "react";
import { MathJax } from "better-react-mathjax";
import BackNav from "../../components/BackNav/BackNav";
import { planetDistanceHeaderData } from "../../data/headers";
import Header from "../../components/common/Header/Header";
import PlanetDistanceCalc from "../../components/Calculator/PlanetDistanceCalc";
import Footer from "../../components/Footer/Footer";

const PlanetDistance = () => {
  return (
    <>
      <div className="calc-container">
        <BackNav text="Back to Calculators Section" path="/calculators" />
        <Header headerData={planetDistanceHeaderData} />
        <div className="calc-panel">
          <div className="calc-math">
            <PlanetDistanceCalc />
          </div>
          <div className="article">
            <p>
              In his work, Newton presented a coherent theory of gravity,
              describing both the falling of objects on Earth and the movement
              of celestial bodies. The English physicist relied on his proposed
              principles of dynamics and Kepler's laws regarding the distance of
              planets from the Sun.
              <br />
              To simplify, let's assume that two planets move in circular
              orbits. Kepler's Law will take the form of:
            </p>
            <div className="formula-block">
              <MathJax>
                {"\\[\\frac{T_1^2}{a_1^3} = \\frac{T_2^2}{a_2^3}\\]"}
              </MathJax>
            </div>
            <p className="formula-explanation">
              <span className="formula-inline">Where:</span>
              <span className="formula-inline">
                <MathJax inline>{"\\(a\\)"}</MathJax>- the semi-major axis of
                the planet's orbit,
              </span>
              <span className="formula-inline">
                <MathJax inline>{"\\(T\\)"}</MathJax>- the orbital period of the
                planets
              </span>
            </p>
            <p>
              To calculate how long a year on a planet lasts, we can compare its
              distance from the Sun with our distance from the Sun (1 AU -
              astronomical unit) and use it as:
              <span className="formula-inline">
                <MathJax inline>{"\\(a\\)"}</MathJax>
                in the formula.
              </span>
              <br />
              By transforming the formula and knowing the distance of a planet
              from the Sun (
              <span className="formula-inline">
                <MathJax inline>{"\\(a\\)"}</MathJax>
              </span>
              ), we can get the time value of its orbital period.
              <br />
              <span>Below:</span>
            </p>
            <div className="formula-block">
              <MathJax>{"\\[T = \\sqrt{a^3}\\]"}</MathJax>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlanetDistance;
