/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { traductor } from "./utils";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
export const Recuerdos = ({ language }) => {
  return (
    <Box sx={{ position: "relative" }} className="completo">
      <Box
        sx={{
          position: "absolute",
          height: "400px",
          width: "100%",
          overflow: "hidden",
          top: "500px",
        }}
      >
        <Box
          sx={{ position: "relative" }}
          className="watermark-container"
        ></Box>
      </Box>
      {/* <Box
        sx={{
          position: "absolute",
          height: "450px",
          width: "100%",
          overflow: "hidden",
          top: "500px",
        }}
      >
        <Box
          sx={{ position: "relative" }}
          className="watermark-container2"
        ></Box>
      </Box> */}
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        className="abhaya-libre-bold"
        sx={{ my: 6 }}
      >
        {traductor.nustrosRecuerdos[language]}
      </Typography>
      <Typography
        variant="h2"
        sx={{ my: 5, fontWeight: "light" }}
        color="primary"
        className="cedarville-cursive-regular"
      >
        Hashtag
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="secondary"
        className="merriweather-bold"
        sx={{ my: 10, mx: 4, position: "relative", zIndex: 1 }}
        dangerouslySetInnerHTML={{ __html: traductor.etiquetanos[language] }}
      ></Typography>
      <Typography
        variant="h5"
        align="center"
        color="secondary"
        className="merriweather-bold"
        sx={{ my: 3, mx: 4, position: "relative", zIndex: 1 }}
      >
        #Jenni&Omar
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          my: 10,
        }}
      >
        <InstagramIcon sx={{ fontSize: "80px" }} />
        <FacebookIcon sx={{ fontSize: "80px" }} />
      </Stack>
    </Box>
  );
};
