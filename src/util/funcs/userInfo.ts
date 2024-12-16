import { authClient } from "../clients/apiClient";

export const getIsUserSignupComplete = async () => {
  try {
    const result = await authClient.get(
      "/users/get-is-user-signup-complete"
    );

    const isCase: { signupcomplete: string } = result.data;

    if (isCase?.signupcomplete.toUpperCase() === "N") {
      return false;
    }

    return true;
  } catch (error) {
    console.error(error)
    return false;
  }
};

export const getUserInfo = async () => {
  try {
  } catch (error) {}
};
