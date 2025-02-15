import { create, all } from "mathjs";
import {
  EARTH_MASS,
  GRAVITATIONAL_CONSTANT,
} from "../constants/science/physicsConstants.js";

const config = {};
const math = create(all, config);

export const calcOrbitalPeriod = (
  earthOrbitalPeriod,
  earthDistance,
  objectDistance
) => {
  const orbitalPeriod = math.evaluate(`sqrt(${objectDistance}^3)`).toFixed(1);
  const equation = `T = ${earthOrbitalPeriod} x sqrt(${objectDistance}^3 / ${earthDistance}^3)`;

  return {
    orbitalPeriod,
    equation,
  };
};

export const calcObjectGravity = (objectMass, radius, fallHight) => {
  const g =
    objectMass && (GRAVITATIONAL_CONSTANT * objectMass) / Math.pow(radius, 2);
  const massRatio = (objectMass / EARTH_MASS).toFixed(6);
  const fallTime =
    radius &&
    (
      radius *
      Math.sqrt((2 * fallHight) / (GRAVITATIONAL_CONSTANT * objectMass))
    ).toFixed(2);
  const equation = `t = ${radius} * sqrt((2 * 10) / (${GRAVITATIONAL_CONSTANT} * ${objectMass}))`;

  return {
    g,
    massRatio,
    fallTime,
    equation,
  };
};

export const transformParallax = (parallax) => {
  const parallaxString = parallax.toString();
  const [integerPart, fractionalPart] = parallaxString.split(".");

  return `${integerPart}",${fractionalPart}`;
};

export const calcDistanceByParallax = (parallax) => {
  const distance = 1 / parallax;
  const equation = `d = 1 / ${parallax}`;

  return {
    distance,
    equation,
  };
};

export const calcDistanceByMag = (apparentMag, absoluteMag, extinction) => {
  const sumePow = (apparentMag - absoluteMag + 5 - extinction) / 5;
  const distance = math.pow(10, sumePow) - 1;
  const equation = `10 ^ ((${apparentMag} - ${absoluteMag} + 5 - ${extinction}) / 5)`;

  return {
    distance,
    equation,
  };
};
