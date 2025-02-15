import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export const PARSEC_TO_AU = 206265;
export const PARSEC_TO_LY = 3.2616;
export const PARSEC_TO_KM = math.evaluate("3.086 * 10^13");
export const HUBBLE_CONSTANT = 67.8;
export const UNIVERSE_AGE = math
  .evaluate(`(1 / ${HUBBLE_CONSTANT}) * 1000`)
  .toFixed(2);
export const GRAVITATIONAL_CONSTANT = 6.67 * Math.pow(10, -11);
export const EARTH_MASS = 5973.6 * Math.pow(10, 21);
export const EARTH_ORBITAL_PERIOD_YEARS = 1;
export const EARTH_DISTANCE_AU = 1;
