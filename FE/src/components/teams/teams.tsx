import React, { useState, useEffect, useRef } from "react";

import { randomPoints } from "libs/random-point";

import { Card } from "components/teams/card";
import { TeamMap } from "components/teams/team-map";

import * as APIUri from "constants/api";

import { Team } from "types/teams.module";
import { Point } from "types/point.module";

export const Teams = (): JSX.Element => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [height, setHeight] = useState<number>(1000);
  const [width, setWidth] = useState<number>(1000);
  const [position, setPosition] = useState<Point>({
    x: 0,
    y: 0,
  });
  const [calPoint, setCalPoint] = useState<{
    root: Point,
    points: Point[],
  }>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(APIUri.TEAMS).then((res) => {
      res.json().then(data => {
        if (data && typeof data === "object") {
          setTeams(data);
        }
      }).catch(err_json => {
        setTeams([]);
      })
    }).catch(err => {
      setTeams([]);
    })
  }, [])

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const bound = containerRef.current.getBoundingClientRect();
      setWidth(bound.width);
      setHeight(bound.height);
      setPosition({
        x: bound.x,
        y: bound.y
      });

      const points = randomPoints(teams.length, { x: 0, y: 0}, { x: bound.width, y: bound.height });
      setHeight(points.height);
      setCalPoint(points);
    }
  }, [teams])

  useEffect(() => {
    const resizeListener = () => {
      if (containerRef && containerRef.current) {
        const bound = containerRef.current.getBoundingClientRect();
        setWidth(bound.width);
        setHeight(bound.height);
        setPosition({
          x: bound.x,
          y: bound.y
        });
  
        const points = randomPoints(teams.length, { x: 0, y: 0}, { x: bound.width, y: bound.height });
        setHeight(points.height);
        setCalPoint(points);
      }
    }

    window.addEventListener("resize", resizeListener);

    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    }
  }, [containerRef, teams, calPoint])

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-1 md:p-8 bg-teams">
      <div
        className="relative flex items-center justify-center w-full"
        ref={containerRef}  
      >
        {teams && calPoint?.points && calPoint.root ? (
          <>
            <TeamMap 
              height={height}
              width={width}
              points={calPoint?.points}
              root={calPoint.root}
            />
            <Card 
              team={{
                id: "root",
                name: "WE ARE ONE",
                uri_img: "/we_show.jpg",
                title: [],
              }}
              isRoot={true}
              index={0}
              point={calPoint.root}
            />
            {teams.map((item, i) => (
              <Card 
                team={item}
                index={i}
                point={calPoint.points[i]}
                key={i.toString()}
              />
            ))}
          </>
        ) : <></>}
      </div>
    </div>
  );
}
