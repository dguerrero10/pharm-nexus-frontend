import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthPage from "../../domains/auth/pages/AuthPage/AuthPage";
import LoginForm from "../../domains/auth/components/LoginForm/LoginForm";
import SignupPage from "../../domains/auth/pages/SignupPage/SignupPage";
import DashboardRootPage from "../../domains/dashboard/pages/DashboardRootPage/DashboardRootPage";
import DashboardFeaturePage from "../../domains/dashboard/pages/DashboardFeaturePage/DashboardFeaturePage";
import MyAccountPage from "../../domains/dashboard/pages/MyAccountPage/MyAccountPage";
import MyPrescriptionsPage from "../../domains/dashboard/pages/MyPrescriptionsPage/MyPrescriptionsPage";

import FormUserInfo from "../components/FormUserInfo/FormUserInfo";
import FormUserInsurance from "../components/FormUserInsurance/FormUserInsurance";
import SignupFormUserCreds from "../../domains/auth/components/SignupFormUserCreds/SignupFormUserCreds";
import { validateUserLoader } from "./funcs/loaders";

export const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <LoginForm /> },
      {
        path: "sign-up",
        element: <SignupPage />,
        children: [
          { index: true, element: <SignupFormUserCreds /> },
          {
            path: "add-information",
            element: <FormUserInfo />,
            loader: validateUserLoader(true),
          },
          {
            path: "add-insurance",
            element: <FormUserInsurance />,
            loader: validateUserLoader(false),
          },
        ],
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardRootPage />,
    loader: validateUserLoader(false),
    children: [
      { index: true, element: <Navigate to="me/prescriptions" replace /> },
      {
        path: "me",
        element: <DashboardFeaturePage />,
        children: [
          { index: true, element: <Navigate to="prescriptions" replace /> },
          {
            path: "prescriptions",
            element: <MyPrescriptionsPage />,
          },
          {
            path: "account",
            element: <MyAccountPage />,
          },
        ],
      },
    ],
  },
]);
