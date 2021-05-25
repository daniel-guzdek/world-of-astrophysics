import React, { useEffect, useState } from 'react';
import { create, all } from 'mathjs';

const Calc1Math = () =>  {

  const [name, setName] = useState(['-']);
  const [type, setType] = useState(['planet/dwarf planet/planetoid']);
  const [distance, setDistance] = useState(['0']);
  const [operation, setOperation] = useState(['']);
  const [orbitalPeriod, setOrbitalPeriod] = useState(['0']);

  const celestialBodies =  [
    {
      id: 0,
      name: '...',
      type: '-',
      distance: 0,
    },
    {
      id: 1,
      name: 'Mercury',
      type: 'planet',
      distance: 0.39,
    },
    {
      id: 2,
      name: 'Venus',
      type: 'planet',
      distance: 0.72,
    },
    {
      id: 3,
      name: 'Earth',
      type: 'planet',
      distance: 1,
      orbitalPeriod: 1
    },
    {
      id: 4,
      name: 'Mars',
      type: 'planet',
      distance: 1.52,
    },
    {
      id: 5,
      name: 'Jupiter',
      type: 'planet',
      distance: 5.2,
    },
    {
      id: 6,
      name: 'Saturn',
      type: 'planet',
      distance: 9.5,
    },
    {
      id: 7,
      name: 'Uranus',
      type: 'planet',
      distance: 19.2,
    },
    {
      id: 8,
      name: 'Neptune',
      type: 'planet',
      distance: 30.1,
    },
    {
      id: 9,
      name: 'Pluto',
      type: 'dwarf planet',
      distance: 39.5,
    },
  ]

  const handleSelect = (e) => {
    setName(e.target.value);
  }

  const handleFillInformations = () => {
    celestialBodies.forEach(el => {
      if(name === el.name) {
        setType(el.type);
        setDistance(el.distance);
      }
    })
  }

  useEffect(() => {
    handleFillInformations();
  })

  const calculateOrbitalPeriod = () => {
    const config = { }
    const math = create(all, config);
    let result = (math.evaluate(`sqrt(${distance}^3)`).toFixed(1));
    let operationEquation = `T = ${celestialBodies[3].orbitalPeriod} x sqrt(${distance}^3 / ${celestialBodies[3].distance}^3)`
    setOrbitalPeriod(result);
    setOperation(operationEquation);
  }

  useEffect(() => {
    calculateOrbitalPeriod();
  })

  return(
    <div className="calc-math-wrapper">
      <div className="calc-math__title">Kepler's Third Law Calculator</div>
      <label className="calc-math__label">Choose celestial body from our Solar System:</label>
      <select className="calc-math__select" onChange={handleSelect}>
        <option value="...">...</option>
        <option value="Mercury">Mercury</option>
        <option value="Venus">Venus</option>
        <option value="Earth">Earth</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
        <option value="Uranus">Uranus</option>
        <option value="Neptune">Neptune</option>
        <option value="Pluto">Pluto</option>
      </select>
      <br/>
      <p className="calc-math__paragraph">A year on the {type} <span className="celestialBody-info">{name}</span> which distance from the Sun is <span className="celestialBody-info">{distance} AU</span> lasts: <span className="celestialBody-info">{orbitalPeriod}</span> Earth years.<br/>Equation is presented below:</p>
      <div className="operation-panel">{operation}</div>
    </div>
  ) 
}

export default Calc1Math