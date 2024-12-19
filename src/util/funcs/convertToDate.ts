export const convertToDate = (dateString: string) => {
  const [day, month, year] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toISOString().split("T")[0];
};
