import axios from "axios";

import { redirect } from "react-router-dom";
import { AuthTokens } from "../interfaces/auth-tokens-interface";

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

export const verifyAuthTokensLoader = async () => {
  try {
    const authTokens: AuthTokens = getAuthTokens();
    if (!authTokens || !authTokens.accessToken || !authTokens.refreshToken) {
      return redirect("/auth/login");
    }

    return await axios.post(
      "http://localhost:3000/auth/validate-tokens",
      authTokens
    );
  } catch (error) {
    return redirect("/auth/login");
  }
};
