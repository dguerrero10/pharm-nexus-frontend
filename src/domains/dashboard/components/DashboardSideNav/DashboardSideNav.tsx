import { NavLink } from "react-router-dom";

import { Button, Divider, ThemeProvider } from "@mui/material";

import { queryClient } from "../../../../App";
import { UserInformation } from "../../../../shared/util/interfaces/user-information.interface";

import classes from "./DashboardSideNav.module.scss";
import { DASHBOARD_LINKS } from "../../../../shared/ui/DashboardSideNavButtons";
import { grayButtonTheme } from "../../../../shared/ui/gray-button-theme";

const DashboardSideNav = () => {
  const data: UserInformation | undefined = queryClient.getQueryData(['user-information']);
  const fullName = `${data?.firstName} ${data?.lastName}`;   

  return (
    <ThemeProvider theme={grayButtonTheme}>
      <div className={classes["dashboard-sidenav"]}>
        <p className="text-align-right p-large">{fullName}</p>
        <Divider />
        <ul className={classes["dashboard-sidenav__list"]}>
          {DASHBOARD_LINKS.map(({ to, title, icon }) => (
            <NavLink key={title} to={to}>
              {({ isActive }) => (
                <Button
                  sx={{
                    gap: 2,
                    padding: ".5rem 1rem",
                    backgroundColor: isActive ? "#f1f1f1" : "inherit",
                  }}
                  size="small"
                  endIcon={icon}
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
