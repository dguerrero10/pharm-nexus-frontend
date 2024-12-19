import { forwardRef, useState } from "react";
import {
  AutoCompleteOption,
  InputFieldProps,
} from "../../util/interfaces/common-types";

import classes from "./InputField.module.scss";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      label,
      id,
      placeholder,
      autoCompleteOptions = [],
      type,
      error,
      value,
      filterFn,
      ...props
    },
    ref
  ) => {
    const [_, setIsFocused] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
      setShowDropdown(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setTimeout(() => {
        setShowDropdown(false);
      }, 200);
    };

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
          onChange={filterFn ? (e) => filterFn(e.target.value) : undefined}
          value={value}
          onFocus={filterFn ? handleFocus : undefined}
          onBlur={filterFn ? handleBlur : handleBlur}
          className={`${classes["input"]} ${
            error ? classes["input-error"] : ""
          }`}
          {...props}
        />
        <span className={classes["input-error-msg"]}>{error ? error : ""}</span>
        {showDropdown &&
          autoCompleteOptions &&
          autoCompleteOptions.length >= 1 &&
          value && (
            <div className={classes["input-auto-complete"]}>
              {autoCompleteOptions.map((option: AutoCompleteOption) => (
                <option
                  key={option.value}
                  className={classes["input-auto-complete__option"]}
                  value={option.value}
                  onClick={() => filterFn(option.label)}
                >
                  {option.label}
                </option>
              ))}
            </div>
          )}
      </div>
    );
  }
);

export default InputField;
