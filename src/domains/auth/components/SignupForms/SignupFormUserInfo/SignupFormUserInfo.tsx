import { useMutation } from "@tanstack/react-query";
import classes from "./SignupFormUserInfo.module.scss";
import { motion } from "framer-motion";
import { fadeInLeftAnimation } from "../../../../../ui/animations/animationConfig";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormInfoValues } from "../../types/auth-form-types";
import { signUpInfoSchema } from "../../types/schema-types";
import { useState } from "react";
import { AutoCompleteOption } from "../../../../../util/interfaces/common-types";
import { STATE_DATA } from "../../../../../util/constants/state-addresses";
import { useFormatZipCode } from "../../../../../hooks/input-formatters/userFormatZipCode";
import { useFormatDateOfBirth } from "../../../../../hooks/input-formatters/useFormatDateOfBirth";
import { useFormatPhoneNumber } from "../../../../../hooks/input-formatters/useFormatPhoneNumber";
import { authClient } from "../../../../../util/clients/apiClient";
import { convertToDate } from "../../../../../util/funcs/convertToDate";
import { handleApiError } from "../../../../../util/funcs/handleApiError";
import InputField from "../../../../../ui/InputField/InputField";
import ErrorSnackbar from "../../../../../ui/ErrorSnackbar/ErrorSnackbar";
import { useNavigate } from "react-router-dom";

const SignupFormUserInfo = () => {
  const navigate = useNavigate();

  const { zipCode, handleZipCodeFormat } = useFormatZipCode();
  const { dob, handleDOBFormat } = useFormatDateOfBirth();
  const { phoneNumber, handlePhoneNumberFormat } = useFormatPhoneNumber();
  const [stateCode, setStateCode] = useState("");
  const [filteredStates, setFilteredStates] = useState([...STATE_DATA]);
  const [snackbarError, setSnackbarError] = useState<string>();

  const handleStateCodeChange = (value: string) => {
    const filteredStates = STATE_DATA.filter((data: AutoCompleteOption) => {
      return data.label.includes(value) || data.searchItem.includes(value);
    });
    setFilteredStates(filteredStates);
    setStateCode(value);
    setValue("stateCode", value);
    clearErrors("stateCode");
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("zipCode", e.target.value);
    handleZipCodeFormat(e);
    clearErrors("zipCode");
  };

  const handleDOBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("dateOfBirth", e.target.value);
    handleDOBFormat(e);
    clearErrors("dateOfBirth");
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("phoneNumber", e.target.value);
    handlePhoneNumberFormat(e);
    clearErrors("phoneNumber");
  };

  const mutation = useMutation({
    mutationFn: (formData: SignUpFormInfoValues) => {
      return authClient.post("/users/add-user-information", formData);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm<SignUpFormInfoValues>({
    resolver: yupResolver(signUpInfoSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormInfoValues> = async (formData) => {
    try {
      formData["dateOfBirth"] = convertToDate(formData["dateOfBirth"]);
      formData["phoneNumber"] = formData["phoneNumber"].replaceAll("-", "");

      const result = await mutation.mutateAsync(formData);

      if (result.status === 201) {
        navigate("/auth/sign-up/add-insurance");
      } else {
        throw new Error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      const errorMessage = handleApiError(error);
      setSnackbarError(errorMessage);
    }
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
          type="text"
          placeholder="e.g. 54321"
          value={zipCode}
          onChange={handleZipCodeChange}
          error={errors.zipCode && errors.zipCode.message}
        />
      </div>
      <div className="flex-between sm-margin-top">
        <InputField
          className="sm-margin-right"
          label="State"
          id="stateCode"
          placeholder="e.g. CA"
          filterFn={handleStateCodeChange}
          value={stateCode}
          autoCompleteOptions={filteredStates}
          error={errors.stateCode && errors.stateCode.message}
        />
        <InputField
          label="Date of Birth"
          id="dateOfBirth"
          placeholder="e.g. 12-25-1991"
          value={dob}
          onChange={handleDOBChange}
          error={errors.dateOfBirth && errors.dateOfBirth.message}
        />
      </div>
      <InputField
        className="sm-margin-top"
        label="Phone number"
        id="phoneNumber"
        placeholder="e.g. 123-456-7890"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        error={errors.phoneNumber && errors.phoneNumber.message}
      />
      <Button type="submit" color="primary" variant="contained">
        Add Personal Info
      </Button>
      {mutation.isError && snackbarError && (
        <ErrorSnackbar message={snackbarError} />
      )}
    </motion.form>
  );
};

export default SignupFormUserInfo;
