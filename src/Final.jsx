/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { traductor } from "./utils";
import { motion } from "framer-motion";

export const Final = ({ language }) => {
  return (
    <Box className="final">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h6"
          align="center"
          color="secondary"
          className="merriweather-bold"
          sx={{
            pt: "15%",
            mx: 4,
            position: "relative",
            zIndex: 1,
            lineHeight: 1.8,
            textShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          {traductor.final[language]}
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Typography
          variant="h6"
          align="center"
          color="secondary"
          className="merriweather-bold"
          sx={{
            py: "5%",
            mx: 4,
            position: "relative",
            zIndex: 1,
            textShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          {traductor.despedida[language]}
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "light",
            textShadow: '0 4px 12px rgba(244, 132, 118, 0.3)'
          }}
          color="secondary"
          className="cedarville-cursive-regular"
        >
          Jenni & Omar
        </Typography>
      </motion.div>
    </Box>
  );
};
