/* eslint-disable react/prop-types */
import { Box, Stack, styled, Switch, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export const Idioma = ({ setLanguage, language }) => {
  const handleToggle = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#1890ff",
          ...theme.applyStyles("dark", {
            backgroundColor: "#177ddc",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: "rgba(0,0,0,.25)",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "rgba(255,255,255,.35)",
      }),
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        flexDirection: "column",
        height: "90dvh",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
          border: "1px solid white",
          borderRadius: "8px",
          padding: 1,
          mr: 1,
        }}
      >
        <LanguageIcon />
        <AntSwitch
          inputProps={{ "aria-label": "ant design" }}
          onChange={handleToggle}
          checked={language === "en"}
          size="large"
        />
        <Typography>English</Typography>
      </Stack>
    </Box>
  );
};
