import { Divider } from "@mui/material";
import classes from "./HeaderLayout.module.scss";
const HeaderLayout: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className={classes["header-layout"]}>
      <h1>{icon}{" "}{title}</h1>
      <p className="p-large">{description}</p>
      <Divider />
    </div>
  );
};

export default HeaderLayout;
