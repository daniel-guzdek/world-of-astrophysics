import React from "react";
import { calcCardsHeaderData, calculatorsHeaderData } from "../../data/headers";
import CalcCard from "../../components/CalcCard/CalcCard";
import Footer from "../../components/Footer/Footer";
import ReactPlayer from "react-player";
import video1920 from "../../videos/Asteroid_1920px.mp4";

const Calculators = () => {
  const renderCalcCards = calcCardsHeaderData?.map((card, index) => {
    return (
      <CalcCard
        key={index}
        title={card?.title}
        description={card?.description}
        path={card?.path}
      />
    );
  });

  return (
    <>
      <div className="calculators-wrapper">
        <ReactPlayer
          url={video1920}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <div className="calculators-container">
          <div className="calculators-content">
            <h1 className="calculators-title">
              {calculatorsHeaderData?.title}
            </h1>
            <p className="calculators-description">
              {calculatorsHeaderData?.description}
            </p>
            <div className="calc-cards">{renderCalcCards}</div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Calculators;
