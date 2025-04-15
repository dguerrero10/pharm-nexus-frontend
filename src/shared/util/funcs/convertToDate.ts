export const convertToDate = (dateString: string) => {
  const [day, month, year] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toISOString().split("T")[0];
};

export const convertToDateMMDDYYYY = (dateString: string) => {
  const [year, month, day] = dateString.split("T")[0].split("-");
  return `${month}/${day}/${year}`;
}