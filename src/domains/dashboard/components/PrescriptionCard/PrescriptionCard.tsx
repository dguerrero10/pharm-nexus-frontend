import { Button } from "@mui/material";
import classes from "./PrescriptionCard.module.scss";
import PrescriptionDrugImg from "../../../../assets/images/drug.jpg";
import React, { useEffect, useState } from "react";
import { useIsMobile } from "../../../../shared/hooks/useIsOnMobile";
import { PrescriptionProps } from "../../../../shared/util/interfaces/prescription.interface";
import PrescriptionModal from "../PrescriptionModal/PrescriptionModal";
import { getRefillStatusColor } from "../../../../shared/util/enums/refill-status-enum";

const PrescriptionCard: React.FC<PrescriptionProps> = ({ prescription }) => {
  const [showPrescriptionInfo, setshowPrescriptionInfo] = useState(false);

  const { isMobile } = useIsMobile();

  useEffect(() => {}, [isMobile]);

  const onRequestRefill = async () => {
    try {

    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <div className={classes["prescription-card"]}>
      <div className={classes["prescription-card__content-wrapper"]}>
        <h4 className="text-align-center">Rx: {prescription.medicationName}</h4>
        <img
          className={classes["prescription-card__img"]}
          src={PrescriptionDrugImg}
          alt="Image of pills"
        />
        <div className={classes["prescription-card__status"]}>
          <p>
            Refill Status:{" "}
            <span
              style={{
                color: getRefillStatusColor(prescription.refillStatus),
                textTransform: "uppercase",
              }}
            >
              ({prescription.refillStatus})
            </span>
          </p>
        </div>
        <div className={classes["prescription-card__btn-wrapper"]}>
          <Button
            onClick={() => setshowPrescriptionInfo(true)}
            className="no-margin"
            color="primary"
            variant="text"
          >
            View Prescription Info
          </Button>
          <Button className="sm-margin-top" color="primary" variant="contained">
            Request Refill
          </Button>
          <Button
            className="sm-margin-top"
            color="secondary"
            variant="outlined"
          >
            View Full Refill Status
          </Button>
        </div>
      </div>
      <PrescriptionModal
        prescription={prescription}
        closeModalFn={setshowPrescriptionInfo}
        isModalOpen={showPrescriptionInfo}
      />
    </div>
  );
};

export default PrescriptionCard;
