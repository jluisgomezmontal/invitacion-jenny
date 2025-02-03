import { Box, Button, Stack, Typography } from "@mui/material";
import { traductor } from "./utils";
import CallIcon from "@mui/icons-material/Call";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/* eslint-disable react/prop-types */
export const Hospedaje = ({ language }) => {
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
        variant="h2"
        sx={{ my: 5, fontWeight: "light" }}
        color="secondary"
        className="cedarville-cursive-regular"
      >
        {traductor.hospedaje[language]}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="secondary"
        className="merriweather-bold"
        sx={{ my: 10, mx: 4, position: "relative", zIndex: 1 }}
      >
        {traductor.estancia[language]}
      </Typography>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {traductor.hoteles.map((hotel, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundColor: "#FEC5B4",
                mx: 5,
                borderRadius: 20,
                mb: 8,
              }}
            >
              <Typography
                variant="h2"
                sx={{ pt: 6 }}
                color="secondary"
                className="cedarville-cursive-regular"
              >
                {hotel.nombre}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="secondary"
                className="merriweather-bold"
                sx={{ my: 3, mx: 4, position: "relative", zIndex: 1 }}
              >
                {hotel.direccion[language]}
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pb: 8,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    window.open(hotel.mapa, "_blank");
                  }}
                  startIcon={<LocationOnOutlinedIcon />}
                >
                  {hotel.ubicacion[language]}
                </Button>
                <Button
                  variant="contained"
                  href={`tel:${hotel.numero}`}
                  endIcon={<CallIcon />}
                >
                  {hotel.llamar[language]}
                </Button>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
