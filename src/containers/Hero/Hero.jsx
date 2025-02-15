import React from "react";
import "../../videos/Nebula_1920px.mp4";
import "../../videos/Nebula_1280px.mp4";
import "../../videos/Nebula_880px.mp4";
import "../../videos/Nebula_640px.mp4";
import { heroHeaderData } from "../../data/headers";
import Footer from "../../components/Footer/Footer";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <video autoPlay loop muted src="../../videos/Nebula_1920px.mp4">
          <source
            media="(min-width: 1600px)"
            srcSet="../../videos/Nebula_1920px.mp4"
          />
          <source
            media="(min-width: 1200px)"
            srcSet="../../videos/Nebula_1280px.mp4"
          />
          <source
            media="(min-width: 800px)"
            srcSet="../../videos/Nebula_880px.mp4"
          />
          <source
            media="(min-width: 300px)"
            srcSet="../../videos/Nebula_640px.mp4"
          />
        </video>
        <div className="hero-header">
          <h1 className="hero-title">{heroHeaderData?.title}</h1>
          <h2 className="hero-subtitle">{heroHeaderData?.subtitle}</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
