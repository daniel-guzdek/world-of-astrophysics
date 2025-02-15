export const defaultMassObject = {
  id: 0,
  name: "",
  radius: 0,
  mass: 0,
};

export const defaultNearObject = {
  id: 0,
  name: "",
  parallax: 0,
  description: "",
};

export const defaultPlanetObject = {
  id: 0,
  name: "",
  type: "",
  distance: 0,
};

export const defaultDistantObject = {
  id: 0,
  name: "",
  absoluteMagnitude: null,
  apparentMagnitude: null,
  extinction: null,
  description: "",
};

export const nearObjects = [
  {
    id: 1,
    name: "Proxima Centauri",
    parallax: 0.7687,
    description:
      "flare star, two confirmed planets (b, 2016, and c, 2019) and unconfirmed evidence for a third, sub-Earth sized, planet (d, 2020).",
  },
  {
    id: 2,
    name: "Vega (α Lyra)",
    parallax: 0.13023,
    description:
      "Vega is the brightest star in the northern constellation of Lyra.",
  },
  {
    id: 3,
    name: "α Centauri A (Rigil Kentaurus)",
    parallax: 0.75481,
    description: "one directly-imaged habitable-zone planet candidate",
  },
  {
    id: 4,
    name: "Lacaille 9352 (Gliese 887)",
    parallax: 0.304219,
    description:
      "two planets, b and c, with equivocal evidence for a third in the habitable zone",
  },
  {
    id: 5,
    name: "Wolf 359 (CN Leonis)",
    parallax: 0.41516,
    description: "flare star, has 2 known planets",
  },
  {
    id: 6,
    name: "Sirius (α Canis Majoris)",
    parallax: 0.37668,
    description: "brightest star in the night sky",
  },
  {
    id: 7,
    name: "Luyten 726-8",
    parallax: 0.371,
    description: "flare star (Archetypal member)",
  },
  {
    id: 8,
    name: "Ross 154 (V1216 Sagittarii)",
    parallax: 0.336123,
    description: "flare star",
  },
  {
    id: 9,
    name: "Ross 248 (HH Andromedae)",
    parallax: 0.31696,
    description: "flare star",
  },
  {
    id: 10,
    name: "61 Cygni A (BD+38°4343)",
    parallax: 0.28608,
    description:
      "B flare star and brightest red dwarf in night sky, first star (besides Sun) to have measured distance[28] possible circumstellar disk.",
  },
  {
    id: 11,
    name: "61 Cygni B (BD+38°4344)",
    parallax: 0.28608,
    description:
      "B flare star and brightest red dwarf in night sky, first star (besides Sun) to have measured distance[28] possible circumstellar disk.",
  },
  {
    id: 12,
    name: "Procyon (α Canis Minoris)",
    parallax: 0.28605,
    description:
      "the brightest star in the constellation of Canis Minor and usually the eighth-brightest star in the night sky.",
  },
  {
    id: 13,
    name: "Epsilon Eridani (Ran)",
    parallax: 0.31222,
    description: "three circumstellar disks, two suspected planets",
  },
  {
    id: 14,
    name: `Barnard's Star`,
    parallax: 0.54745,
    description: "flare star, largest-known proper motion",
  },
];

