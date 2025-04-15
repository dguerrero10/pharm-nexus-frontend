import { Outlet } from "react-router-dom";

import DashboardTopNav from "../../components/DashboardTopNav/DashboardTopNav";

import classes from "./DashboardRootPage.module.scss";
import { useQuery } from "@tanstack/react-query";
import PageLoadingSpinner from "../../../../shared/ui/PageLoadingSpinner/PageLoadingSpinner";
import { getUserInformation } from "../../../../shared/util/funcs/api/get-user-information";

const DashboardRootPage = () => {
  const { isFetching } = useQuery({
    queryKey: ["user-information"],
    queryFn: getUserInformation,
  });

  if (isFetching) {
    return <PageLoadingSpinner />;
  }

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
