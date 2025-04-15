import { Children } from "../../../../shared/util/interfaces/common.interface";

import classes from "./PrescriptionCardLayout.module.scss";

const PrescriptionCardLayout: React.FC<Children> = ({ children }) => {
  return <div className={classes["prescription-card-layout"]}>{children}</div>;
};

export default PrescriptionCardLayout;
