
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { setBottomNavRoute } from "../../../../shared/util/funcs/setBottomNavRoute";
import { DASHBOARD_LINKS } from "../../../../shared/ui/DashboardSideNavButtons";
import { Box } from "@mui/material";

export default function DashboardBottomNav() {
  const location = useLocation();
  const [routeValue, setRouteValue] = useState(0);

  useEffect(() => {
    setRouteValue(setBottomNavRoute(location));
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        zIndex: 999,
        position: "fixed",
        bottom: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={routeValue}
        onChange={(_, newValue) => {
          setRouteValue(newValue);
        }}
      >
        {DASHBOARD_LINKS.map(({ to, title, icon }) => (
          <BottomNavigationAction
            key={title}
            label={title}
            icon={icon}
            component={NavLink}
            to={to}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
