import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckBoxProps } from "../../util/interfaces/common.interface";
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