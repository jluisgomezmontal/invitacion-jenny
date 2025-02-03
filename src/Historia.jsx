/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { traductor } from "./utils";

export const Historia = ({ language }) => {
  return (
    <Box className="completo">
      <Box
        sx={{
          position: "absolute",
          height: "400px",
          width: "100%",
          overflow: "hidden",
          top: "950px",
        }}
      >
        <Box
          sx={{ position: "relative" }}
          className="watermark-container"
        ></Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          height: "450px",
          width: "100%",
          overflow: "hidden",
          top: "1400px",
        }}
      >
        <Box
          sx={{ position: "relative" }}
          className="watermark-container2"
        ></Box>
      </Box>
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        className="abhaya-libre-bold"
        sx={{ py: 8 }}
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
          sx={{ pb: 6, mx: 4, position: "relative", zIndex: 1 }}
        >
          {texto[language]}
        </Typography>
      ))}
    </Box>
  );
};
