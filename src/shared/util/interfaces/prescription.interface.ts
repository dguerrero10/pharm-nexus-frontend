import { RefillStatus } from "../enums/refill-status-enum";

export interface Prescription {
  prescriptionId: number;
  dosageInstructions: string;
  issueDate: string;
  expirationDate: number;
  refillCount: number;
  remainingRefills: number;
  dosage: string;
  unit: string;
  quantity: number;
  earliestRefillDate: string | null | undefined;
  refillStatus: RefillStatus;
  doctorFirstName: string;
  doctorLastName: number;
  doctorPhoneNumber: number;
  medicationName: string;
  medicationDescription: string;
  pharmacyName: string;
  pharmacyAddress: string;
  pharmacyPhoneNumber: string;
  pharmacyCity: string;
  pharmacyZipCode: string;
}

export interface PrescriptionProps {
  prescription: Prescription;
}

export interface PrescriptionModalProps {
  prescription: Prescription;
  isModalOpen: boolean;
  closeModalFn: (type: any) => void;
}
