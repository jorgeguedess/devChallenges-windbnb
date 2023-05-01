import { useState, useEffect } from "react";

const useResize = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenWidth };
};

export default useResize;
