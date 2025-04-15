import { Button } from "@mui/material";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import classes from "./FormUserInsurance.module.scss";

import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useIsOnDashboard } from "../../hooks/useIsOnDashboard";
import InputField from "../../ui/InputField/InputField";
import { fadeInLeftAnimation } from "../../ui/animations/animationConfig";

const FormUserInsurance = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isOnDashboard, handleIsOnDashboard } = useIsOnDashboard();

  useEffect(() => {
    handleIsOnDashboard(location.pathname);
  }, []);

  return (
    <motion.form
      className={classes[`form-user-insurance${!isOnDashboard ? "" : "-dashboard"}`]}
      {...fadeInLeftAnimation}
    >
      <div className="flex-left-col">
        <h1 className={`${!isOnDashboard ? "no-margin" : "md-margin-btm"}`}>
          Insurance
        </h1>
        {!isOnDashboard && (
          <p className="md-margin-btm">Add your insurance ⚕️</p>
        )}
      </div>
      <InputField
        label="Insurance provider"
        id="insuranceProvider"
        placeholder="e.g. Blue Cross Blue Shield"
      />
      <InputField
        className="sm-margin-top"
        label="Policy number"
        id="policyNumber"
        placeholder="e.g. 123456789"
      />
      <InputField
        className="sm-margin-top"
        label="Group number"
        id="groupNumber"
        placeholder="e.g. 987654321"
      />
      <InputField
        className="sm-margin-top"
        label="Member ID"
        id="memberID"
        placeholder="e.g. M123456"
      />
      <InputField
        className="sm-margin-top"
        label="Plan type"
        id="planType"
        placeholder="e.g. PPO"
      />
      <Button color="primary" variant="contained">
        {!isOnDashboard ? "Add Insurance" : "Save"}
      </Button>
      {!isOnDashboard && (
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => navigate("/dashboard")}
          endIcon={<ArrowForwardOutlinedIcon />}
        >
          Skip for now
        </Button>
      )}
    </motion.form>
  );
};

export default FormUserInsurance;
