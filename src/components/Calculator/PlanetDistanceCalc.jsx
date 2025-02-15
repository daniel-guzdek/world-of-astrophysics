import React from "react";
import { defaultPlanetObject, planets } from "../../data/objects";
import { calcOrbitalPeriod } from "../../utils/formulas";
import {
  EARTH_DISTANCE_AU,
  EARTH_ORBITAL_PERIOD_YEARS,
} from "../../constants/science/physicsConstants.js";
import Select from "../Select/Select.jsx";
import useSelect from "../../hooks/useSelect";
import CalcResults from "./CalcResults";

const PlanetDistanceMath = () => {
  const [selectedObject, searchTerm, setSearchTerm] = useSelect(
    defaultPlanetObject,
    planets
  );
  const { type, distance: objectDistance } = selectedObject;
  const { orbitalPeriod, equation } = calcOrbitalPeriod(
    EARTH_ORBITAL_PERIOD_YEARS,
    EARTH_DISTANCE_AU,
    objectDistance
  );
  const isValid =
    EARTH_ORBITAL_PERIOD_YEARS && EARTH_DISTANCE_AU && objectDistance;

  const results = [
    { label: "Object", value: `${type} ${selectedObject.name}` },
    { label: "Distance from the Sun", value: objectDistance, unit: "AU" },
    { label: "Year's duration", value: orbitalPeriod, unit: "Earth years" },
    { label: "Equation", value: isValid ? equation : "" },
  ];

  return (
    <div className="calc-wrapper">
      <div className="calc-title">Kepler's Third Law Calculator</div>
      <Select
        label="Select a Celestial Body from the Solar System:"
        searchPlaceholder="Search..."
        data={planets?.map((object) => object?.name)}
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
      />
      <br />
      <CalcResults results={results} />
    </div>
  );
};

export default PlanetDistanceMath;
