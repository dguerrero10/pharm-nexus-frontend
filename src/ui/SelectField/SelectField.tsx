import { forwardRef } from "react";
import { SelectFieldProps } from "../../util/interfaces/common-types";

import classes from "./SelectField.module.scss";

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, id, error, options, className, ...props }, ref) => {
    return (
      <div className={`${classes["select-wrapper"]} ${className}`}>
        <label htmlFor={id} className={classes["select-label"]}>
          {label}
        </label>
        <select
          ref={ref}
          id={id}
          className={`${classes["select"]} ${error ? classes["select-error"] : ""}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={classes["select-error-msg"]}>{error ? error : ""}</span>
      </div>
    );
  }
);

export default SelectField;
