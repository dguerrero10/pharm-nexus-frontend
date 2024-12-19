import { Children } from "../../../../util/interfaces/common-types";

import classes from "./DashboardLayout.module.scss";

const DashboardLayout: React.FC<Children> = ({ children }) => {
  return <div className={classes["dashboard-grid-layout"]}>{children}</div>;
};

export default DashboardLayout;
