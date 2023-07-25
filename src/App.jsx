import { Mafs, Line, Coordinates, useMovablePoint, Plot } from "mafs";

import "mafs/core.css";
// import "mafs/font.css";

export default function App() {
  const viewBox = { x: [-2, 2], y: [-4, 4] };
  const point1 = useMovablePoint([-2, -1]);  
  const r = Math.sqrt(point1.point[0] ** 2 + point1.point[1] ** 2);
  const angle = Math.atan2(point1.point[1], point1.point[0]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ flex: 1, marginRight: "10px" }}>
        <Mafs viewBox={viewBox} pan={false}>
          <Coordinates.Cartesian />
          <Line.Segment
            point1={[0, 0]}
            point2={[point1.point[0], 0]}
            color="yellow"
          />
          <Line.Segment
            point1={[point1.point[0], 0]}
            point2={point1.point}
            color="yellow"
          />

          {point1.element}
        </Mafs>
      </div>

      <div style={{ flex: 1, marginLeft: "10px" }}>
        <Mafs viewBox={viewBox} pan={false}>
          <Coordinates.Polar subdivisions={3} lines={1} />
          <Plot.Parametric
            t={[0, angle]}
            xy={(t) => [r * Math.cos(t), r * Math.sin(t)]}
            color="yellow"
          />
          {point1.element}
        </Mafs>
      </div>
    </div>
  );
}
