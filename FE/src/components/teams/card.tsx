import { useState, useRef } from "react";
import { Point } from "types/point";
import { Team } from "types/teams";
import { useOutsideElement } from "components/out-site-element";

export interface CardProps {
  team?: Team;
  index: number;
  point?: Point;
  isRoot?: boolean;
}

export const Card = (props: CardProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wElement = props.isRoot ? 150 : 100;
  const [isShow, setIsShow] = useState<boolean>(false);

  useOutsideElement(wrapperRef, () => {
    setIsShow(false);
  });

  return (
    <div ref={wrapperRef}>
      <div 
        className={[
          "absolute p-1 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110",
          "cursor-pointer outline-none focus:outline-none",
          isShow ? "rounded-md shadow-lg z-40" : "rounded-full",
        ].join(" ")}
        style={{
          top: props.point?.y || 0,
          left: props.point?.x || 0,
          width: "auto",
          height: "auto",
          backgroundColor: !isShow ? "rgb(15 70 91)" : "white",
        }}
        key={props.index.toString()}
        tabIndex={0}
        onClick={() => { setIsShow(!isShow); }}
        onKeyPress={() => { setIsShow(!isShow); }}
      >
        <div className={[
          "relative flex flex-wrap p-1 transform border-white border-dashed justify-center",
          isShow ? "rounded-md border-0" : "rounded-full border-4",
        ].join(" ")}>
          <img 
            className={[
              "flex w-full outline-none focus:outline-none rounded-full",
            ].join(" ")}
            src={`${props.team?.uri_img || "we_logo.png"}`} 
            alt={props.team?.name} 
            style={{
              maxWidth: wElement,
              maxHeight: wElement,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        {isShow && (
          <div 
            className="flex flex-wrap items-start justify-center p-2 text-center rounded-md"
          >
            <div>
              <p className="flex"># <strong>{props.team?.name}</strong></p>
              {props.team?.title && props.team?.title.map((item, i) => (
                <p  className="flex text-left" key={i.toString()}><i>@ {item}</i></p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
