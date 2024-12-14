import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import classes from "./DashboardFeaturePage.module.scss";
import DashboardSideNav from "../../components/DashboardSideNav/DashboardSideNav";

const DashboardFeaturePage = () => {
  return (
    <DashboardLayout>
      <DashboardSideNav />
      <div className={classes["dashboard-feature-page"]}>
        <Outlet />
      </div>
    </DashboardLayout>
  );
};

export default DashboardFeaturePage;
