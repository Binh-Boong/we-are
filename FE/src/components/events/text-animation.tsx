import React, { useState, useEffect } from "react";

export interface TextAnimationProps {
  texts: string[],
  dot: string,
}

export const TextAnimation = (props: TextAnimationProps): JSX.Element => {
  const [numIndexText, setNumIndexText] = useState<number>(0);
  const [numIndexList, setNumIndexList] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumIndexText((numIndexText) => {
        if (numIndexText >= props.texts[numIndexList].length) {
          setNumIndexList(numIndexList => {
            return (numIndexList + 1) % props.texts.length;
          });
          return 0;
        } 

        return numIndexText + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center justify-center text-3xl font-semibold select-none font-Press-Start-2P"
      style={{ color: "#6790a3" }}
    >
      <span>{`<${props.texts[numIndexList].substring(0, numIndexText)}${props.dot} />`}</span>
    </div>
  );
};
