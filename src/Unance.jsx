/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import { traductor } from "./utils";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import { motion } from "framer-motion";
export const Unance = ({ language }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box className="completo" sx={{ pb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h4"
          align="center"
          color="secondary"
          className="abhaya-libre-bold"
          sx={{ py: 8 }}
        >
          {traductor.unance[language]}
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
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
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CalendarTodayOutlinedIcon
                sx={{ fontSize: "65px", fontWeight: "lighter" }}
                color="secondary"
              />
            </motion.div>
            <Typography
              variant="h6"
              align="center"
              color="secondary"
              className="abhaya-libre-bold"
            >
              {traductor.fecha[language]}
            </Typography>
          </Stack>
        </motion.div>

        <motion.div variants={itemVariants}>
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
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AccessTimeOutlinedIcon
                sx={{ fontSize: "65px", fontWeight: "lighter" }}
                color="secondary"
              />
            </motion.div>
            <Typography
              variant="h6"
              align="center"
              color="secondary"
              className="abhaya-libre-bold"
            >
              {traductor.hora[language]}
            </Typography>
          </Stack>
        </motion.div>
        <motion.div variants={itemVariants}>
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
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ChurchOutlinedIcon
                sx={{ fontSize: "65px", fontWeight: "lighter" }}
                color="secondary"
              />
            </motion.div>
            <Typography
              variant="h6"
              align="left"
              color="secondary"
              className="abhaya-libre-bold"
            >
              {traductor.lugar[language]}
            </Typography>
          </Stack>
        </motion.div>
        <motion.div variants={itemVariants}>
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
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <LocationOnOutlinedIcon
                sx={{ fontSize: "65px", fontWeight: "lighter" }}
                color="secondary"
              />
            </motion.div>
            <Typography
              variant="h6"
              align="left"
              color="secondary"
              className="abhaya-libre-bold"
            >
              {traductor.recepcionLugar[language]}
            </Typography>
          </Stack>
        </motion.div>
      </motion.div>
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              endIcon={<LocationOnOutlinedIcon color="secondary" />}
              onClick={() => {
                window.open("https://maps.app.goo.gl/Uy7942z6eMPb7d5o6", "_blank");
              }}
              sx={{
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(244, 132, 118, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(244, 132, 118, 0.4)',
                }
              }}
            >
              {traductor.abrirMapaIglesia[language]}
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              endIcon={<LocationOnOutlinedIcon color="secondary" />}
              onClick={() => {
                window.open("https://maps.app.goo.gl/b3VJR6jFTnbvmUTz9", "_blank");
              }}
              sx={{
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(244, 132, 118, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(244, 132, 118, 0.4)',
                }
              }}
            >
              {traductor.abrirMapaRecepcion[language]}
            </Button>
          </motion.div>
        </Stack>
      </motion.div>
    </Box>
  );
};
