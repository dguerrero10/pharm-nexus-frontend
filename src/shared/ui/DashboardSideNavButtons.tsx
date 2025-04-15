import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";

export const DASHBOARD_LINKS = [
  {
    to: "/dashboard/me/prescriptions",
    title: "My Prescriptions",
    icon: <MedicationOutlinedIcon />,
  },
  {
    to: "/dashboard/me/account",
    title: "My Account",
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    to: "/dashboard/me/drug-search",
    title: "Drug Search",
    icon: <PolicyOutlinedIcon />,
  },
];
