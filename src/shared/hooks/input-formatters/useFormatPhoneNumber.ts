import { useState } from "react";

export const useFormatPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberFormat = (value: string) => {
    value = value.replace(/[^0-9-]/g, "");

    if (value.length > 3 && value[3] !== "-") {
      value = value.slice(0, 3) + "-" + value.slice(3);
    }
    if (value.length > 7 && value[7] !== "-") {
      value = value.slice(0, 7) + "-" + value.slice(7);
    }

    if (value.length > 12) {
      value = value.slice(0, 12);
    }

    setPhoneNumber(value);
  };

  return { phoneNumber, handlePhoneNumberFormat };
};
