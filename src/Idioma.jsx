/* eslint-disable react/prop-types */
import { Box, Stack, styled, Switch, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";

export const Idioma = ({ setLanguage, language }) => {
  const handleToggle = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };
  const ElegantSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 32,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 26,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(28px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(30px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#F48476",
          border: "none",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
      width: 28,
      height: 28,
      borderRadius: 14,
      background: "linear-gradient(135deg, #fff 0%, #FFE3E0 100%)",
      transition: theme.transitions.create(["width", "transform"], {
        duration: 250,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 32 / 2,
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      border: "1.5px solid rgba(255, 255, 255, 0.5)",
      boxSizing: "border-box",
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        flexDirection: "column",
        height: "80vh",
        zIndex: 1,
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              alignItems: "center",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1.5px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "24px",
              padding: "10px 16px",
              mr: 2,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(244, 132, 118, 0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)",
                border: "1.5px solid rgba(255, 255, 255, 0.6)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(244, 132, 118, 0.3)",
              }
            }}
          >
            <LanguageIcon 
              sx={{ 
                fontSize: 24,
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                transition: "transform 0.3s ease",
              }} 
            />
            <Typography 
              sx={{ 
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.5px",
                opacity: language === "es" ? 1 : 0.5,
                transition: "all 0.3s ease",
                textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                minWidth: "22px",
                textAlign: "center"
              }}
            >
              ES
            </Typography>
            <ElegantSwitch
              inputProps={{ "aria-label": "language toggle" }}
              onChange={handleToggle}
              checked={language === "en"}
            />
            <Typography 
              sx={{ 
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.5px",
                opacity: language === "en" ? 1 : 0.5,
                transition: "all 0.3s ease",
                textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                minWidth: "22px",
                textAlign: "center"
              }}
            >
              EN
            </Typography>
          </Stack>
        </motion.div>
      </motion.div>
    </Box>
  );
};
