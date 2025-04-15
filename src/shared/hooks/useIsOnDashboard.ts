import { useState } from "react";

export const useIsOnDashboard = () => {
  const [isOnDashboard, setIsOnDashboard] = useState(false);

  const handleIsOnDashboard = (pathname: string) => {
    if (pathname.split("dashboard").length > 1) {
      setIsOnDashboard(true);
    }
  };

  return { isOnDashboard, handleIsOnDashboard };
};
