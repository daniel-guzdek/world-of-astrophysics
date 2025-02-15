import React from "react";

const CalcResults = ({ results }) => {
  return (
    <section className="calc-results">
      {results?.map((result, index) => (
        <p key={index}>
          {result?.label}: <span className="calc-result">{result?.value}</span>{" "}
          {result?.unit && `(${result?.unit})`}
        </p>
      ))}
    </section>
  );
};

export default CalcResults;
