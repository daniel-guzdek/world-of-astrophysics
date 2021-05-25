import React, { useEffect, useState } from 'react';
import { create, all } from 'mathjs';

const Calc3bMath = () =>  {
  const config = { }
  const math = create(all, config);
  const parsecToAU = 206265;
  const parsecToLightYears = 3.2616;

  const [name, setName] = useState(['-']);
  const [absoluteMagnitude, setAbsoluteMagnitude] = useState([0]);
  const [apparentMagnitude, setApparentMagnitude] = useState([0]);
  const [extinction, setExtinction] = useState([0]);
  const [interestingFact, setInterestingFact] = useState(['-']);
  const [distance, setDistance] = useState([0]);
  const [operation, setOperation] = useState([0]);

  const starsAndGalaxies =  [
    {
      id: 0,
      name: '...',
      absoluteMagnitude: 0,
      apparentMagnitude: 0,
      extinction: 0,
      interestingFact: '-'
    },
    {
      id: 1,
      name: 'ζ Scorpii (in NGC 6231 of Scorpius OB1)',
      absoluteMagnitude: -10.085,
      apparentMagnitude: 4.705,
      extinction: 2.77,
      interestingFact: `Zeta Scorpii (Zeta Sco, ζ Scorpii, ζ Sco) is a B-type hypergiant star in the constellation of Scorpius. It has an apparent visual magnitude which varies between 4.66 and 4.86.`
    },
    {
      id: 2,
      name: 'λ Cephei (Runaway star from Cepheus OB3)',
      absoluteMagnitude: -9.76,
      apparentMagnitude: 5.05,
      extinction: 4.9,
      interestingFact: `It is a hot O6.5 supergiant star, whose absolute brightness around half a million times the Sun. Its radius is around 20 times that of the latter, with a mass that has been estimated to be between 45 and 60 solar masses.`
    },
    {
      id: 3,
      name: 'P Cygni (in IC 4996 of Cygnus OB1)',
      absoluteMagnitude: -9.723,
      apparentMagnitude: 4.82,
      extinction: 3.57,
      interestingFact: `P Cygni (34 Cyg) is a variable star in the constellation Cygnus. The designation "P" was originally assigned by Johann Bayer in Uranometria as a nova.`
    },
    {
      id: 4,
      name: 'ε Orionis (Alnilam in Orion OB1 of Orion Complex)',
      absoluteMagnitude: -9.585,
      apparentMagnitude: 1.69,
      extinction: 2.28,
      interestingFact: `is a large blue supergiant star in the constellation of Orion. It is estimated to be 275,000 to 832,000 times as luminous as the Sun, and 30–64.5 times as massive.`
    },
    {
      id: 5,
      name: 'κ Cassiopeiae (in Cassiopeia OB14)',
      absoluteMagnitude: -8.96,
      apparentMagnitude: 4.16,
      extinction: 2.67,
      interestingFact: `Kappa Cassiopeiae (κ Cas, κ Cassiopeiae) is a star in the constellation Cassiopeia.
      κ Cassiopeiae has an unusual spectrum that has anomalously weak nitrogen lines, taken as an actual nitrogen deficiency in the atmosphere.`
    },
    {
      id: 6,
      name: 'ε Persei A (in Alpha Persei Cluster)',
      absoluteMagnitude: -6.391,
      apparentMagnitude: 2.88,
      extinction: 2.79,
      interestingFact: `Epsilon Persei (ε Persei, ε Per) is a multiple star system in the northern constellation of Perseus.`
    },
    {
      id: 7,
      name: 'λ Tauri A (in Pisces-Eridanus stellar stream)',
      absoluteMagnitude: -4.669,
      apparentMagnitude: 3.47,
      extinction: 2.27,
      interestingFact: `Lambda Tauri (λ Tau, λ Tauri) is a triple star system in the constellation Taurus. In the Calendarium of Al Achsasi Al Mouakket, this star was designated Sadr al Tauri, which was translated into Latin as Pectus Tauri, meaning "the bull chest".`
    },
    {
      id: 8,
      name: 'ο Aquarii (in Pisces-Eridanus stellar stream)',
      absoluteMagnitude: -1.589,
      apparentMagnitude: 4.71,
      extinction: 0.63,
      interestingFact: `The spectrum of Omicron Aquarii fits a stellar classification of B7 IVe; the luminosity class of IV suggests that this is a subgiant star that is exhausting the supply of hydrogen at its core and is in the process of evolving into a giant star.`
    },
    {
      id: 9,
      name: 'R136a1 (in Tarantula Nebula of LMC)',
      absoluteMagnitude: -12.235,
      apparentMagnitude: 12.28,
      extinction: 6,
      interestingFact: `RMC 136a1 (usually abbreviated to R136a1) is one of the most massive and luminous stars known, at 215 M☉ and 6.2 million L☉, and is also one of the hottest, at around 46,000 K. It is a Wolf–Rayet star at the center of R136, the central concentration of stars of the large NGC 2070 open cluster in the Tarantula Nebula (30 Doradus) in the Large Magellanic Cloud.`
    },
    {
      id: 10,
      name: 'η Carinae A (in Trumpler 16 of Carina Nebula)',
      absoluteMagnitude: -11.917,
      apparentMagnitude: 4.3,
      extinction: 4.42,
      interestingFact: `Eta Carinae (η Carinae, abbreviated to η Car), formerly known as Eta Argus, is a stellar system containing at least two stars with a combined luminosity greater than five million times that of the Sun.`
    },
    {
      id: 11,
      name: 'Var A-1 (in Andromeda Galaxy)',
      absoluteMagnitude: -11.5,
      apparentMagnitude: 17.143,
      extinction: 4.21,
      interestingFact: `The virial mass of the Andromeda Galaxy is of the same order of magnitude as that of the Milky Way, at 1 trillion solar masses (2.0×1042 kilograms). The mass of either galaxy is difficult to estimate with any accuracy, but it was long thought that the Andromeda Galaxy is more massive than the Milky Way by a margin of some 25% to 50%.`
    },
    {
      id: 12,
      name: 'CXOGC J174711.4-283006 (WR 102-9 in Galactic Center)',
      absoluteMagnitude: -11.21,
      apparentMagnitude: 16.56,
      extinction: 13.262,
      interestingFact: `The Galactic Center (or Galactic Centre) is the rotational center of the Milky Way galaxy; it is a supermassive black hole of 4.100 ± 0.034 million solar masses, which powers the compact radio source Sagittarius A`
    },
    {
      id: 13,
      name: 'Arches-F6 (WR 102ah in Arches Cluster)',
      absoluteMagnitude: -11.135,
      apparentMagnitude: 15.75,
      extinction: 12.45,
      interestingFact: `The Arches Cluster is the densest known star cluster in the Milky Way located about 100 light-years from its center, in the constellation Sagittarius (The Archer).`
    },
    {
      id: 14,
      name: `Mercer 30-7 A (WR 46-5 A in Mercer 30 of Dragonfish Nebula)`,
      absoluteMagnitude: -10.86,
      apparentMagnitude: 14.25,
      extinction: 9.68,
      interestingFact: `The Dragonfish Nebula, as it is known for its appearance on infrared images, is a massive emission nebula and star-forming region 30,000 light years from the Sun in the direction of the constellation Crux, the Southern Cross.`
    },
    {
      id: 15,
      name: `PHL 293B (in PHL 293B) Kinman's dwarf`,
      absoluteMagnitude: -11.255,
      apparentMagnitude: 16.87,
      extinction: 11.35,
      interestingFact: `PHL 293B, also known as Kinman's dwarf, is a low-metallicity blue compact dwarf galaxy about 22.6 Mpc from the Earth in the constellation Aquarius.`
    },
  ]

  const handleSelect = (e) => {
    setName(e.target.value);
  }

  const handleFillInformations = () => {
    starsAndGalaxies.forEach(el => {
      if(name === el.name) {
        setAbsoluteMagnitude(el.absoluteMagnitude);
        setApparentMagnitude(el.apparentMagnitude);
        setInterestingFact(el.interestingFact);
        setExtinction(el.extinction);
      }
    })
  }

  const calculateDistanceUsingMagnitude = () => {
    let sumePow = math.evaluate(`((${apparentMagnitude} - ${absoluteMagnitude}) + 5 - ${extinction}) / 5`);
    if(sumePow === 1 || absoluteMagnitude === 0 || name === '-' || name === '...') {
      setDistance(0);
      setOperation(0);
      setOperation('-');
    } else {
      let result = math.evaluate((math.pow(10, sumePow)) - 1);
      setDistance(result);
      let operationEquation = `10 ^ ((${apparentMagnitude} - ${absoluteMagnitude} + 5 - extinction ${extinction}) / 5)`;
      setOperation(operationEquation);
    }
  }

  useEffect(() => {
    handleFillInformations();
  })
  
  useEffect(() => {
    calculateDistanceUsingMagnitude();
  })

  return(
    <div className="calc-math-wrapper">
      <div className="calc-math__title">Calculate the distance to the stars or galaxies using magnitude</div>
      <label className="calc-math__label">Select star or galaxy:</label>
      <select className="calc-math__select calc-math__select-3b" onChange={handleSelect}>
        <option value="...">...</option>
        <option value="ζ Scorpii (in NGC 6231 of Scorpius OB1)">ζ Scorpii (in NGC 6231 of Scorpius OB1)</option>
        <option value="λ Cephei (Runaway star from Cepheus OB3)">λ Cephei (Runaway star from Cepheus OB3)</option>
        <option value="P Cygni (in IC 4996 of Cygnus OB1)">P Cygni (in IC 4996 of Cygnus OB1)</option>
        <option value="ε Orionis (Alnilam in Orion OB1 of Orion Complex)">ε Orionis (Alnilam in Orion OB1 of Orion Complex)</option>
        <option value="κ Cassiopeiae (in Cassiopeia OB14)">κ Cassiopeiae (in Cassiopeia OB14)</option>
        <option value="ε Persei A (in Alpha Persei Cluster)">ε Persei A (in Alpha Persei Cluster)</option>
        <option value="λ Tauri A (in Pisces-Eridanus stellar stream)">λ Tauri A (in Pisces-Eridanus stellar stream)</option>
        <option value="ο Aquarii (in Pisces-Eridanus stellar stream)">ο Aquarii (in Pisces-Eridanus stellar stream)</option>
        <option value="R136a1 (in Tarantula Nebula of LMC)">R136a1 (in Tarantula Nebula of LMC)</option>
        <option value="η Carinae A (in Trumpler 16 of Carina Nebula)">η Carinae A (in Trumpler 16 of Carina Nebula)</option>
        <option value="Var A-1 (in Andromeda Galaxy)">Var A-1 (in Andromeda Galaxy)</option>
        <option value="CXOGC J174711.4-283006 (WR 102-9 in Galactic Center)">CXOGC J174711.4-283006 (WR 102-9 in Galactic Center)</option>
        <option value="Arches-F6 (WR 102ah in Arches Cluster)">Arches-F6 (WR 102ah in Arches Cluster)</option>
        <option value="Mercer 30-7 A (WR 46-5 A in Mercer 30 of Dragonfish Nebula)">Mercer 30-7 A (WR 46-5 A in Mercer 30 of Dragonfish Nebula)</option>
        <option value="PHL 293B (in PHL 293B) Kinman's dwarf">PHL 293B (in PHL 293B) Kinman's dwarf</option>
      </select>
      <br/>
      <p className="calc-math__paragraph">The Star: <span className="celestialBody-info">{name}</span><br/>absolute magnitude: <span className="celestialBody-info">{absoluteMagnitude}</span><br/>apparent magnitude: <span className="celestialBody-info">{apparentMagnitude}</span><br/>distance:<br/>
      <span className="celestialBody-info">{absoluteMagnitude === 0 ? '-' : (distance)} pc</span>(parsec)<br/>
      <span className="celestialBody-info">{absoluteMagnitude === 0 ? '-' : ((distance * parsecToAU).toFixed(4)) } AU</span>(Astronomical Unit)<br/>
      <span className="celestialBody-info">{absoluteMagnitude === 0 ? '-' : ((distance * parsecToLightYears).toFixed(4))} ly</span>(light years)<br/>
      Interesting facts: <em style={{fontWeight: 700}}>{interestingFact}</em><br/>
      <br/>Equation is presented below:</p>
      <div className="operation-panel">{operation}</div>
    </div>
  ) 
}

export default Calc3bMath