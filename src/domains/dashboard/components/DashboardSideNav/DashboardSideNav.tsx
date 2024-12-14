import { NavLink } from "react-router-dom";

import { Button, Divider, ThemeProvider } from "@mui/material";
import { DASHBOARD_LINKS } from "../../shared/DashboardSideNavButtons";
import { grayButtonTheme } from "../../../../ui/gray-button-theme";

import classes from "./DashboardSideNav.module.scss";

const DashboardSideNav = () => {
  return (
    <ThemeProvider theme={grayButtonTheme}>
      <div className={classes["dashboard-sidenav"]}>
        <p>Me</p>
        <Divider />
        <ul className={classes["dashboard-sidenav__list"]}>
          {DASHBOARD_LINKS.map(({ to, title, icon }) => (
            <NavLink key={title} to={to}>
              {({ isActive }) => (
                <Button
                  sx={{
                    gap: 2,
                    backgroundColor: isActive ? "#f1f1f1" : "inherit",
                  }}
                  size="small"
                  startIcon={icon}
                >
                  {title}
                </Button>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
};

export default DashboardSideNav;
