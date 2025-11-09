import { Box, Button, Stack, Typography } from "@mui/material";
import { traductor } from "./utils";
import CallIcon from "@mui/icons-material/Call";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{ my: 5, fontWeight: "light" }}
          color="secondary"
          className="cedarville-cursive-regular"
        >
          {traductor.hospedaje[language]}
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Typography
          variant="body1"
          align="center"
          color="secondary"
          className="merriweather-bold"
          sx={{ my: 10, mx: 4, position: "relative", zIndex: 1, lineHeight: 1.8 }}
        >
          {traductor.estancia[language]}
        </Typography>
      </motion.div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {traductor.hoteles.map((hotel, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  backgroundColor: "#FEC5B4",
                  mx: 5,
                  borderRadius: 20,
                  mb: 8,
                  boxShadow: "0 10px 30px rgba(254, 197, 180, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 15px 40px rgba(254, 197, 180, 0.5)",
                    transform: "translateY(-5px)"
                  }
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
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        window.open(hotel.mapa, "_blank");
                      }}
                      startIcon={<LocationOnOutlinedIcon />}
                      sx={{
                        borderRadius: '25px',
                        boxShadow: '0 4px 15px rgba(244, 132, 118, 0.3)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(244, 132, 118, 0.4)',
                        }
                      }}
                    >
                      {hotel.ubicacion[language]}
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      href={`tel:${hotel.numero}`}
                      endIcon={<CallIcon />}
                      sx={{
                        borderRadius: '25px',
                        boxShadow: '0 4px 15px rgba(244, 132, 118, 0.3)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(244, 132, 118, 0.4)',
                        }
                      }}
                    >
                      {hotel.llamar[language]}
                    </Button>
                  </motion.div>
                </Stack>
              </Box>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
