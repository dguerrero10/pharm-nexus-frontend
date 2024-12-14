import { forwardRef } from "react";
import { InputFieldProps } from "../../common/types/common-types";

import classes from "./InputField.module.scss";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, id, placeholder, type, error, ...props }, ref) => {
    return (
      <div className={`${classes["input-wrapper"]} ${className}`}>
        <label htmlFor={id} className={classes["input-label"]}>
          {label}
        </label>
        <input
          ref={ref}
          type={type ?? "text"}
          id={id}
          placeholder={placeholder ?? ""}
          className={`${classes['input']} ${error ? classes['input-error'] : ''}`}
          {...props}
        />
        <span className={classes["input-error-msg"]}>{error ? error : ''}</span>
      </div>
    );
  }
);

export default InputField;
