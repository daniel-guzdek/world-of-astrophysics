import React from 'react';
import {WiMoonAltWaxingCrescent2} from 'react-icons/wi';
import {GiAtom} from 'react-icons/gi';
import {SiElectron} from 'react-icons/si';
import {GiBlackHoleBolas} from 'react-icons/gi';
import {IoPlanetSharp} from 'react-icons/io5';

export const sideMenuData = [
  // Astronomy
  {
    id: 0,
    link_title: "Astronomy",
    path: '/articles',
    icon: <WiMoonAltWaxingCrescent2/>,
    sublinks: [
      {
        title: "Planet System in M33",
        path: "/articles/article_id-2",
      },
      {
        title: "Kepler's Laws",
        path: "/articles/article_id-6",
      },
      {
        title: "Heliocentric System in history",
        path: "/articles/article_id-8",
      },
      {
        title: "Tycho Brahe's works revisited",
        path: "/articles/article_id-13",
      }
    ],
  },
  // Astrophysics
  { 
    id: 1,
    link_title: "Astrophysics",
    path: '/articles',
    icon: <IoPlanetSharp/>,
    sublinks: [
      {
        title: "Supernova and Nova. What's the difference?",
        path: "/articles/article_id-0",
      },
      {
        title: "Andromeda is Coming!",
        path: "/articles/article_id-1",
      },
      {
        title: "Black Holes",
        path: "/articles/article_id-4",
      },
      {
        title: "Herzprung-Russell Diagram",
        path: "/articles/article_id-5",
      }
    ],
  },
  // Atomic physics
  { 
    id: 2,
    link_title: "Atomic Physics",
    path: '/articles',
    icon: <GiAtom/>,
    sublinks: [
      {
        title: "Recent Particle Physics",
        path: "/articles/article_id-9",
      },
      {
        title: "Antimatter as a challange",
        path: "/articles/article_id-10",
      },
      {
        title: "University of Oxford is the best in teaching Molecular Physics",
        path: "/articles/article_id-12",
      },
      {
        title: "The Nature of positon",
        path: "/articles/article_id-14",
      },
      {
        title: "Mass and Energy",
        path: "/articles/article_id-15",
      },
      {
        title: "Old-fashioned laboratories in the World",
        path: "/articles/article_id-17",
      },
      {
        title: "Elementary studies in Experimental Physics - Cambridge University Press",
        path: "/articles/article_id-20",
      }
    ],
  },
  // Cosmology
  { 
    id: 3,
    link_title: "Cosmology",
    path: '/articles',
    icon: <GiBlackHoleBolas/>,
    sublinks: [
      {
        title: "Cosmic Rays",
        path: "/articles/article_id-3",
      },
      {
        title: "Beginning of the Universe",
        path: "/articles/article_id-11",
      },
      {
        title: "Finding new Brown Dwarfs",
        path: "/articles/article_id-19",
      }
    ],
  },
  // Quantum physics
  { 
    id: 4,
    link_title: "Quantum physics",
    path: '/articles',
    icon: <SiElectron/>,
    sublinks: [
      {
        title: "Antimatter",
        path: "/articles/article_id-7",
      },
      {
        title: "Schrödinger's cat",
        path: "/articles/article_id-16",
      },
      {
        title: "Z - particle",
        path: "/articles/article_id-18",
      }
    ],
  },
]