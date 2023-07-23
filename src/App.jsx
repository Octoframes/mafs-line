import React, { useState } from 'react';

import "mafs/core.css";
import "mafs/font.css";

import { Mafs, Line, Coordinates, useMovablePoint } from "mafs";


function Button({onClick}) {
  return <button onClick={onClick}> Hi </button>;
};


export default function App() {

  const [color, setColor] = useState('red');
  const [my_x, setmy_x] = useState(-2)
  const point1 = useMovablePoint([my_x, -1]);
  const point2 = useMovablePoint([2, 1]);

  function callback(color) {
    if (color === "red") {
      return ("blue");
    } else {
      return ("red");
    } 
  }

  function callback2(myval) {
    console.log("ho");
    console.log(myval);
    return (myval + 1);
  }

  function handleClick() {
    setColor(callback);
    setmy_x(callback2);
  }

  return (
    <>
    <Mafs viewBox={{ x: [-2, 2], y: [-1, 1] }}>
      <Coordinates.Cartesian />
      <Line.Segment point1={point1.point} point2={point2.point} />
      {point1.element}
      {point2.element}
    </Mafs>
    <Button onClick={handleClick}/>
    <h1 style={{color: color}}> Hello World </h1>

    </>
  );
}

