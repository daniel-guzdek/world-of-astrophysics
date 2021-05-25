import React, { useEffect, useState } from 'react';
import { create, all } from 'mathjs';

const Calc2Math = () =>  {
  const config = { }
  const math = create(all, config);
  const gravitationalConst = math.format(math.evaluate(6.67 * (math.pow(10, -11))), {precision: 14});

  const [name, setName] = useState(['-']);
  const [radius, setRadius] = useState(['0']);
  const [mass, setMass] = useState(['0']);
  const [massRatio, setMassRatio] = useState(['0']);
  const [gravitationalAccelleration, setgravitationalAccelleration] = useState(['0']);
  const [fallTime, setFallTime] = useState(['0']);
  const [operation, setOperation] = useState(['0']);

  const celestialBodies =  [
    {
      id: 0,
      name: '...',
      radius: 0,
      mass: 0,
      gravitationalAccelleration: 0
    },
    {
      id: 1,
      name: 'Mercury',
      radius: 2439700, 
      mass: math.format(math.evaluate(330.2 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 2,
      name: 'Venus',
      radius: 6051800,
      mass: math.format(math.evaluate(4868.5 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 3,
      name: 'Earth',
      radius: 6371000,
      mass: math.format(math.evaluate(5973.6 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 4,
      name: 'Mars',
      radius: 3389500,
      mass: math.format(math.evaluate(641.85 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 5,
      name: 'Jupiter',
      radius: 69911000,
      mass: math.format(math.evaluate(1898600 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 6,
      name: 'Saturn',
      radius: 58232000,
      mass: math.format(math.evaluate(568460 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 7,
      name: 'Uranus',
      radius: 25362000,
      mass: math.format(math.evaluate(86832 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 8,
      name: 'Neptune',
      radius: 24622000,
      mass: math.format(math.evaluate(102430 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 9,
      name: 'Pluto',
      radius: 1186000,
      mass: math.format(math.evaluate(13.105 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 10,
      name: 'Moon',
      radius: 1737100,
      mass: math.format(math.evaluate(73.5 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 11,
      name: 'Sun',
      radius: 696342000,
      mass: math.format(math.evaluate(1988550000 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 12,
      name: 'Ganimedes',
      radius: 2634100,
      mass: math.format(math.evaluate(148.2 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 13,
      name: 'Titan',
      radius: 2576000,
      mass: math.format(math.evaluate(134.5 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 14,
      name: 'Io',
      radius: 1821600,
      mass: math.format(math.evaluate(89.3 * (math.pow(10, 21))), {precision: 14})
    },
    {
      id: 15,
      name: 'Charon',
      radius: 606000,
      mass: math.format(math.evaluate(1.52 * (math.pow(10, 21))), {precision: 14})
    },
  ]

  const handleSelect = (e) => {
    setName(e.target.value);
  }

  const handleFillInformations = () => {
    celestialBodies.forEach(el => {
      if(name === el.name) {
        setRadius(el.radius);
        setMass(el.mass);
      }
    })
  }

  useEffect(() => {
    handleFillInformations();
  })

  const calculateFallTimeFromAHeightOf10Meters = () => {
    let gravitationalAccelleration = (math.evaluate(`(${gravitationalConst} * ${mass}) / ${radius}^2`)).toFixed(2);
    let massRatio = (math.evaluate(`${mass / celestialBodies[3].mass}`)).toFixed(6);
    let result = (math.evaluate(`${radius} * sqrt((2 * 10) / (${gravitationalConst} * ${mass}))`)).toFixed(2);

    let operationEquation = `t = ${radius} x sqrt((2 * 10) / (${gravitationalConst} * ${mass}))`
    if(gravitationalAccelleration === 'NaN') {
      setgravitationalAccelleration(0);
    } else if(result === 'NaN') {
      setFallTime(0);
    } else {
      setgravitationalAccelleration(gravitationalAccelleration);
      setFallTime(result);
      setOperation(operationEquation);
      setMassRatio(massRatio);
    }
  }

  useEffect(() => {
    calculateFallTimeFromAHeightOf10Meters();
  })

  return(
    <div className="calc-math-wrapper">
      <div className="calc-math__title">Gravity on individual celestial bodies</div>
      <label className="calc-math__label">Choose celestial body from our Solar System:</label>
      <select className="calc-math__select" onChange={handleSelect}>
        <option value="...">...</option>
        <option value="Sun">Sun</option>
        <option value="Mercury">Mercury</option>
        <option value="Venus">Venus</option>
        <option value="Earth">Earth</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
        <option value="Uranus">Uranus</option>
        <option value="Neptune">Neptune</option>
        <option value="Pluto">Pluto</option>
        <option value="Moon">Moon</option>
        <option value="Ganimedes">Ganimedes</option>
        <option value="Titan">Titan</option>
        <option value="Io">Io</option>
        <option value="Charon">Charon</option>
      </select>
      <br/>
      <p className="calc-math__paragraph">Celestial body: <span className="celestialBody-info">{name}</span> which radius is:  <span className="celestialBody-info">{radius / 1000} km</span> and mass: <span className="celestialBody-info">{mass} kg </span><br/>(this is <span className="celestialBody-info">{massRatio}</span> of Earth's mass) <br/>has gravitational acceleration: <span className="celestialBody-info">{gravitationalAccelleration} m/s<sup>2</sup></span><br/><br/>The time of the body's fall (10 meters) on this celestial body's surface is: <span className="celestialBody-info">{fallTime} s</span><br/>Equation is presented below:</p>
      <div className="operation-panel">{operation}</div>
    </div>
  ) 
}

export default Calc2Math