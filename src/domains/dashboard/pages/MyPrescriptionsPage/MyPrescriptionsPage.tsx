import { useQuery } from "@tanstack/react-query";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PrescriptionCard from "../../components/PrescriptionCard/PrescriptionCard";
import DashboardFeatureLayout from "../../layouts/DashboardFeatureLayout/DashboardFeatureLayout";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import PrescriptionCardLayout from "../../layouts/PrescriptionCardLayout/PrescriptionCardLayout";
import { Prescription } from "../../../../shared/util/interfaces/prescription.interface";
import { getUserPrescriptions } from "../../../../shared/util/funcs/api/get-user-prescriptions";


const MyPrescriptionsPage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["user-prescriptions"],
    queryFn: getUserPrescriptions,
  });

  console.log(data);

  return (
    <DashboardFeatureLayout>
      <div className="lg-pad-rl-wrapper">
        <HeaderLayout
          title="My Prescriptions"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sit."
          icon={<MedicationOutlinedIcon/>}
        />
        <PrescriptionCardLayout>
          {data &&
            data.map((prescription: Prescription) => (
              <PrescriptionCard
                key={prescription.prescriptionId}
                prescription={prescription}
              />
            ))}
        </PrescriptionCardLayout>
      </div>
    </DashboardFeatureLayout>
  );
};

export default MyPrescriptionsPage;
