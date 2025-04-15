import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#42a5f5",
    },
    secondary: {
      main: "#000",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none", 
          "&:hover": {
            boxShadow: "none", 
          },
          textTransform: "capitalize",
          width: "100%",
          fontSize: "13px",
          fontWeight: "600",
          marginTop: "1.5rem",
        },
        contained: {
          color: "#fff",
        },
        outlined: {
          color: "#333",
          "&:hover": {
            backgroundColor: "#333",
            color: "#fff" 
          },
        },
        text: {
          color: "#42a5f5",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#333",
        },
      },
    },
  },
});

export default theme;
