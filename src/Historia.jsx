import { Typography } from "@mui/material";
import { traductor } from "./utils";

export const Historia = ({ language }) => {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        className="merriweather-bold"
        sx={{ mt: 5 }}
      >
        {traductor.nuestraHistoria[language]}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="secondary"
        className="merriweather-bold"
        sx={{ mt: 5, mx: 4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="secondary"
        className="merriweather-bold"
        sx={{ mt: 5, mx: 4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="secondary"
        className="merriweather-bold"
        sx={{ mt: 5, mx: 4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </div>
  );
};
