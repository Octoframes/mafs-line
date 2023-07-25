import * as React from "react";
import { Mafs, Line, Coordinates, useMovablePoint, Plot } from "mafs";
import "./styles.css";

export default function PolarCoordinate() {
  const viewBox = { x: [-2, 2], y: [-4, 4] };
  const point1 = useMovablePoint([-2, -1], {
    color: "orange",
  });
  const r = Math.sqrt(point1.point[0] ** 2 + point1.point[1] ** 2);
  let angle = Math.atan2(point1.point[1], point1.point[0]);
  const mycolor = "blue";
  // Adjust angle to always be positive, between 0 to 2π
  if (angle < 0) {
    angle += 2 * Math.PI;
  }
  return (
    <div className="mafs-container">
      <div className="mafs-item">
        <Mafs viewBox={viewBox} pan={false}>
          <Coordinates.Cartesian />
          <Line.Segment
            point1={[0, 0]}
            point2={[point1.point[0], 0]}
            color={mycolor}
          />
          <Line.Segment
            point1={[point1.point[0], 0]}
            point2={point1.point}
            color={mycolor}
          />

          {point1.element}
        </Mafs>
      </div>
      <div className="mafs-item">
        <Mafs viewBox={viewBox} pan={false}>
          <Coordinates.Polar subdivisions={1} lines={1} />
          <Line.Segment point1={[0, 0]} point2={[r, 0]} color={mycolor} />
          <Plot.Parametric
            t={[0, angle]}
            xy={(t) => [r * Math.cos(t), r * Math.sin(t)]}
            color={mycolor}
          />
          {point1.element}
        </Mafs>
      </div>
    </div>
  );
}
