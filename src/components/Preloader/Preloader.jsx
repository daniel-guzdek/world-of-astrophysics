import React from "react";
import { GiBlackHoleBolas } from "react-icons/gi";

const Preloader = () => {
  window.addEventListener("load", () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
  });
  return (
    <div className="preload">
      <div className="preload-logo">
        <GiBlackHoleBolas />
      </div>
      <h1 className="preload-info">
        Loading<span> . . .</span>
      </h1>
    </div>
  );
};

export default Preloader;
