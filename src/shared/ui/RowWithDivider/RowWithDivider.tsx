import { Divider } from "@mui/material";

import classes from "./RowWithDivider.module.scss";

const RowWithDivider: React.FC<{
  title: string;
  value: string;
  twoItem?: boolean;
  titleTwo?: string;
  valueTwo?: string;
}> = ({ title, value, twoItem = false, titleTwo, valueTwo }) => {
  let content: any = "";

  if (twoItem) {
    content = (
      <>
        <div className={classes["row_with_divider--two-item"]}>
          <p className={classes["p1"]}>{title}:</p>
          <p className={classes["p2"]}>{value}</p>
        </div>

        <div className={classes["row_with_divider--two-item"]}>
          <p className={classes["p1"]}>{titleTwo}:</p>
          <p className={classes["p1"]}>{valueTwo}</p>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <p className={classes["p1"]}>{title}:</p>
        <p className={classes["p2"]}>{value}</p>
      </>
    );
  }

  return (
    <>
      <div className={classes["row_with_divider"]}>{content}</div>
      <Divider />
    </>
  );
};

export default RowWithDivider;
