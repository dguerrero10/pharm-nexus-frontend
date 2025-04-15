
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FormUserInfo from "../../../../shared/components/FormUserInfo/FormUserInfo";
import FormUserInsurance from "../../../../shared/components/FormUserInsurance/FormUserInsurance";
import ThreeTabs from "../../../../shared/ui/ThreeTabs/ThreeTabs";
import DashboardFeatureLayout from "../../layouts/DashboardFeatureLayout/DashboardFeatureLayout";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import { Divider } from "@mui/material";

const MyAccountPage = () => {

  return (
    <DashboardFeatureLayout>
      <div className="lg-pad-rl-wrapper">
        <HeaderLayout
          title="My Account"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          icon={<AccountCircleOutlinedIcon />}
        />
        <ThreeTabs
          tabOne={{ component:  <FormUserInfo />, label: "Personal Info"}}
          tabTwo={{ component: <FormUserInsurance />, label: "Insurance" }}
          tabThree={{ component: <h1>Security</h1>, label: "Security"}}
        />
      </div>
    </DashboardFeatureLayout>
  );
};

export default MyAccountPage;
