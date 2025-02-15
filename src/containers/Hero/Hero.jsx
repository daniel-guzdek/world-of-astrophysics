import React from "react";
import { heroHeaderData } from "../../data/headers";
import Footer from "../../components/Footer/Footer";
import ReactPlayer from "react-player";
import video1920 from "../../videos/Nebula_1920px.mp4";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <ReactPlayer
          url={video1920}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
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
