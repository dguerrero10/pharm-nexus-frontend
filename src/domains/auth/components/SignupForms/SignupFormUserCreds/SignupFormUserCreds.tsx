import { Button, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import InputField from "../../../../../ui/InputField/InputField";
import ErrorSnackbar from "../../../../../ui/ErrorSnackbar/ErrorSnackbar";
import classes from "./SignupFormUserCreds.module.scss";

import { motion } from "framer-motion";
import { fadeUpAnimation } from "../../../../../ui/animations/animationConfig";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormCredsValues } from "../../types/auth-form-types";
import { signUpCredsSchema } from "../../types/schema-types";
import { useMutation } from "@tanstack/react-query";
import { handleApiError } from "../../../../../util/funcs/handleApiError";
import { useState } from "react";
import { publicClient } from "../../../../../util/clients/apiClient";

const SignupFormUserCreds = () => {
  const navigate = useNavigate();

  const [snackbarError, setSnackbarError] = useState<string>();

  const mutation = useMutation({
    mutationFn: (formData: { email: string; password: string }) => {
      return publicClient.post("/users/create-user", formData);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormCredsValues>({
    resolver: yupResolver(signUpCredsSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormCredsValues> = async (data) => {
    try {
      await mutation.mutateAsync({
        email: data.email,
        password: data.password,
      });

      if (mutation.isSuccess) {
        navigate("/auth/sign-up/add-insurance");
      }
    } catch (error: any) {
      console.error(error);
      const errorMessage = handleApiError(error);
      setSnackbarError(errorMessage);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={classes["sign-up-form-user-creds"]}
      {...fadeUpAnimation}
    >
      <div className="flex-left-col">
        <h1 className="no-margin">Sign up</h1>
        <p className="md-margin-bottom">
          Signing up is easy. Let's get started 🚀
        </p>
      </div>
      <InputField
        label="Email"
        id="email"
        placeholder="e.g. johndoe@gmail.com"
        {...register("email")}
        error={errors.email && errors.email.message}
      />
      <InputField
        className="sm-margin-top"
        label="Password"
        id="password"
        placeholder="Enter your passsword"
        type="password"
        {...register("password")}
        error={errors.password && errors.password.message}
      />
      <InputField
        className="sm-margin-top"
        label="Password"
        id="confirmPassword"
        placeholder="Confirm your passsword"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword && errors.confirmPassword.message}
      />
      {mutation.isPending && <CircularProgress />}
      {!mutation.isPending && (
        <>
          <Button type="submit" color="primary" variant="contained">
            Create Account
          </Button>
          <div className="flex-row-center sm-pad-top-bottom">
            <p>Already have an account?</p>
            <Link to=".." className="xsm-margin-left">
              Login
            </Link>
          </div>
        </>
      )}
      {mutation.isError && snackbarError && (
        <ErrorSnackbar message={snackbarError} />
      )}
    </motion.form>
  );
};

export default SignupFormUserCreds;
