import { debounce } from "@mui/material";
import { useLayoutEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    updateSize();

    const debouncedUpdateSize = debounce(updateSize, 100);

    window.addEventListener("resize", debouncedUpdateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { isMobile };
};
