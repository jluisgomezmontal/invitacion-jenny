/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import { traductor } from "./utils";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
export const Unance = ({ language }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        className="abhaya-libre-bold"
        sx={{ mt: 5 }}
      >
        {traductor.unance[language]}
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "left",
          alignItems: "center",
          mt: 6,
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
          mt: 3,
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
          my: 3,
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
          {traductor.lugar[language]}
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

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 6 }}
      >
        <Button
          variant="contained"
          endIcon={<LocationOnOutlinedIcon color="secondary" />}
          onClick={() => {
            window.open("https://maps.app.goo.gl/Uy7942z6eMPb7d5o6", "_blank");
          }}
        >
          {traductor.abrirMapa[language]}
        </Button>
      </Box>
    </Box>
  );
};
