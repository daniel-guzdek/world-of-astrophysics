import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import { MathJaxContext } from "better-react-mathjax";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./containers/Hero/Hero";
import Calculators from "./containers/Calculators/Calculators";
import PlanetDistance from "./containers/Calculators/PlanetDistance";
import ObjectGravity from "./containers/Calculators/ObjectGravity";
import ObjectDistance from "./containers/Calculators/ObjectDistance";
import Articles from "./containers/Articles/Articles";
import Article from "./components/Article/Article";
import Gallery from "./containers/Gallery/Gallery";
import Contact from "./containers/Contact/Contact";
import "./css/style.css";

const App = () => {
  return (
    <MathJaxContext>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/calculators" exact element={<Calculators />} />
          <Route
            path="/calculators/planet-distance"
            element={<PlanetDistance />}
          />
          <Route
            path="/calculators/object-gravity"
            element={<ObjectGravity />}
          />
          <Route
            path="/calculators/object-distance"
            element={<ObjectDistance />}
          />
          <Route path="/articles" exact element={<Articles />} />
          <Route path="/articles/:articleId" element={<Article />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </MathJaxContext>
  );
};

export default App;
