import { useState } from "react";

export const useFormatZipCode = () => {
  const [zipCode, setZipCode] = useState("");

  const handleZipCodeFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    value = value.replace(/[^0-9-]/g, "");

    if (value.length > 5 && !value.includes("-")) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }

    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    setZipCode(value);
  };

  return { zipCode, handleZipCodeFormat };
};
