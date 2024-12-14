import { createTheme } from "@mui/material";

export const grayButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#6c6b6b",
          borderRadius: ".6em",
          fontWeight: "600",
          padding: ".25rem .75rem",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#f1f1f1",
          },
        },
      },
    },
  },
});
