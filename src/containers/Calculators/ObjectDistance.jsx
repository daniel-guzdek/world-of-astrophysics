import React from "react";
import { MathJax } from "better-react-mathjax";
import BackNav from "../../components/BackNav/BackNav";
import { objectDistanceHeaderData } from "../../data/headers.js";
import Header from "../../components/common/Header/Header.jsx";
import NearObjectCalc from "../../components/Calculator/NearObjectCalc";
import DistantObjectCalc from "../../components/Calculator/DistantObjectCalc";
import { UNIVERSE_AGE } from "../../constants/science/physicsConstants.js";
import Footer from "../../components/Footer/Footer";

const ObjectDistance = () => {
  return (
    <>
      <div className="calc-container">
        <BackNav text="Back to Calculators Section" path="/calculators" />
        <Header headerData={objectDistanceHeaderData} />
        <div className="calc-panel">
          <div className="calc-math">
            <NearObjectCalc />
          </div>
          <div className="article">
            <h1 className="section-title">Hubble's Law</h1>
            <p>
              Measuring distances is one of the most important and widely used
              tasks by astronomers. The most significant outcome of
              understanding the extragalactic distance scale is determining the
              value of the Hubble constant
              <MathJax inline>{"\\(H_0\\)"}</MathJax>, which helps us estimate
              the age and size of the observable universe. Hubble's Law is
              expressed by the formula:
            </p>
            <div className="formula-block">
              <MathJax>{"\\[ v = H_0 r \\]"}</MathJax>
            </div>
            <p className="formula-explanation">
              <span className="formula-inline">Where:</span>
              <span className="formula-inline">
                <MathJax inline>{"\\(v\\)"}</MathJax>- recessional velocity,
                typically expressed in km/s,
              </span>
              <span className="formula-inline">
                <MathJax inline>{"\\(H_0\\)"}</MathJax>- Hubble constant,
              </span>
              <span className="formula-inline">
                <MathJax inline>{"\\(r\\)"}</MathJax>- distance to the galaxy,
                measured in megaparsecs (Mpc).
              </span>
            </p>
            <p>
              From this formula, we can approximate the age of the Universe:
            </p>
            <div className="formula-block">
              <MathJax>{"\\[ t = \\frac{1}{H_0} \\]"}</MathJax>
            </div>
            <p>
              Assuming the Hubble constant is
              <MathJax inline>{"\\(H_0\\)"}</MathJax>, the time since the Big
              Bang, and thus the age of the Universe, is approximately
              <strong>{UNIVERSE_AGE}</strong> billion years.
            </p>
            <h1 className="section-title">
              Distance to the Nearest Stars (Measured by Parallax)
            </h1>
            <p>
              The distance to nearby stars is measured using parallax and can be
              calculated using the formula:
            </p>
            <div className="formula-block">
              <MathJax>{"\\[ d = \\frac{1}{p} \\]"}</MathJax>
            </div>
            <p className="formula-explanation">
              <span className="formula-inline">Where:</span>
              <span className="formula-inline">
                <MathJax inline>{"\\(d\\)"}</MathJax>- distance to the star (in
                parsecs),
              </span>
              <span className="formula-inline">
                <MathJax inline>{"\\(p\\)"}</MathJax>- parallax angle (in
                arcseconds).
              </span>
            </p>
            <p>
              The calculator above computes distances to the most important and
              nearest stars in parsecs (pc), light-years (ly), and kilometers
              (km).
            </p>
            <h1 className="section-title">
              Determining the Distance to Distant Stars Using Absolute Magnitude
              and Apparent Magnitude
            </h1>
            <div className="calc-math">
              <DistantObjectCalc />
            </div>
            <p>
              Absolute magnitude <em style={{ fontWeight: 700 }}>M</em> is a
              measure of the luminosity of a celestial object, on an inverse
              logarithmic astronomical magnitude scale. An object's absolute
              magnitude is defined as the apparent magnitude it would have if
              observed from a distance of exactly 10 parsecs (32.6 light-years),
              without any extinction (dimming) of its light due to interstellar
              matter and cosmic dust. The symbol for absolute stellar magnitude
              is <em style={{ fontWeight: 700 }}>M</em> and it is expressed in
              magnitudes (<em style={{ fontWeight: 700 }}>mag</em> or
              <sup style={{ fontWeight: 700 }}>m</sup>), which can be positive
              or negative.
            </p>
            <p>
              For example, the weakest stars visible with the largest telescopes
              have a magnitude of +24<sup>m</sup>, stars barely visible to the
              naked eye have a magnitude of +6<sup>m</sup>, the brightest star
              in the winter sky, Sirius, has a magnitude of -1.5<sup>m</sup>,
              Venus at maximum brightness is -4.3<sup>m</sup>, the full moon is
              -12.3<sup>m</sup>, and the Sun is -26.9<sup>m</sup>.
            </p>
            <p>
              Let's calculate the brightness a star would have at a distance of
              10 parsecs if, at its actual distance
              <span className="formula-inline">
                <MathJax inline>{"\\(d\\)"}</MathJax>
              </span>
              , it has an illuminance of
              <span className="formula-inline">
                <MathJax inline>{"\\(E\\)"}</MathJax>
              </span>
              .
            </p>
            <p>
              For any light source observed from two different distances
              <span className="formula-inline">
                <MathJax inline>{"\\(d_1\\)"}</MathJax>
              </span>
              and
              <span className="formula-inline">
                <MathJax inline>{"\\(d_2\\)"}</MathJax>
              </span>
              , the relationship between them is:
            </p>
            <div className="formula-block">
              <MathJax>
                {
                  "\\[ \\frac{E_1}{E_2} = \\left( \\frac{d_2}{d_1} \\right)^2 \\]"
                }
              </MathJax>
            </div>
            <p>
              How would this "moving" of a nearby star to a distance of 10
              parsecs affect its magnitude?
            </p>
            <div className="formula-block">
              <MathJax>
                {
                  "\\[ m - M = 2.5 \\log_{10} \\left( \\frac{d}{10} \\right)^2 = 5 \\left( \\log_{10} d - 1 \\right) \\]"
                }
              </MathJax>
            </div>
            <p>
              To make the final formula more readable, let's change the
              variables:
            </p>
            <p className="formula-explanation">
              <span className="formula-inline">
                <MathJax inline>{"\\(M\\)"}</MathJax>- absolute magnitude
              </span>
              <span className="formula-inline">
                <MathJax inline>{"\\(m\\)"}</MathJax>- apparent magnitude
              </span>
              <span className="formula-inline">
                <MathJax inline>{"\\(d\\)"}</MathJax>- distance between the
                observer and the star
              </span>
            </p>
            <p>
              The final relationship between absolute magnitude, apparent
              magnitude, and distance is:
            </p>
            <div className="formula-block">
              <MathJax>
                {"\\[ m - M = 5 \\log_{10} \\left( \\frac{d}{10} \\right) \\]"}
              </MathJax>
            </div>
            <p className="formula-explanation">
              <span className="formula-inline">Where:</span>
              <span className="formula-inline">
                <MathJax inline>{"\\(M\\)"}</MathJax>- absolute magnitude,
              </span>
              <span className="formula-inline">
                <MathJax inline>{"\\(m\\)"}</MathJax>- apparent magnitude,
              </span>
              <span className="formula-inline">
                <MathJax inline>{"\\(d\\)"}</MathJax>- distance between the
                observer and the star.
              </span>
            </p>
            <p>
              Additionally, we must account for the extinction of each object
              and include it in the formula. The further stars and galaxies are,
              the more likely other objects can distort the apparent magnitude.
              <br />
              The calculator above computes distances to distant stars in
              parsecs (pc) and light-years (ly) using absolute magnitude and
              apparent magnitude.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ObjectDistance;
