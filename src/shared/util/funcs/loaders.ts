import { redirect } from "react-router-dom";
import { getIsUserSignupComplete } from "./userInfo";
import { isValidTokens } from "./auth";

export const validateUserLoader = (
  isOnAddInfoPage: boolean = false
) => {
  return async () => {
    try {
      const [isTokensValid, isSignupComplete] = await Promise.all([
        isValidTokens(),
        getIsUserSignupComplete(),
      ]);

      if (!isTokensValid) {
        return redirect("/auth/login");
      }
      
      if (isTokensValid && !isSignupComplete) {
        if (isOnAddInfoPage) return; // Stay where we are.
        return redirect("/auth/sign-up/add-information?incomplete=true");
      }

      if (isTokensValid && isSignupComplete && !isOnAddInfoPage) {
        return; // Don't do anything, let the routing complete.
      }

      return redirect("/auth/login");
    } catch (error) {
      console.error("Loader error:", error);
      throw error;
    }
  };
};
