import { useMutation } from "@tanstack/react-query";
import classes from "./FormUserInfo.module.scss";
import { motion } from "framer-motion";
import { Button, CircularProgress } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormInfoValues } from "../../util/types/auth-form.type";
import { signUpInfoSchema } from "../../util/types/schemas.type";
import { useEffect, useState } from "react";
import { AutoCompleteOption } from "../../util/interfaces/common.interface";
import { STATE_CODES } from "../../util/constants/state-codes";
import { useFormatZipCode } from "../../hooks/input-formatters/userFormatZipCode";
import { useFormatDateOfBirth } from "../../hooks/input-formatters/useFormatDateOfBirth";
import { useFormatPhoneNumber } from "../../hooks/input-formatters/useFormatPhoneNumber";
import { authClient } from "../../util/clients/apiClient";
import { convertToDate } from "../../util/funcs/convertToDate";
import { handleApiError } from "../../util/funcs/api/handleApiError";
import { useLocation, useNavigate } from "react-router-dom";
import { UserInformation } from "../../util/interfaces/user-information.interface";
import { queryClient } from "../../../App";
import { findStateIdByValue, findStateValuebyId } from "../../util/funcs/searchers";
import { useIsOnDashboard } from "../../hooks/useIsOnDashboard";
import InputField from "../../ui/InputField/InputField";
import { fadeInLeftAnimation } from "../../ui/animations/animationConfig";
import ErrorSnackbar from "../../ui/ErrorSnackbar/ErrorSnackbar";

const stateCodes = [...STATE_CODES];

const FormUserInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let { zipCode, handleZipCodeFormat } = useFormatZipCode();
  let { dob, handleDOBFormat, handleISOtoReadableFormat } = useFormatDateOfBirth();
  let { phoneNumber, handlePhoneNumberFormat } = useFormatPhoneNumber();
  const { isOnDashboard, handleIsOnDashboard } = useIsOnDashboard();

  const [stateCode, setStateCode] = useState("");
  const [filteredStates, setFilteredStates] = useState(stateCodes);
  const [snackbarError, setSnackbarError] = useState<string>();

  const handleStateCodeChange = (value: string) => {
    const filteredStates = STATE_CODES.filter((data: AutoCompleteOption) => {
      return data.label.includes(value) || data.searchItem.includes(value);
    });
    setFilteredStates(filteredStates);
    setStateCode(value);
    setValue("stateId", value);
    clearErrors("stateId");
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("zipCode", e.target.value);
    handleZipCodeFormat(e.target.value);
    clearErrors("zipCode");
  };

  const handleDOBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("dateOfBirth", e.target.value);
    handleDOBFormat(e.target.value);
    clearErrors("dateOfBirth");
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("phoneNumber", e.target.value);
    handlePhoneNumberFormat(e.target.value);
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

  useEffect(() => {
    handleIsOnDashboard(location.pathname);
  
    const data: UserInformation | undefined = queryClient.getQueryData([
      "user-information",
    ]);

    setValue("firstName", data?.firstName ?? "");
    setValue("lastName", data?.lastName ?? "");
    setValue("streetAddress", data?.streetAddress ?? "");
    setValue("city", data?.city ?? "");

    const stateCode = findStateValuebyId(stateCodes, data?.stateId ?? 0);
    setStateCode(stateCode!);
    setValue("stateId", stateCode!);

    zipCode = data?.zipCode ?? "";
    handleZipCodeFormat(zipCode);
    setValue("zipCode", zipCode);

    phoneNumber = data?.phoneNumber ?? "";
    handlePhoneNumberFormat(phoneNumber);
    setValue("phoneNumber", phoneNumber);

    dob = data?.dateOfBirth ?? "";
    handleISOtoReadableFormat(dob);
    setValue("dateOfBirth", dob);
  }, []);

  const onSubmit: SubmitHandler<SignUpFormInfoValues> = async (formData) => {
    try {
      formData["dateOfBirth"] = convertToDate(formData["dateOfBirth"]);
      formData["phoneNumber"] = formData["phoneNumber"].replaceAll("-", "");

      const stateIdValue = findStateIdByValue(STATE_CODES, formData["stateId"]);

      if (!stateIdValue) {
        throw new Error();
      }

      formData["stateId"] = stateIdValue;

      const result = await mutation.mutateAsync(formData);

      if (result.status === 201) {
        queryClient.invalidateQueries({ queryKey: ["user-information"] });
        if (!isOnDashboard) {
          navigate("/auth/sign-up/add-insurance");
        }
        return;
      } else {
        throw new Error();
      }
    } catch (error) {
      const errorMessage = handleApiError(error);
      setSnackbarError(errorMessage);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={classes[`form-user-info${!isOnDashboard ? "" : "-dashboard"}`]}
      {...fadeInLeftAnimation}
    >
      <div className="flex-left-col">
        <h1 className={`${!isOnDashboard ? "no-margin" : "md-margin-btm"}`}>
          Personal Info
        </h1>
        {!isOnDashboard && (
          <p className="md-margin-btm">Add your personal information 📝</p>
        )}
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
          id="stateId"
          placeholder="e.g. CA"
          filterFn={handleStateCodeChange}
          value={stateCode}
          autoCompleteOptions={filteredStates}
          error={errors.stateId && errors.stateId.message}
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
      {mutation.isPending ? (
        <CircularProgress />
      ) : (
        <Button type="submit" color="primary" variant="contained">
          {!isOnDashboard ? "Add Personal Info" : "Save"}
        </Button>
      )}

      {mutation.isError ||
        (snackbarError && <ErrorSnackbar message={snackbarError} />)}
    </motion.form>
  );
};

export default FormUserInfo;
