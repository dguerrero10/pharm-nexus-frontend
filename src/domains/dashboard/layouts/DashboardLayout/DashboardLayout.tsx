import { Children } from "../../../../common/types/common-types";

import classes from "./DashboardLayout.module.scss";

const DashboardLayout: React.FC<Children> = ({ children }) => {
  return <div className={classes["dashboard-grid-layout"]}>{children}</div>;
};

export default DashboardLayout;
