import { ErrorCodes, isErrorCodeValid } from "../enums/error-codes-enum";

export const handleApiError = (error: any) => {
  const errorCode = error?.response?.data?.code;

  if (errorCode && isErrorCodeValid(errorCode)) {
    switch (errorCode) {
      case ErrorCodes.USER_EMAIL_CONFLICT:
        return "This email is already in use. Please try a differnt one.";
      case ErrorCodes.INVALID_CREDENTIALS:
        return "Invalid credentials provided.";
      case ErrorCodes.USER_NOT_FOUND:
        return "Could not find a user with the provided credentials."
    }
  } else {
    return "An unknown error occurred.";
  }
};
