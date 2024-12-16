import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthPage from "../domains/auth/pages/AuthPage/AuthPage";
import LoginForm from "../domains/auth/components/LoginForm/LoginForm";
import SignupPage from "../domains/auth/pages/SignupPage/SignupPage";
import SignupFormUserCreds from "../domains/auth/components/SignupForms/SignupFormUserCreds/SignupFormUserCreds";
import SignupFormUserInfo from "../domains/auth/components/SignupForms/SignupFormUserInfo/SignupFormUserInfo";
import SignUpFormUserInsurance from "../domains/auth/components/SignupForms/SignupFormUserInsurance/SignupFormUserInsurance";
import DashboardRootPage from "../domains/dashboard/pages/DashboardRootPage/DashboardRootPage";
import DashboardFeaturePage from "../domains/dashboard/pages/DashboardFeaturePage/DashboardFeaturePage";
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
            element: <SignupFormUserInfo />,
            loader: validateUserLoader(true),
          },
          { path: "add-insurance", element: <SignUpFormUserInsurance /> },
        ],
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardRootPage />,
    children: [
      {
        index: true,
        element: <DashboardFeaturePage />,
        loader: validateUserLoader(),
      },
    ],
  },
]);
