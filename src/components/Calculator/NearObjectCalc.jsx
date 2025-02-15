import React from "react";
import { defaultNearObject, nearObjects } from "../../data/objects";
import {
  calcDistanceByParallax,
  transformParallax,
} from "../../utils/formulas";
import {
  PARSEC_TO_AU,
  PARSEC_TO_KM,
  PARSEC_TO_LY,
} from "../../constants/science/physicsConstants.js";
import Select from "../Select/Select.jsx";
import useSelect from "../../hooks/useSelect";
import CalcResults from "./CalcResults";

const NearObjectCalc = () => {
  const [selectedObject, searchTerm, setSearchTerm] = useSelect(
    defaultNearObject,
    nearObjects
  );
  const { name, parallax, description } = selectedObject;
  const { distance, equation } = calcDistanceByParallax(parallax);

  const results = [
    { label: "Name", value: name },
    { label: "Parallax", value: parallax && transformParallax(parallax) },
    { label: "Distance", value: parallax ? distance : 0, unit: "pc" },
    {
      label: "Distance",
      value: parallax ? (distance * PARSEC_TO_AU).toFixed(4) : 0,
      unit: "AU",
    },
    {
      label: "Distance",
      value: parallax ? (distance * PARSEC_TO_LY).toFixed(4) : 0,
      unit: "ly",
    },
    {
      label: "Distance",
      value: parallax ? (distance * PARSEC_TO_KM).toFixed(0) : 0,
      unit: "km",
    },
    { label: "Facts", value: description, isEm: true },
    { label: "Equation", value: parallax ? equation : "" },
  ];

  return (
    <div className="calc-wrapper">
      <div className="calc-title">Nearest Stars Distance Calculator</div>
      <Select
        label="Select an Object:"
        searchPlaceholder="Search..."
        data={nearObjects?.map((object) => object?.name)}
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
      />
      <br />
      <CalcResults results={results} />
    </div>
  );
};

export default NearObjectCalc;
