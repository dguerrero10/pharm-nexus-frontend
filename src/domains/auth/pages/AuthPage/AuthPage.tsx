import { Outlet } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import AuthPageLayout from "../../layouts/AuthPageLayout/AuthPageLayout";

const AuthPage = () => {
  return (
    <>
      <AuthHeader />
      <AuthPageLayout>
        <Outlet />
      </AuthPageLayout>
    </>
  );
};

export default AuthPage;
