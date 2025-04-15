import { authClient } from "../../clients/apiClient";
import { UserInformation } from "../../interfaces/user-information.interface";

export const getUserInformation = async () => {
  try {
    const response = await authClient.get("/users/user-information");
    if (response.status === 200) {
      return response.data as UserInformation;
    }
  } catch (error) {
    console.error(error);
  }
};
