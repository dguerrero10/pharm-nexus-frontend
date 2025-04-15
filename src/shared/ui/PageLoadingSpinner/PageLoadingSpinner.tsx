import { Backdrop, CircularProgress } from "@mui/material";

const PageLoadingSpinner = () => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={true}
    >
      <CircularProgress sx={{color: "#fff"}} />
    </Backdrop>
  );
};

export default PageLoadingSpinner;
