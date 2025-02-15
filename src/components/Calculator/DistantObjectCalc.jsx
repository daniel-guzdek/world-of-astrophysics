import React from "react";
import { defaultDistantObject, distantObjects } from "../../data/objects";
import {
  PARSEC_TO_AU,
  PARSEC_TO_LY,
} from "../../constants/science/physicsConstants.js";
import Select from "../Select/Select.jsx";
import { calcDistanceByMag } from "../../utils/formulas";
import useSelect from "../../hooks/useSelect";
import CalcResults from "./CalcResults";

const DistantObjectCalc = () => {
  const [selectedObject, searchTerm, setSearchTerm] = useSelect(
    defaultDistantObject,
    distantObjects
  );
  const {
    name,
    absoluteMagnitude,
    apparentMagnitude,
    extinction,
    description,
  } = selectedObject;
  const { distance, equation } = calcDistanceByMag(
    apparentMagnitude,
    absoluteMagnitude,
    extinction
  );
  const isValid = apparentMagnitude && absoluteMagnitude && extinction;

  const results = [
    { label: "Object", value: name },
    { label: "Absolute magnitude", value: absoluteMagnitude },
    { label: "Apparent magnitude", value: apparentMagnitude },
    {
      label: "Distance",
      value: !absoluteMagnitude ? null : distance,
      unit: "pc",
    },
    {
      label: "Distance",
      value: !absoluteMagnitude ? null : (distance * PARSEC_TO_AU).toFixed(4),
      unit: "AU",
    },
    {
      label: "Distance",
      value: !absoluteMagnitude ? null : (distance * PARSEC_TO_LY).toFixed(4),
      unit: "ly",
    },
    { label: "Facts", value: description, isEm: true },
    { label: "Equation", value: isValid ? equation : "" },
  ];

  return (
    <div className="calc-wrapper">
      <div className="calc-title">
        Object Distance Calculator Using Magnitude
      </div>
      <Select
        label="Select an Object:"
        searchPlaceholder="Search..."
        data={distantObjects?.map((object) => object?.name)}
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
      />
      <br />
      <CalcResults results={results} />
    </div>
  );
};

export default DistantObjectCalc;
