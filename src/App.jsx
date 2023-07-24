import { useState, useEffect } from "react";
import "mafs/core.css";
import "mafs/font.css";
import { Mafs, Line, Coordinates, useMovablePoint } from "mafs";

function Button(probs) {
  return <button onClick={probs.onClick}> Hi </button>;
}

export default function App() {
  const [color, setColor] = useState("red");

  const point1 = useMovablePoint([-1, -1]);
  const point2 = useMovablePoint([2, 1]);

  useEffect(() => {
    console.log(point1.x)
  }, [point1.x])


  function callback(color) {
    return color === "red" ? "blue" : "red";
  }

  function handleClick() {
    console.log(point1.x)
    point1.setPoint([point1.x+1, point1.y]);
    setColor((prevColor) => callback(prevColor));
  }

  return (
    <>
      <Mafs viewBox={{ x: [-2, 2], y: [-1, 1] }}>
        <Coordinates.Cartesian />
        <Line.Segment point1={point1.point} point2={point2.point} />
        {point1.element}
        {point2.element}
      </Mafs>
      <Button onClick={handleClick} />
      <h1 style={{ color: color }}> Hello World </h1>
    </>
  );
}
