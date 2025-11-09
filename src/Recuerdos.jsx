/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { traductor } from "./utils";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          align="center"
          color="secondary"
          className="abhaya-libre-bold"
          sx={{ my: 6 }}
        >
          {traductor.nustrosRecuerdos[language]}
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Typography
          variant="h2"
          sx={{ my: 5, fontWeight: "light" }}
          color="primary"
          className="cedarville-cursive-regular"
        >
          Hashtag
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Typography
          variant="body1"
          align="center"
          color="secondary"
          className="merriweather-bold"
          sx={{ my: 10, mx: 4, position: "relative", zIndex: 1, lineHeight: 1.8 }}
          dangerouslySetInnerHTML={{ __html: traductor.etiquetanos[language] }}
        ></Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Typography
          variant="h5"
          align="center"
          color="secondary"
          className="merriweather-bold"
          sx={{
            my: 3,
            mx: 4,
            position: "relative",
            zIndex: 1,
            textShadow: '0 2px 8px rgba(244, 132, 118, 0.3)'
          }}
        >
          #Jenni&Omar
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            my: 10,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              hover: { type: "spring", stiffness: 300 }
            }}
          >
            <InstagramIcon sx={{ fontSize: "80px", cursor: "pointer", filter: 'drop-shadow(0 4px 8px rgba(244, 132, 118, 0.3))' }} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 },
              hover: { type: "spring", stiffness: 300 }
            }}
          >
            <FacebookIcon sx={{ fontSize: "80px", cursor: "pointer", filter: 'drop-shadow(0 4px 8px rgba(244, 132, 118, 0.3))' }} />
          </motion.div>
        </Stack>
      </motion.div>
    </Box>
  );
};
