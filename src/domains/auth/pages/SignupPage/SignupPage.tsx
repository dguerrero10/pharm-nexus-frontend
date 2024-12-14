import { Outlet } from "react-router-dom";
import AuthPageLayout from "../../layouts/AuthPageLayout/AuthPageLayout";

const SignupPage = () => {
  return (
    <>
      <AuthPageLayout>
        <Outlet />
      </AuthPageLayout>
    </>
  );
};

export default SignupPage;
