import axios from "axios";
import { AuthTokens } from "../interfaces/auth-tokens-interface";
import { clearAuthTokens, getAuthTokens } from "../funcs/auth";

const publicClient = axios.create({
  baseURL: "http://localhost:3000",
});

const authClient = axios.create({
  baseURL: "http://localhost:3000",
});

authClient.interceptors.request.use(
  (config) => {
    const { accessToken, refreshToken }: AuthTokens = getAuthTokens();

    if (accessToken && refreshToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      return clearAuthTokens();
    }
    return Promise.reject(error);
  }
);

export { authClient, publicClient };
