/* eslint-disable react/prop-types */
import { Box, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { traductor } from "./utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";

export const Contador = ({ language }) => {
  const targetDate = new Date("November 28, 2025 17:00:00").getTime();
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 365,
    hours: 24,
    minutes: 60,
    seconds: 60,
  });
  console.log(timeLeft);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      id: 1,
      tiempo: timeLeft.days,
      es: "DIAS",
      en: "DAYS",
    },
    {
      id: 2,
      tiempo: timeLeft.hours,
      es: "HORAS",
      en: "HOURS",
    },
    {
      id: 3,
      tiempo: timeLeft.minutes,
      es: "MINUTOS",
      en: "MINUTES",
    },
    {
      id: 4,
      tiempo: timeLeft.seconds,
      es: "SEGUNDOS",
      en: "SECONDS",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        spacing={1}
        container
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mx: 4,
        }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map((card, index) => (
          <Grid size={3} key={index} sx={{ mt: 2, mx: 0 }} component={motion.div} variants={cardVariants}>
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Box
                sx={{
                  border: "2px solid white",
                  borderColor: "#FFE3E0",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 227, 224, 0.65)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(244, 132, 118, 0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 12px 40px rgba(244, 132, 118, 0.25)",
                    backgroundColor: "rgba(255, 227, 224, 0.85)",
                  }
                }}
              >
              <CardContent sx={{ textAlign: "center", py: 6, px: 0 }}>
                <Typography
                  variant="h3"
                  color="secondary"
                  className="abhaya-libre-regular numeros"
                >
                  <NumberFlow willChange={false} value={card.tiempo} />
                </Typography>
                <hr />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                  className="abhaya-libre-regular restante"
                  color="secondary"
                >
                  {card[language]}
                </Typography>
              </CardContent>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Typography
          variant="h2"
          className="cedarville-cursive-regular nombres jenny"
          color="secondary"
        >
          Jennifer Vazquez
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Typography
          color="secondary"
          variant="h3"
          className="cedarville-cursive-regular nombres"
        >
          &
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Typography
          color="secondary"
          variant="h2"
          className="cedarville-cursive-regular nombres"
        >
          Omar Alexander
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold" }}
          className="abhaya-libre-regular casamos"
          color="secondary"
          align="center"
        >
          {traductor.hero[language]}
        </Typography>
      </motion.div>
    </Box>
  );
};
