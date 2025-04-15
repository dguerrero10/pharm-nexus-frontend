import { authClient } from "../../clients/apiClient";
import { Prescription } from "../../interfaces/prescription.interface";

export const getUserPrescriptions = async () => {
  try {
    const response = await authClient.get("/prescriptions");
    if (response.status === 200) {
      return response.data as Prescription[];
    }
  } catch (error) {
    console.error(error);
  }
};
