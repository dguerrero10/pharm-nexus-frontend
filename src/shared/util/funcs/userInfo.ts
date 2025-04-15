import { authClient } from "../clients/apiClient";

export const getIsUserSignupComplete = async () => {
  try {
    const result = await authClient.get(
      "/users/is-signup-complete"
    );

    const isCase: { signupcomplete: string } = result.data;

    if (isCase && isCase?.signupcomplete.toUpperCase() === "N") {
      return false;
    }

    return true;
  } catch (error) {
    console.error(error)
    return false;
  }
};
