import React, { useEffect, useState } from 'react';
import { create, all } from 'mathjs';

const Calc3aMath = () =>  {
  const config = { }
  const math = create(all, config);
  const parsecToAU = 206265;
  const parsecToLightYears = 3.2616;
  const parsecToKilometers = math.evaluate(3.086 * (math.pow(10, 13)));

  const [name, setName] = useState(['-']);
  const [parallax, setParallax] = useState([0]);
  const [writeParallax, setWriteParallax] = useState(['']);
  const [interestingFact, setInterestingFact] = useState(['-']);
  const [distance, setDistance] = useState([0]);
  const [operation, setOperation] = useState([0]);

  const stars =  [
    {
      id: 0,
      name: '...',
      parallax: 0,
    },
    {
      id: 1,
      name: 'Proxima Centauri',
      parallax: 0.7687,
      writeParallax: `0",7687`,
      interestingFact: `flare star, two confirmed planets (b, 2016, and c, 2019) and unconfirmed evidence for a third, sub-Earth sized, planet (d, 2020).`
    },
    {
      id: 2,
      name: 'Vega (α Lyra)',
      parallax: 0.13023,
      writeParallax: `0",13023`,
      interestingFact: `Vega is the brightest star in the northern constellation of Lyra.` 
    },
    {
      id: 3,
      name: 'α Centauri A (Rigil Kentaurus)',
      parallax: 0.75481,
      writeParallax: `0",75481`,
      interestingFact: `one directly-imaged habitable-zone planet candidate`
    },
    {
      id: 4,
      name: 'Lacaille 9352 (Gliese 887)',
      parallax: 0.304219,
      writeParallax: `0",304219`,
      interestingFact: `two planets, b and c, with equivocal evidence for a third in the habitable zone`
    },
    {
      id: 5,
      name: 'Wolf 359 (CN Leonis)',
      parallax: 0.41516,
      writeParallax: `0",41516`,
      interestingFact: `flare star, has 2 known planets`
    },
    {
      id: 6,
      name: 'Sirius (α Canis Majoris)',
      parallax: 0.37668,
      writeParallax: `0",37668`,
      interestingFact: 'brightest star in the night sky'
    },
    {
      id: 7,
      name: 'Luyten 726-8',
      parallax: 0.3710,
      writeParallax: `0",3710`,
      interestingFact: 'flare star (Archetypal member)'
    },
    {
      id: 8,
      name: 'Ross 154 (V1216 Sagittarii)',
      parallax: 0.336123,
      writeParallax: `0",336123`,
      interestingFact: 'flare star'
    },
    {
      id: 9,
      name: 'Ross 248 (HH Andromedae)',
      parallax: 0.31696,
      writeParallax: `0",31696`,
      interestingFact: 'flare star'
    },
    {
      id: 10,
      name: '61 Cygni A (BD+38°4343)',
      parallax: 0.28608,
      writeParallax: `0",28608`,
      interestingFact: `B flare star and brightest red dwarf in night sky, first star (besides Sun) to have measured distance[28]
      possible circumstellar disk.`
    },
    {
      id: 11,
      name: '61 Cygni B (BD+38°4344)',
      parallax: 0.28608,
      writeParallax: `0",28608`,
      interestingFact: `B flare star and brightest red dwarf in night sky, first star (besides Sun) to have measured distance[28]
      possible circumstellar disk.`
    },
    {
      id: 12,
      name: 'Procyon (α Canis Minoris)',
      parallax: 0.28605,
      writeParallax: `0",28605`,
      interestingFact: `the brightest star in the constellation of Canis Minor and usually the eighth-brightest star in the night sky.`
    },
    {
      id: 13,
      name: 'Epsilon Eridani (Ran)',
      parallax: 0.31222,
      writeParallax: `0",31222`,
      interestingFact: `three circumstellar disks,
      two suspected planets`
    },
    {
      id: 14,
      name: `Barnard's Star`,
      parallax: 0.54745,
      writeParallax: `0",54745`,
      interestingFact: `flare star, largest-known proper motion`
    },
  ]

  const handleSelect = (e) => {
    setName(e.target.value);
  }

  const handleFillInformations = () => {
    stars.forEach(el => {
      if(name === el.name) {
        setParallax(el.parallax);
        setWriteParallax(el.writeParallax);
        setInterestingFact(el.interestingFact);
      }
    })
  }

  useEffect(() => {
    handleFillInformations();
  })

  const calculateDistanceToStarUsingParallax = () => {
    
    if(parallax === 0) {
      setDistance(0);
      setOperation(0);
      setOperation('-');
      setInterestingFact('-');
    } else {
      let result = math.evaluate(`1 / ${parallax}`);
      let operationEquation = `d = 1 / ${parallax}`;
      setDistance(result);
      setOperation(operationEquation);
    }
  }

  useEffect(() => {
    calculateDistanceToStarUsingParallax();
  })

  return(
    <div className="calc-math-wrapper">
      <div className="calc-math__title">Calculate distance to the nearest stars</div>
      <label className="calc-math__label">Select star:</label>
      <select className="calc-math__select calc-math__select-3a" onChange={handleSelect}>
        <option value="...">...</option>
        <option value="Proxima Centauri">Proxima Centauri</option>
        <option value="Vega (α Lyra)">Vega (α Lyra)</option>
        <option value="α Centauri A (Rigil Kentaurus)">α Centauri A (Rigil Kentaurus)</option>
        <option value="Lacaille 9352 (Gliese 887)">Lacaille 9352 (Gliese 887)</option>
        <option value="Wolf 359 (CN Leonis)">Wolf 359 (CN Leonis)</option>
        <option value="Sirius (α Canis Majoris)">Sirius (α Canis Majoris)</option>
        <option value="Luyten 726-8">Luyten 726-8</option>
        <option value="Ross 154 (V1216 Sagittarii)">Ross 154 (V1216 Sagittarii)</option>
        <option value="Ross 248 (HH Andromedae)">Ross 248 (HH Andromedae)</option>
        <option value="61 Cygni A (BD+38°4343)">61 Cygni A (BD+38°4343)</option>
        <option value="61 Cygni B (BD+38°4344)">61 Cygni B (BD+38°4344)</option>
        <option value="Procyon (α Canis Minoris)">Procyon (α Canis Minoris)</option>
        <option value="Epsilon Eridani (Ran)">Epsilon Eridani (Ran)</option>
        <option value="Barnard's Star">Barnard's Star</option>
      </select>
      <br/>
      <p className="calc-math__paragraph">The Star: <span className="celestialBody-info">{name}</span> which parallax is:  <span className="celestialBody-info">{writeParallax}</span><br/>Its distance from Earth:<br/>
      <span className="celestialBody-info">{parallax > 0 ? distance : '0'} pc</span>(parsec)<br/>
      <span className="celestialBody-info">{parallax > 0 ? (distance * parsecToAU).toFixed(4) : '0'} AU</span>(Astronomical Unit)<br/>
      <span className="celestialBody-info">{parallax > 0 ? (distance * parsecToLightYears).toFixed(4) : '0'} ly</span>(light years)<br/>
      <span className="celestialBody-info">{parallax > 0 ? (distance * parsecToKilometers).toFixed(0) : '0'} km</span>(kilometers)<br/>
      Interesting facts: <em style={{fontWeight: 700}}>{interestingFact}</em><br/>
      <br/>Equation is presented below:</p>
      <div className="operation-panel">{operation}</div>
    </div>
  ) 
}

export default Calc3aMath