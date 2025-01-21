/* eslint-disable react/prop-types */
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { traductor } from "./utils";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
export const Itinerario = ({ language }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          height: "400px",
          width: "100%",
          overflow: "hidden",
          top: "0px",
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
          top: "400px",
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
        sx={{ my: 5 }}
      >
        {traductor.itinerario[language]}
      </Typography>
      <Grid2
        container
        rowSpacing={5}
        columnSpacing={5}
        sx={{ width: "80%", mx: "auto" }}
      >
        <Grid2 size={6} sx={{ my: 2 }}>
          <Stack direction="row" spacing={1}>
            <Typography
              variant="body2"
              align="left"
              color="secondary"
              className="merriweather-bold"
              sx={{ zIndex: 1 }}
            >
              {traductor.religiosa[language]}
            </Typography>
            <ChurchOutlinedIcon sx={{ fontSize: "60px" }} />
          </Stack>
        </Grid2>
        <Grid2 size={6}></Grid2>
        <Grid2 size={6} sx={{ my: 2 }}></Grid2>
        <Grid2 size={6} sx={{ my: 2 }}>
          <Stack direction="row" spacing={1}>
            <ReceiptLongOutlinedIcon sx={{ fontSize: "60px" }} />
            <Typography
              variant="body2"
              align="left"
              color="secondary"
              className="merriweather-bold"
              sx={{ zIndex: 1 }}
            >
              {traductor.civil[language]}
            </Typography>
          </Stack>
        </Grid2>
        <Grid2 size={6} sx={{ my: 2 }}>
          <Stack direction="row" spacing={1}>
            <Typography
              variant="body2"
              align="left"
              color="secondary"
              className="merriweather-bold"
              sx={{ zIndex: 1 }}
            >
              {traductor.recepcion[language]}
            </Typography>
            <LocalBarOutlinedIcon sx={{ fontSize: "60px" }} />
          </Stack>
        </Grid2>
        <Grid2 size={6}></Grid2>
        <Grid2 size={6}></Grid2>
        <Grid2 size={6} sx={{ my: 2 }}>
          <Stack direction="row" spacing={1}>
            <CelebrationOutlinedIcon sx={{ fontSize: "60px" }} />
            <Typography
              variant="body2"
              align="left"
              color="secondary"
              className="merriweather-bold"
              sx={{ zIndex: 1 }}
            >
              {traductor.baile[language]}
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
      <Box
        sx={{
          height: "20px",
          width: "20px",
          backgroundColor: "#F48476",
          borderRadius: 50,
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Box>
      <Box
        sx={{
          height: "20px",
          width: "20px",
          backgroundColor: "#F48476",
          borderRadius: 50,
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Box>
      <Box
        sx={{
          height: "20px",
          width: "20px",
          backgroundColor: "#F48476",
          borderRadius: 50,
          position: "absolute",
          top: "68%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Box>
      <Box
        sx={{
          height: "20px",
          width: "20px",
          backgroundColor: "#F48476",
          borderRadius: 50,
          position: "absolute",
          top: "92%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Box>
      <Box
        sx={{
          width: "5px",
          backgroundColor: "#FEC5B4",
          borderRadius: 50,
          position: "absolute",
          height: "19.5%",
          top: "32.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Box>
      <Box
        sx={{
          width: "5px",
          backgroundColor: "#FEC5B4",
          borderRadius: 50,
          position: "absolute",
          height: "17%",
          top: "56.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Box>
      <Box
        sx={{
          width: "5px",
          backgroundColor: "#FEC5B4",
          borderRadius: 50,
          position: "absolute",
          height: "18%",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Box>
    </Box>
  );
};
