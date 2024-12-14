import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import MasksOutlinedIcon from "@mui/icons-material/MasksOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";

export const DASHBOARD_LINKS = [
  {
    to: "/dashboard/home",
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    to: "/dashboard/vitals",
    title: "Vitals",
    icon: <MonitorHeartOutlinedIcon />,
  },
  {
    to: "/dashboard/history",
    title: "History",
    icon: <MedicalInformationOutlinedIcon />,
  },
  {
    to: "/dashboard/vaccines-immunizations",
    title: "Vaccines/Immunizations",
    icon: <VaccinesOutlinedIcon />,
  },
  {
    to: "/dashboard/medications",
    title: "Medications",
    icon: <MedicationOutlinedIcon />,
  },
  {
    to: "/dashboard/documents",
    title: "Documents",
    icon: <AssignmentOutlinedIcon />,
  },
  {
    to: "/dashboard/providers",
    title: "Providers",
    icon: <HealthAndSafetyOutlinedIcon />,
  },
  {
    to: "/dashboard/drug-allergies",
    title: "Drug Allergies",
    icon: <MasksOutlinedIcon />,
  },
];
