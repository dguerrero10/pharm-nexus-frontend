import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import classes from "./DashboardFeaturePage.module.scss";
import DashboardSideNav from "../../components/DashboardSideNav/DashboardSideNav";
import { useEffect } from "react";
import { useIsMobile } from "../../../../shared/hooks/useIsOnMobile";
import DashboardBottomNav from "../../components/DashboardBottomNav/DashboardBottomNav";

const DashboardFeaturePage = () => {
  const { isMobile } = useIsMobile();

  useEffect(() => {
  }, [isMobile]);

  return (
    <DashboardLayout>
      {!isMobile && <DashboardSideNav />}
      <div className={classes["dashboard-feature-page"]}>
        <Outlet />
      </div>
      {isMobile && <DashboardBottomNav />}
    </DashboardLayout>
  );
};

export default DashboardFeaturePage;
