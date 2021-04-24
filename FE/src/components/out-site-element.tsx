import { useEffect } from "react";

export const useOutsideElement = (
  ref: React.MutableRefObject<any>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (callback && typeof callback === "function") {
          callback();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
