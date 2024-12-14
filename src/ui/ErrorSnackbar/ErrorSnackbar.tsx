import { useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface ErrorSnackbarProps {
  message: string;
}

const ErrorSnackbar: React.FC<ErrorSnackbarProps> = ({ message }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert
          onClose={handleClose}
          variant="filled"
          severity="error"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ErrorSnackbar;
