import { Children } from "../../../../shared/util/interfaces/common.interface";

import classes from "./DashboardFeatureLayout.module.scss";

const DashboardFeatureLayout: React.FC<Children> = ({ children }) => {
  return <div className={classes["dashboard-feature-layout"]}>{children}</div>;
};

export default DashboardFeatureLayout;
