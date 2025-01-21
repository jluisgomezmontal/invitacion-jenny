/* eslint-disable react/prop-types */
import { Box, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { traductor } from "./utils";

export const Contador = ({ language }) => {
  console.log(language);
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
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
  ];

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
      >
        {cards.map((card, index) => (
          <Grid size={4} key={index} sx={{ mt: 2, mx: 0 }}>
            <Box
              sx={{
                border: "2px solid white",
                borderColor: "#FFE3E0",
                borderRadius: "15px",
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 6, px: 0 }}>
                <Typography
                  variant="h2"
                  color="secondary"
                  className="abhaya-libre-regular"
                >
                  {card.tiempo}
                </Typography>
                <hr />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  className="abhaya-libre-regular"
                  color="secondary"
                >
                  {card[language]}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h2"
        sx={{ mt: 2 }}
        className="cedarville-cursive-regular"
        color="secondary"
      >
        Jennifer Vazquez
      </Typography>
      <Typography
        color="secondary"
        sx={{ m: 0 }}
        variant="h3"
        className="cedarville-cursive-regular"
      >
        &
      </Typography>
      <Typography
        color="secondary"
        variant="h2"
        className="cedarville-cursive-regular"
      >
        Omar Hernandez
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold" }}
        className="abhaya-libre-regular"
        color="secondary"
        align="center"
      >
        {traductor.hero[language]}
      </Typography>
    </Box>
  );
};
