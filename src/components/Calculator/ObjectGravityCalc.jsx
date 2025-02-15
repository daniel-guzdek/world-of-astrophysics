import React from "react";
import { defaultMassObject, solarSystemObjects } from "../../data/objects";
import { calcObjectGravity } from "../../utils/formulas";
import Select from "../Select/Select.jsx";
import useSelect from "../../hooks/useSelect";
import CalcResults from "./CalcResults";

const ObjectGravityCalc = () => {
  const [selectedObject, searchTerm, setSearchTerm] = useSelect(
    defaultMassObject,
    solarSystemObjects
  );
  const { mass, radius } = selectedObject;
  const fallHeight = 10;
  const { g, massRatio, fallTime, equation } = calcObjectGravity(
    mass,
    radius,
    fallHeight
  );
  const isValid = mass && radius && fallHeight;

  const results = [
    { label: "Object", value: selectedObject.name },
    { label: "Radius", value: (radius / 1000).toFixed(2), unit: "km" },
    { label: "Mass", value: mass.toExponential(2), unit: "kg" },
    { label: "Mass Ratio", value: massRatio, unit: "Earth's mass" },
    { label: "Gravitational acceleration", value: g.toFixed(2), unit: "m/s²" },
    { label: "Fall Time", value: fallTime, unit: "s" },
    { label: "Equation", value: isValid ? equation : "" },
  ];

  return (
    <div className="calc-wrapper">
      <div className="calc-title">
        Individual Celestial Bodies Gravity Calculator
      </div>
      <Select
        label="Select an Object from the Solar System:"
        searchPlaceholder="Search..."
        data={solarSystemObjects?.map((object) => object?.name)}
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
      />
      <br />
      <CalcResults results={results} />
    </div>
  );
};

export default ObjectGravityCalc;
