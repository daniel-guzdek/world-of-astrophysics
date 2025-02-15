import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";
import { GiAtom } from "react-icons/gi";
import { SiElectron } from "react-icons/si";
import { GiBlackHoleBolas } from "react-icons/gi";
import { IoPlanetSharp } from "react-icons/io5";
import { SiMoleculer } from "react-icons/si";

export const data = [
  /*
    The most recently added article has an ID of 25.
    Please update this comment whenever a new article is added.
  */

  // Astronomy
  {
    id: 0,
    category: "Astronomy",
    path: "/articles",
    icon: <WiMoonAltWaxingCrescent2 />,
    sublinks: [
      {
        title: "Planet System in M33",
        path: "/articles/2",
      },
      {
        title: "Kepler's Laws",
        path: "/articles/6",
      },
      {
        title: "Heliocentric System in History",
        path: "/articles/8",
      },
      {
        title: "Tycho Brahe's Works Revisited",
        path: "/articles/13",
      },
    ],
  },
  // Astrophysics
  {
    id: 1,
    category: "Astrophysics",
    path: "/articles",
    icon: <IoPlanetSharp />,
    sublinks: [
      {
        title: "Supernova and Nova: What's the Difference?",
        path: "/articles/0",
      },
      {
        title: "Andromeda is Coming!",
        path: "/articles/1",
      },
      {
        title: "Black Holes",
        path: "/articles/4",
      },
      {
        title: "Hertzsprung-Russell Diagram",
        path: "/articles/5",
      },
      {
        title: "Discovering New Brown Dwarfs",
        path: "/articles/19",
      },
    ],
  },
  // Cosmology
  {
    id: 2,
    category: "Cosmology",
    path: "/articles",
    icon: <GiBlackHoleBolas />,
    sublinks: [
      {
        title: "Cosmic Rays",
        path: "/articles/3",
      },
      {
        title: "The Beginning of the Universe",
        path: "/articles/11",
      },
    ],
  },
  // Atomic Physics
  {
    id: 3,
    category: "Atomic Physics",
    path: "/articles",
    icon: <GiAtom />,
    sublinks: [
      {
        title: "Recent Particle Physics",
        path: "/articles/9",
      },
      {
        title: "Antimatter as a Challenge",
        path: "/articles/10",
      },
      {
        title: "University of Oxford: Leading in Molecular Physics Education",
        path: "/articles/12",
      },
      {
        title: "The Nature of Positrons",
        path: "/articles/14",
      },
      {
        title: "Mass and Energy",
        path: "/articles/15",
      },
      {
        title: "Old-Fashioned Laboratories Around the World",
        path: "/articles/17",
      },
      {
        title:
          "Elementary Studies in Experimental Physics - Cambridge University Press",
        path: "/articles/20",
      },
    ],
  },
  // Nuclear Physics
  {
    id: 4,
    category: "Nuclear Physics",
    path: "/articles",
    icon: <SiMoleculer />,
    sublinks: [
      {
        title: "Fundamentals of Nuclear Physics",
        path: "/articles/21",
      },
      {
        title: "Applications of Nuclear Physics in Medicine",
        path: "/articles/22",
      },
      {
        title: "Advanced Nuclear Physics Research",
        path: "/articles/23",
      },
      {
        title: "Nuclear Fusion and Its Potential",
        path: "/articles/24",
      },
      {
        title: "The Role of Neutrons in Nuclear Reactions",
        path: "/articles/25",
      },
    ],
  },
  // Quantum Physics
  {
    id: 5,
    category: "Quantum Physics",
    path: "/articles",
    icon: <SiElectron />,
    sublinks: [
      {
        title: "Antimatter",
        path: "/articles/7",
      },
      {
        title: "Schrödinger's Cat",
        path: "/articles/16",
      },
      {
        title: "Z-particle",
        path: "/articles/18",
      },
    ],
  },
];
