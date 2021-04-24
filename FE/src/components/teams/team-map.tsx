import { useRef, useEffect } from "react";
import { Point } from "types/point.module";

export const TeamMap = ({
  root,
  points,
  width,
  height,
}: {
  root: Point,
  points: Point[],
  width: number,
  height: number,
}): JSX.Element => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const style = { width, height };

  useEffect(() => {
    if (canvas) {
      const context = canvas.current?.getContext("2d");
      const pixelRatio = window.devicePixelRatio;
      context?.clearRect(0, 0, width, height);
      if (context) {
        // context.save();
        // context.fillStyle = "#ffffff00";
        // context.fillRect(0, 0, width, height);

        // // get first position of array members
        // const pointFirst = points[0];

        // // draw from first point to next point
        // for (let i = 1; i < points.length; i += 1) {
        //   const currentPoint = points[i];
        //   const oldPosition = points[i - 1];

        //   context.strokeStyle = "white";
        //   context.lineWidth = 4;
        //   context.beginPath();
        //   context.moveTo(oldPosition.x, oldPosition.y);
        //   context.lineTo(currentPoint.x, currentPoint.y);
        //   context.stroke();
        // }

        // points.forEach(element => {
        //   context.strokeStyle = "white";
        //   context.lineWidth = 4,
        //   context.beginPath();
        //   context.moveTo(root.x, root.y);
        //   context.lineTo(element.x, element.y);
        //   context.stroke();
        // });
      }
    }
  }, [root, points, height, width])

  return (
    <>
      <canvas ref={canvas} width={width} height={height} style={style} />
    </>
  );
}
