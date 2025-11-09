/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { traductor } from "./utils";
import { motion } from "framer-motion";

export const Historia = ({ language }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
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
          {traductor.nuestraHistoria[language]}
        </Typography>
      </motion.div>
      {traductor.nuestraHistoriaTexto.map((texto, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            variant="body1"
            align="center"
            color="secondary"
            className="merriweather-bold"
            sx={{
              pb: 6,
              mx: 4,
              position: "relative",
              zIndex: 1,
              lineHeight: 1.8,
              textShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            {texto[language]}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
};
