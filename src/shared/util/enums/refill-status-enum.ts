export enum RefillStatus {
  AVAILABLE_NOW = "Available Now",
  PROCESSING = "Processing",
  NEEDS_DOCTOR_APPROVAL = "Needs Doctor Approval",
  NOT_ELIGIBLE = "Not Eligible",
}

export const getRefillStatusColor = (refillStatus: string): string => {
  if (!Object.values(RefillStatus).includes(refillStatus as RefillStatus)) {
    return "#333333";
  }

  switch (refillStatus) {
    case RefillStatus.AVAILABLE_NOW:
      return "#4caf50";
    case RefillStatus.PROCESSING:
      return "#f57c00";
    case RefillStatus.NEEDS_DOCTOR_APPROVAL:
      return "#ff1744";
    case RefillStatus.NOT_ELIGIBLE:
      return "#ff1744";
    default:
      return "#333333";
  }
};
