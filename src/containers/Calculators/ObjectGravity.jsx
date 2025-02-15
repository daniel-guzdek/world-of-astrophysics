import React from "react";
import { MathJax } from "better-react-mathjax";
import BackNav from "../../components/BackNav/BackNav";
import { objectGravityHeaderData } from "../../data/headers";
import Header from "../../components/common/Header/Header";
import ObjectGravityCalc from "../../components/Calculator/ObjectGravityCalc";
import Footer from "../../components/Footer/Footer";

const ObjectGravity = () => {
  return (
    <>
      <div className="calc-container">
        <BackNav text="Back to Calculators Section" path="/calculators" />
        <Header headerData={objectGravityHeaderData} />
        <div className="calc-panel">
          <div className="calc-math">
            <ObjectGravityCalc />
          </div>
          <div className="article">
            <p>
              In general, according to Newton's classical theory of gravity, the
              acceleration of a body in the gravitational field of another body
              does not depend on the weight of the body being attracted, but
              depends on the weight attracting the body. The acceleration of
              point body 2 caused by the spot gravity or spherically symmetrical
              (e. g. spherical) body 1 data is a formula:
            </p>
            <div className="formula-block">
              <MathJax>{"\\[ a_2 = \\frac{GM_1}{r^2} \\]"}</MathJax>
            </div>
            <div className="article-section">
              <p className="formula-explanation">
                <span className="formula-inline">Where:</span>
                <span className="formula-inline">
                  <MathJax inline>{"\\( a_2 \\)"}</MathJax>- gravitational
                  acceleration of the attracted body
                </span>
                <span className="formula-inline">
                  <MathJax inline>{"\\( G \\)"}</MathJax>- gravitational
                  constant
                </span>
                <span className="formula-inline">
                  <MathJax inline>{"\\( M_1 \\)"}</MathJax>- mass of the body
                  producing the gravitational field
                </span>
                <span className="formula-inline">
                  <MathJax inline>{"\\( r \\)"}</MathJax>- distance between the
                  centers of the attracting bodies
                </span>
              </p>
              <p>
                Therefore, the gravitational acceleration on any celestial body
                can be expressed as:
              </p>
            </div>
            <div className="formula-block">
              <MathJax>{"\\[ g = \\frac{GM}{R^2} \\]"}</MathJax>
            </div>
            <div className="article-section">
              <p className="formula-explanation">
                <span className="formula-inline">Where: </span>
                <span className="formula-inline">
                  <MathJax inline>{"\\( g \\)"}</MathJax>- gravitational
                  acceleration on this celestial body,
                </span>
                <span className="formula-inline">
                  <MathJax inline>{"\\( M \\)"}</MathJax>- mass of the celestial
                  body,
                </span>
                <span className="formula-inline">
                  <MathJax inline>{"\\( R \\)"}</MathJax>- radius of the
                  celestial body
                </span>
              </p>
              <p>
                The acceleration of body 2 measured in a reference frame moving
                with body 1 will have a total value of
                <span className="formula-inline">
                  <MathJax inline>{"\\( a_1 + a_2 \\)"}</MathJax>
                </span>
                . However, when the difference in masses of the two bodies is
                very large, the acceleration of the "larger" body due to the
                "smaller" body is negligible. Thus, within measurement error
                limits, gravitational acceleration often appears to be
                independent of the mass of the "smaller" body.
              </p>
              <p>
                The gravitational acceleration of a locomotive and a feather
                falling to the ground is practically the same. The feather falls
                slower because it has greater aerodynamic resistance, not
                because it is "less" attracted.
              </p>
              <p>
                This term is often used in systems where one object has a very
                large mass and the other a very small one. For large spherical
                objects (e.g., planets), the value of gravitational acceleration
                is roughly constant, with fluctuations of no more than 2-3%.
              </p>
              <p>
                To calculate the time it takes for an object to fall from a
                height of 10 meters on various celestial bodies, such as planets
                in our Solar System, the Moon, or the Sun, we can use the
                following formula:
              </p>
            </div>
            <div className="formula-block">
              <MathJax>{"\\[ h(t) = h_0 - \\frac{1}{2} a t^2 \\]"}</MathJax>
            </div>
            <div>
              <p className="formula-explanation">
                <span className="formula-inline"></span>Where:
                <span className="formula-inline">
                  <MathJax inline>{"\\( h(t) = 0 \\)"}</MathJax>
                </span>
              </p>
              <div className="formula-block">
                <MathJax>{"\\[ t = \\sqrt{\\frac{2h_0}{a}} \\]"}</MathJax>
              </div>
              <p>
                Using the previously mentioned formula for gravitational
                acceleration:
              </p>
              <div className="formula-block">
                <MathJax>{"\\[ a = \\frac{G \\cdot M}{R^2} \\]"}</MathJax>
              </div>
              <p>The final formula for the fall time is:</p>
              <div className="formula-block">
                <MathJax>{"\\[ t = R \\sqrt{\\frac{2h_0}{GM}} \\]"}</MathJax>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ObjectGravity;
