import { Button, Dialog, styled } from "@mui/material";
import { PrescriptionModalProps } from "../../../../shared/util/interfaces/prescription.interface";
import classes from "./PrescriptionModal.module.scss";
import RowWithDivider from "../../../../shared/ui/RowWithDivider/RowWithDivider";
import {
  convertToDate,
  convertToDateMMDDYYYY,
} from "../../../../shared/util/funcs/convertToDate";
import { formatPhone } from "../../../../shared/util/funcs/formatters";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const PrescriptionModal: React.FC<PrescriptionModalProps> = ({
  prescription,
  isModalOpen,
  closeModalFn,
}) => {
  return (
    <BootstrapDialog
      aria-labelledby="customized-dialog-title"
      open={isModalOpen}
      onClose={() => closeModalFn(false)}
    >
      <div className={classes["prescription-modal"]}>
        <h4 className="only-margin-btm">Prescription Info</h4>
        <RowWithDivider
          title="Medication Name"
          value={prescription.medicationName}
        />
        <RowWithDivider title="Dosage" value={prescription.dosage} />
        <RowWithDivider
          title="Issued"
          value={convertToDateMMDDYYYY(prescription.issueDate)}
        />
        <RowWithDivider
          title="Refills remaining"
          value={prescription.remainingRefills.toString()}
        />
        <RowWithDivider title="Pharmacy" value={prescription.pharmacyName} />
        <RowWithDivider
          title="Pharmacy Address"
          value={prescription.pharmacyAddress}
        />
        <RowWithDivider
          title="Pharmacy Phone #"
          value={formatPhone(prescription.pharmacyPhoneNumber.toString())}
        />
        <RowWithDivider
          title="Prescribed by"
          value={`${prescription.doctorFirstName} ${prescription.doctorLastName}`}
        />
        <RowWithDivider
          title="Doctor Phone #"
          value={formatPhone(prescription.doctorPhoneNumber.toString())}
        />
        <RowWithDivider
          title="Refill by"
          value={convertToDateMMDDYYYY(prescription.expirationDate.toString())}
        />
        <Button variant="contained" onClick={() => closeModalFn(false)}>
          Close
        </Button>
      </div>
    </BootstrapDialog>
  );
};

export default PrescriptionModal;