export const distantObjects = [
  {
    id: 1,
    name: "ζ Scorpii (in NGC 6231 of Scorpius OB1)",
    absoluteMagnitude: -10.085,
    apparentMagnitude: 4.705,
    extinction: 2.77,
    description: `Zeta Scorpii (Zeta Sco, ζ Scorpii, ζ Sco) is a B-type hypergiant star in the constellation of Scorpius. It has an apparent visual magnitude which varies between 4.66 and 4.86.`,
  },
  {
    id: 2,
    name: "λ Cephei (Runaway star from Cepheus OB3)",
    absoluteMagnitude: -9.76,
    apparentMagnitude: 5.05,
    extinction: 4.9,
    description: `It is a hot O6.5 supergiant star, whose absolute brightness around half a million times the Sun. Its radius is around 20 times that of the latter, with a mass that has been estimated to be between 45 and 60 solar masses.`,
  },
  {
    id: 3,
    name: "P Cygni (in IC 4996 of Cygnus OB1)",
    absoluteMagnitude: -9.723,
    apparentMagnitude: 4.82,
    extinction: 3.57,
    description: `P Cygni (34 Cyg) is a variable star in the constellation Cygnus. The designation "P" was originally assigned by Johann Bayer in Uranometria as a nova.`,
  },
  {
    id: 4,
    name: "ε Orionis (Alnilam in Orion OB1 of Orion Complex)",
    absoluteMagnitude: -9.585,
    apparentMagnitude: 1.69,
    extinction: 2.28,
    description: `is a large blue supergiant star in the constellation of Orion. It is estimated to be 275,000 to 832,000 times as luminous as the Sun, and 30–64.5 times as massive.`,
  },
  {
    id: 5,
    name: "κ Cassiopeiae (in Cassiopeia OB14)",
    absoluteMagnitude: -8.96,
    apparentMagnitude: 4.16,
    extinction: 2.67,
    description: `Kappa Cassiopeiae (κ Cas, κ Cassiopeiae) is a star in the constellation Cassiopeia.
    κ Cassiopeiae has an unusual spectrum that has anomalously weak nitrogen lines, taken as an actual nitrogen deficiency in the atmosphere.`,
  },
  {
    id: 6,
    name: "ε Persei A (in Alpha Persei Cluster)",
    absoluteMagnitude: -6.391,
    apparentMagnitude: 2.88,
    extinction: 2.79,
    description: `Epsilon Persei (ε Persei, ε Per) is a multiple star system in the northern constellation of Perseus.`,
  },
  {
    id: 7,
    name: "λ Tauri A (in Pisces-Eridanus stellar stream)",
    absoluteMagnitude: -4.669,
    apparentMagnitude: 3.47,
    extinction: 2.27,
    description: `Lambda Tauri (λ Tau, λ Tauri) is a triple star system in the constellation Taurus. In the Calendarium of Al Achsasi Al Mouakket, this star was designated Sadr al Tauri, which was translated into Latin as Pectus Tauri, meaning "the bull chest".`,
  },
  {
    id: 8,
    name: "ο Aquarii (in Pisces-Eridanus stellar stream)",
    absoluteMagnitude: -1.589,
    apparentMagnitude: 4.71,
    extinction: 0.63,
    description: `The spectrum of Omicron Aquarii fits a stellar classification of B7 IVe; the luminosity class of IV suggests that this is a subgiant star that is exhausting the supply of hydrogen at its core and is in the process of evolving into a giant star.`,
  },
  {
    id: 9,
    name: "R136a1 (in Tarantula Nebula of LMC)",
    absoluteMagnitude: -12.235,
    apparentMagnitude: 12.28,
    extinction: 6,
    description: `RMC 136a1 (usually abbreviated to R136a1) is one of the most massive and luminous stars known, at 215 M☉ and 6.2 million L☉, and is also one of the hottest, at around 46,000 K. It is a Wolf–Rayet star at the center of R136, the central concentration of stars of the large NGC 2070 open cluster in the Tarantula Nebula (30 Doradus) in the Large Magellanic Cloud.`,
  },
  {
    id: 10,
    name: "η Carinae A (in Trumpler 16 of Carina Nebula)",
    absoluteMagnitude: -11.917,
    apparentMagnitude: 4.3,
    extinction: 4.42,
    description: `Eta Carinae (η Carinae, abbreviated to η Car), formerly known as Eta Argus, is a stellar system containing at least two stars with a combined luminosity greater than five million times that of the Sun.`,
  },
  {
    id: 11,
    name: "Var A-1 (in Andromeda Galaxy)",
    absoluteMagnitude: -11.5,
    apparentMagnitude: 17.143,
    extinction: 4.21,
    description: `The virial mass of the Andromeda Galaxy is of the same order of magnitude as that of the Milky Way, at 1 trillion solar masses (2.0×1042 kilograms). The mass of either galaxy is difficult to estimate with any accuracy, but it was long thought that the Andromeda Galaxy is more massive than the Milky Way by a margin of some 25% to 50%.`,
  },
  {
    id: 12,
    name: "CXOGC J174711.4-283006 (WR 102-9 in Galactic Center)",
    absoluteMagnitude: -11.21,
    apparentMagnitude: 16.56,
    extinction: 13.262,
    description: `The Galactic Center (or Galactic Centre) is the rotational center of the Milky Way galaxy; it is a supermassive black hole of 4.100 ± 0.034 million solar masses, which powers the compact radio source Sagittarius A`,
  },
  {
    id: 13,
    name: "Arches-F6 (WR 102ah in Arches Cluster)",
    absoluteMagnitude: -11.135,
    apparentMagnitude: 15.75,
    extinction: 12.45,
    description: `The Arches Cluster is the densest known star cluster in the Milky Way located about 100 light-years from its center, in the constellation Sagittarius (The Archer).`,
  },
  {
    id: 14,
    name: `Mercer 30-7 A (WR 46-5 A in Mercer 30 of Dragonfish Nebula)`,
    absoluteMagnitude: -10.86,
    apparentMagnitude: 14.25,
    extinction: 9.68,
    description: `The Dragonfish Nebula, as it is known for its appearance on infrared images, is a massive emission nebula and star-forming region 30,000 light years from the Sun in the direction of the constellation Crux, the Southern Cross.`,
  },
  {
    id: 15,
    name: `PHL 293B (in PHL 293B) Kinman's dwarf`,
    absoluteMagnitude: -11.255,
    apparentMagnitude: 16.87,
    extinction: 11.35,
    description: `PHL 293B, also known as Kinman's dwarf, is a low-metallicity blue compact dwarf galaxy about 22.6 Mpc from the Earth in the constellation Aquarius.`,
  },
];

