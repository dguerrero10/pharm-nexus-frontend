export enum ErrorCodes {
  USER_EMAIL_CONFLICT = "USER_EMAIL_CONFLICT",
  USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  INVALID_ACCESS_TOKEN = "INVALID_ACCESS_TOKEN",
}

export const isErrorCodeValid = (code: string): code is ErrorCodes => {
  return Object.values(ErrorCodes).includes(code as ErrorCodes);
};
