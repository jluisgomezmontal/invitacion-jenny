/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import { traductor } from "./utils";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
export const Unance = ({ language }) => {
  return (
    <Box className="completo">
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        className="abhaya-libre-bold"
        sx={{ py: 8 }}
      >
        {traductor.unance[language]}
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "left",
          alignItems: "center",
          py: 4,
          width: "70%",
          mx: "auto",
        }}
      >
        <CalendarTodayOutlinedIcon
          sx={{ fontSize: "65px", fontWeight: "lighter" }}
          color="secondary"
        />
        <Typography
          variant="h6"
          align="center"
          color="secondary"
          className="abhaya-libre-bold"
        >
          {traductor.fecha[language]}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "left",
          alignItems: "center",
          py: 4,
          width: "70%",
          mx: "auto",
        }}
      >
        <AccessTimeOutlinedIcon
          sx={{ fontSize: "65px", fontWeight: "lighter" }}
          color="secondary"
        />
        <Typography
          variant="h6"
          align="center"
          color="secondary"
          className="abhaya-libre-bold"
        >
          {traductor.hora[language]}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "left",
          alignItems: "center",
          py: 4,
          width: "70%",
          mx: "auto",
        }}
      >
        <ChurchOutlinedIcon
          sx={{ fontSize: "65px", fontWeight: "lighter" }}
          color="secondary"
        />
        <Typography
          variant="h6"
          align="left"
          color="secondary"
          className="abhaya-libre-bold"
        >
          {traductor.lugar[language]}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "left",
          alignItems: "center",
          py: 4,
          width: "70%",
          mx: "auto",
        }}
      >
        <LocationOnOutlinedIcon
          sx={{ fontSize: "65px", fontWeight: "lighter" }}
          color="secondary"
        />
        <Typography
          variant="h6"
          align="left"
          color="secondary"
          className="abhaya-libre-bold"
        >
          {traductor.recepcionLugar[language]}
        </Typography>
      </Stack>
      {/* <Box
        sx={{
          position: "absolute",
          height: "400px",
          width: "100%",
          overflow: "hidden",
          top: "1500px",
          border: "5px solid red",
        }}
      >
        <Box
          sx={{ position: "relative", border: "5px solid blue" }}
          className="watermark-container"
        ></Box>
      </Box> */}

      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
          mb: 4,
        }}
      >
        <Button
          variant="contained"
          endIcon={<LocationOnOutlinedIcon color="secondary" />}
          onClick={() => {
            window.open("https://maps.app.goo.gl/Uy7942z6eMPb7d5o6", "_blank");
          }}
        >
          {traductor.abrirMapaIglesia[language]}
        </Button>
        <Button
          variant="contained"
          endIcon={<LocationOnOutlinedIcon color="secondary" />}
          onClick={() => {
            window.open("https://maps.app.goo.gl/TU_ENLACE_COMISARIA", "_blank");
          }}
        >
          {traductor.abrirMapaRecepcion[language]}
        </Button>
      </Stack>
    </Box>
  );
};
