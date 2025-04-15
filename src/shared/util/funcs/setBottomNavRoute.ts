import { Location } from "react-router-dom";

export const setBottomNavRoute = (location: Location) => {
  const splitLocation = location.pathname.split("/");
  const route = splitLocation[splitLocation.length - 1];

  switch (route) {
    case "prescriptions":
      return 0;
    case "account":
      return 1;
    case "drug-search":
      return 2;
    default:
      return 0;
  }
};
