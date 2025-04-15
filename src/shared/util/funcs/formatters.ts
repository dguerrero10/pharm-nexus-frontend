export const formatPhone = (phoneNumber: string) => {
  const areaCode = `(${phoneNumber.substring(0, 3)}) `;
  const secondPart = `- ${phoneNumber.substring(3, 6)} - `;
  const lastPart =  phoneNumber.substring(6, phoneNumber.length);

  return areaCode + secondPart + lastPart;
};