export const solarSystemObjects = [
  { id: 1, name: "Mercury", radius: 2439700, mass: 330.2 * Math.pow(10, 21) },
  { id: 2, name: "Venus", radius: 6051800, mass: 4868.5 * Math.pow(10, 21) },
  { id: 3, name: "Earth", radius: 6371000, mass: 5973.6 * Math.pow(10, 21) },
  { id: 4, name: "Mars", radius: 3389500, mass: 641.85 * Math.pow(10, 21) },
  {
    id: 5,
    name: "Jupiter",
    radius: 69911000,
    mass: 1898600 * Math.pow(10, 21),
  },
  {
    id: 6,
    name: "Saturn",
    radius: 58232000,
    mass: 568460 * Math.pow(10, 21),
  },
  { id: 7, name: "Uranus", radius: 25362000, mass: 86832 * Math.pow(10, 21) },
  {
    id: 8,
    name: "Neptune",
    radius: 24622000,
    mass: 102430 * Math.pow(10, 21),
  },
  { id: 9, name: "Pluto", radius: 1186000, mass: 13.105 * Math.pow(10, 21) },
  { id: 10, name: "Moon", radius: 1737100, mass: 73.5 * Math.pow(10, 21) },
  {
    id: 11,
    name: "Sun",
    radius: 696342000,
    mass: 1988550000 * Math.pow(10, 21),
  },
  {
    id: 12,
    name: "Ganimedes",
    radius: 2634100,
    mass: 148.2 * Math.pow(10, 21),
  },
  { id: 13, name: "Titan", radius: 2576000, mass: 134.5 * Math.pow(10, 21) },
  { id: 14, name: "Io", radius: 1821600, mass: 89.3 * Math.pow(10, 21) },
  { id: 15, name: "Charon", radius: 606000, mass: 1.52 * Math.pow(10, 21) },
];

export const planets = [
  {
    id: 1,
    name: "Mercury",
    type: "planet",
    distance: 0.39,
  },
  {
    id: 2,
    name: "Venus",
    type: "planet",
    distance: 0.72,
  },
  {
    id: 3,
    name: "Earth",
    type: "planet",
    distance: 1,
    orbitalPeriod: 1,
  },
  {
    id: 4,
    name: "Mars",
    type: "planet",
    distance: 1.52,
  },
  {
    id: 5,
    name: "Jupiter",
    type: "planet",
    distance: 5.2,
  },
  {
    id: 6,
    name: "Saturn",
    type: "planet",
    distance: 9.5,
  },
  {
    id: 7,
    name: "Uranus",
    type: "planet",
    distance: 19.2,
  },
  {
    id: 8,
    name: "Neptune",
    type: "planet",
    distance: 30.1,
  },
  {
    id: 9,
    name: "Pluto",
    type: "dwarf planet",
    distance: 39.5,
  },
];
