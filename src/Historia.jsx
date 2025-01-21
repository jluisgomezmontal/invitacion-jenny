/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { traductor } from "./utils";

export const Historia = ({ language }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <div className="watermark-container"></div>
      <div className="watermark-container2"></div>
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        className="abhaya-libre-bold"
        sx={{ mt: 5 }}
      >
        {traductor.nuestraHistoria[language]}
      </Typography>
      {traductor.nuestraHistoriaTexto.map((texto, index) => (
        <Typography
          key={index}
          variant="body1"
          align="center"
          color="secondary"
          className="merriweather-bold"
          sx={{ my: 5, mx: 4, position: "relative", zIndex: 1 }}
        >
          {texto[language]}
        </Typography>
      ))}
    </Box>
  );
};
