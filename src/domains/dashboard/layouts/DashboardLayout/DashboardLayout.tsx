import { Children } from "../../../../shared/util/interfaces/common.interface";

import classes from "./DashboardLayout.module.scss";

const DashboardLayout: React.FC<Children> = ({ children }) => {
  return <div className={classes["dashboard-grid-layout"]}>{children}</div>;
};

export default DashboardLayout;
