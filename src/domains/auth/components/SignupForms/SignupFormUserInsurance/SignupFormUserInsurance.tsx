import { Button } from "@mui/material";

import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import classes from "./SignupFormUserInsurance.module.scss";
import InputField from "../../../../../ui/InputField/InputField";

import { motion } from "framer-motion";
import { fadeInLeftAnimation } from "../../../../../ui/animations/animationConfig";
import { useNavigate } from "react-router-dom";

const SignUpFormUserInsurance = () => {
  const navigate = useNavigate();

  return (
    <motion.form
      className={classes["sign-up-form-add-insurance"]}
      {...fadeInLeftAnimation}
    >
      <div className="flex-left-col">
        <h1 className="no-margin">Insurance</h1>
        <p className="md-margin-bottom">
          Add your insurance ⚕️
        </p>
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
        Add Insurance
      </Button>
      <Button
        color="secondary"
        variant="outlined"
        endIcon={<ArrowForwardOutlinedIcon />}
      >
        Skip for now
      </Button>
      <Button
        startIcon={<UndoOutlinedIcon />}
        color="primary"
        variant="text"
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
    </motion.form>
  );
};

export default SignUpFormUserInsurance;
