import { Outlet } from "react-router-dom";

import DashboardTopNav from "../../components/DashboardTopNav/DashboardTopNav";

import classes from './DashboardRootPage.module.scss';

const DashboardRootPage = () => {
  return (
    <>
      <DashboardTopNav />
      <main className={classes["dashboard-root-page"]}>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardRootPage;
