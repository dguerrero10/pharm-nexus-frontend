import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckBoxProps } from "../../common/types/common-types";
import { checkboxStyles } from "./smallCheckboxStyles";

const SmallCheckbox: React.FC<CheckBoxProps> = ({ label }) => {
  return (
    <FormControlLabel
      control={<Checkbox size="small" />}
      label={<span style={checkboxStyles.label}>{label}</span>} 
    />
  );
};

export default SmallCheckbox;