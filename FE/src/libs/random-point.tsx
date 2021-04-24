import { Point } from "types/point.module";

export const DISTANCE_W_SM = 110;
export const DISTANCE_H_SM = 110;
export const DISTANCE_W = 150;
export const DISTANCE_H = 150;
export const DISTANCE_W_LG = 200;
export const DISTANCE_H_LG = 200;
export const POINT_R = 100;

export const randomPoints = (length: number, start: Point, end: Point): {
  root: Point,
  points: Point[],
  height: number,
} => {
  const width = Math.abs(start.x - end.x) - 2 * POINT_R;
  const d_w = width > 300 ? (width > 1000 ? DISTANCE_W_LG : DISTANCE_W) : DISTANCE_W_SM;
  const d_h = width > 300 ? (width > 1000 ? DISTANCE_H_LG : DISTANCE_H) : DISTANCE_H_SM;
  const padding = width % d_w;
  const pointPerWidth = width / d_w;
  let xRun = start.x + POINT_R + padding / 2;
  let yRun = start.y + POINT_R;
  const points: Point[] = [];
  const calHeight = length / pointPerWidth * d_h + POINT_R * 2;
  const rootPoint = getRootPoint(start, end, calHeight);
  let maxHeight = 0;

  for (let i = 0; points.length < length; i += 1) {
    const newPoint: Point = Object.assign({}, {
      x: xRun + (i % pointPerWidth * d_w),
      y: Math.floor(i / (Math.floor(pointPerWidth) || 1)) * d_h + POINT_R,
    });
    const check = checkDistance(rootPoint, newPoint, d_w, d_h);

    if (check) {
      points.push(newPoint);
    }
    maxHeight = newPoint.y;
  }

  return {
    root: rootPoint,
    points: points,
    height: maxHeight + start.y + POINT_R + d_h,
  };
}

const getRootPoint = (start: Point, end: Point, height: number): Point => {
  return Object.assign({}, {
    x: start.x + Math.abs(start.x - end.x) / 2,
    y: height / 2,
  })
}

export const checkDistance = (point_1: Point, point_2: Point, d_w: number, d_h: number): boolean => {
  const d = Math.sqrt(Math.pow(Math.abs(point_1.x - point_2.x), 2) + Math.pow(Math.abs(point_1.y - point_2.y), 2));
  if (d < d_h || d < d_w) {
    return false;
  }

  return true;
}
