import { redirect } from "react-router-dom";
import { AuthTokens } from "../interfaces/auth-tokens-interface";

import { publicClient } from "../clients/apiClient";

export const setAuthTokens = (authTokens: AuthTokens) => {
  localStorage.setItem("tokens", JSON.stringify(authTokens));
};

export const getAuthTokens = (): AuthTokens => {
  const tokens = localStorage.getItem("tokens");

  try {
    return tokens
      ? (JSON.parse(tokens) as AuthTokens)
      : { accessToken: null, refreshToken: null };
  } catch (error) {
    return { accessToken: null, refreshToken: null };
  }
};

export const clearAuthTokens = () => {
  localStorage.removeItem("tokens");
  return redirect("/auth/login");
};

export const isValidTokens = async (): Promise<boolean | undefined> => {
  try {
    const authTokens: AuthTokens = getAuthTokens();

    if (!authTokens || !authTokens.accessToken || !authTokens.refreshToken) {
      return false;
    }

    const result = await publicClient.post("/auth/validate-tokens", authTokens);
    
    if (result?.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
