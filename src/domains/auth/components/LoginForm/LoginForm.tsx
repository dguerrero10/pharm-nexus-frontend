import { Link, useNavigate } from "react-router-dom";
import { Button, CircularProgress, FormGroup } from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputField from "../../../../ui/InputField/InputField";
import SmallCheckbox from "../../../../ui/SmallCheckbox/SmallCheckbox";
import ErrorSnackbar from "../../../../ui/ErrorSnackbar/ErrorSnackbar";
import classes from "./LoginForm.module.scss";

import { motion } from "framer-motion";
import { fadeUpAnimation } from "../../../../ui/animations/animationConfig";
import { LoginFormValues } from "../types/auth-form-types";
import { loginSchema } from "../types/schema-types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { handleApiError } from "../../../../util/funcs/handleApiError";
import { setAuthTokens } from "../../../../util/funcs/auth";
import { AuthTokens } from "../../../../util/interfaces/auth-tokens-interface";
import { publicClient } from "../../../../util/clients/apiClient";

const LoginForm = () => {
  const navigate = useNavigate();

  const [snackbarError, setSnackbarError] = useState<string>();

  const mutation = useMutation({
    mutationFn: (formData: LoginFormValues) => {
      return publicClient.post("/auth/login", formData);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (formData) => {
    try {
      const result = await mutation.mutateAsync(formData);
      if (result) {
        const data = result.data as AuthTokens;
        setAuthTokens(data);
        navigate("/dashboard");
      }
    } catch (error) {
      const errorMessage = handleApiError(error);
      setSnackbarError(errorMessage);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={classes["login-form"]}
      {...fadeUpAnimation}
    >
      <div className="flex-left-col">
        <h1 className="no-margin">Login</h1>
        <p className="md-margin-bottom">Hi, Welcome back 👋</p>
      </div>
      <InputField
        label="Email"
        id="email"
        placeholder="e.g. johndoe@gmail.com"
        type="email"
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
      <div className="flex-between sm-margin-top">
        <FormGroup>
          <SmallCheckbox label="Remember me" />
        </FormGroup>
        <Link to="/auth/forgot-password">Forgot password?</Link>
      </div>
      {mutation.isPending && mutation.isSuccess && <CircularProgress />}
      {!mutation.isPending && (
        <>
          <Button type="submit" color="primary" variant="contained">
            Login
          </Button>
          <div className="flex-row-center sm-pad-top-bottom">
            <p>Not registered yet?</p>
            <Link to="/auth/sign-up" className="xsm-margin-left">
              Create an account
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

export default LoginForm;
