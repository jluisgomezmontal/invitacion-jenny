import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFE3E0", // Color de fondo
    },
    text: {
      primary: "#F48476", // Color de texto principal
    },
    primary: {
      main: "#FEC5B4", // Azul (principal)
    },
    secondary: {
      main: "#000000", // Rojo
    },
    success: {
      main: "#4caf50", // Verde
    },
    warning: {
      main: "#ff9800", // Naranja
    },
    error: {
      main: "#f44336", // Rojo oscuro
    },
    info: {
      main: "#F06451",
    },
  },
});

export default theme;
