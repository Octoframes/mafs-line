import { useEffect, useState, useRef } from "react";
import { Mafs, Line, Coordinates, useMovablePoint } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

function MyButton({ onClick }) {
  return <button onClick={onClick}> Hi </button>;
}

function MyComponent({ buttonval }) {
  const point1 = useMovablePoint([-1, -1]);
  const point2 = useMovablePoint([2, 1]);
  const prevButtonVal = useRef(buttonval);

  useEffect(() => {
    if (buttonval !== prevButtonVal.current) {
      point1.setPoint([point1.x + 1, point1.y]);
    }
    prevButtonVal.current = buttonval;
  }, [buttonval]);

  return (
    <Mafs viewBox={{ x: [-2, 2], y: [-1, 1] }}>
      <Coordinates.Cartesian />
      <Line.Segment point1={point1.point} point2={point2.point} />
      {point1.element}
      {point2.element}
    </Mafs>
  );
}

export default function App() {
  const [buttonval, setButtonVal] = useState(0);

  const handleClick = () => {
    setButtonVal(buttonval + 1);
  };

  return (
    <>
      <MyComponent buttonval={buttonval} />
      <MyButton onClick={handleClick} />
    </>
  );
}
