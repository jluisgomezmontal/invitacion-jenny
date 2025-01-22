/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { traductor } from "./utils";

export const Final = ({ language }) => {
  return (
    <Box className="final">
      <Typography
        variant="h6"
        align="center"
        color="secondary"
        className="merriweather-bold"
        sx={{ pt: 10, mx: 4, position: "relative", zIndex: 1 }}
      >
        {traductor.final[language]}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="secondary"
        className="merriweather-bold"
        sx={{ py: 5, mx: 4, position: "relative", zIndex: 1 }}
      >
        {traductor.despedida[language]}
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: "light" }}
        color="secondary"
        className="cedarville-cursive-regular"
      >
        Jenny & Omar
      </Typography>
    </Box>
  );
};
