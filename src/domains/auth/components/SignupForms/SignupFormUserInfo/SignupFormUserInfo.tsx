import axios from "axios";

import InputField from "../../../../../ui/InputField/InputField";
import classes from "./SignupFormUserInfo.module.scss";

import { motion } from "framer-motion";
import { fadeInLeftAnimation } from "../../../../../ui/animations/animationConfig";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormInfoValues } from "../../types/auth-form-types";
import { signUpInfoSchema } from "../../types/schema-types";
import { useMutation } from "@tanstack/react-query";

const SignupFormUserInfo = () => {
  const mutation = useMutation({
    mutationFn: (formData: SignUpFormInfoValues) => {
      return axios.post("http://localhost:3000/auth/login", formData);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInfoValues>({
    resolver: yupResolver(signUpInfoSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormInfoValues> = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={classes["sign-up-form-user-info"]}
      {...fadeInLeftAnimation}
    >
      <div className="flex-left-col">
        <h1 className="no-margin">Personal Info</h1>
        <p className="md-margin-bottom">Add your personal information 📝</p>
      </div>
      <div className="flex-between">
        <InputField
          className="sm-margin-right"
          label="First name"
          id="firstName"
          placeholder="e.g. John"
          {...register("firstName")}
          error={errors.firstName && errors.firstName.message}
        />
        <InputField
          label="Last name"
          id="lastName"
          placeholder="e.g. Doe"
          {...register("lastName")}
          error={errors.lastName && errors.lastName.message}
        />
      </div>
      <InputField
        className="sm-margin-top"
        label="Street address"
        id="streetAddress"
        placeholder="e.g. 123 Home st."
        {...register("streetAddress")}
        error={errors.streetAddress && errors.streetAddress.message}
      />
      <div className="flex-between sm-margin-top">
        <InputField
          className="sm-margin-right"
          label="City"
          id="city"
          placeholder="e.g. Home city"
          {...register("city")}
          error={errors.city && errors.city.message}
        />
        <InputField
          label="Zip Code"
          id="zipCode"
          placeholder="e.g. 54321"
          {...register("zipCode")}
          error={errors.zipCode && errors.zipCode.message}
        />
      </div>
      <div className="flex-between sm-margin-top">
        <InputField
          className="sm-margin-right"
          label="State"
          id="state"
          placeholder="e.g. CA"
          {...register("state")}
          error={errors.state && errors.state.message}
        />
        <InputField
          label="Date of Birth"
          id="dateOfBirth"
          placeholder="01/01/1991"
          {...register("dateOfBirth")}
          error={errors.dateOfBirth && errors.dateOfBirth.message}
        />
      </div>
      <InputField
        className="sm-margin-top"
        label="Phone number"
        id="phoneNumber"
        placeholder="e.g. 123-456-7890"
        {...register("phoneNumber")}
        error={errors.phoneNumber && errors.phoneNumber.message}
      />
      <Button type="submit" color="primary" variant="contained">
        Add Personal Info
      </Button>
    </motion.form>
  );
};

export default SignupFormUserInfo;
