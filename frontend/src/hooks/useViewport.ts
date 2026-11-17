import { useState, useEffect } from "react";

function getViewportDimensions() {
  if (typeof window !== "undefined") {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  return { width: 0, height: 0 };
}

export function useViewport() {
  const [viewport, setViewport] = useState(getViewportDimensions);

  useEffect(() => {
    const handleResize = () => {
      setViewport(getViewportDimensions());
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewport;
}

export default useViewport;
