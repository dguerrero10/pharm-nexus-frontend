import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

export const signUpCredsSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export const signUpInfoSchema = yup.object({
    firstName: yup
        .string()
        .required("First name is required"),
    lastName: yup
        .string()
        .required("Last name is required"),
    streetAddress: yup
        .string()
        .required("Street adress is required"),
    city: yup   
        .string()
        .required("City is required"),
    zipCode: yup
        .string()
        .max(6, "Zip Code cannot be more than 6 numbers")
        .required("Zip Code is required"),
    state: yup
        .string()
        .required("State is required"),
    dateOfBirth: yup
        .string()
        .required("Date of Birth is required"),
    phoneNumber: yup
        .string()
        .required("Phone number is required")
});