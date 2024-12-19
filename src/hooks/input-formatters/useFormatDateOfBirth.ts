import { useState } from "react";

export const useFormatDateOfBirth = () => {
  const [dob, setDOB] = useState("");

  const handleDOBFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    value = value.replace(/[^0-9-]/g, "");

    if (value.length > 2 && value[2] !== "-") {
      value = value.slice(0, 2) + "-" + value.slice(2);
    }
    if (value.length > 5 && value[5] !== "-") {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }

    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    
    setDOB(value);
  };

  return { dob, handleDOBFormat };
};
