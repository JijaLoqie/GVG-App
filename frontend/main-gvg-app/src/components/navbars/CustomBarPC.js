import React, { useEffect, useState } from "react";
// import { CatchingPokemon as CatchingPokemonIcon } from "@mui/icons-material";

import { lime, purple } from "@mui/material/colors";

import Fade from "@mui/material/Fade";
import CustomSearch from "../common/CustomSearch";

import {
  Button,
  Box,
  Stack,
  Typography,
  AppBar,
  Toolbar,
  Link,
  ButtonGroup,
  createTheme,
  ThemeProvider,
} from "@mui/material";


const themed = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const actions = [
  {
    title: "Главная",
    path: "/home",
  },
  {
    title: "Услуги",
    path: "/offers",
  },
  {
    title: "Доставка",
    path: "/delivery",
  },
  {
    title: "О нас",
    path: "/about",
  },
];

export default CustomBarPC = () => {
  return (
    <ThemeProvider theme={themed}>
      <AppBar position="static">
        <Toolbar
          sx={{
            borderBottom: 1,
            borderColor: "primary.main",
            bgcolor: "#0D0D0D",
          }}
        >
          <Button sx={{ color: "#ffffff" }}>
            <Box
              component="img"
              sx={{
                maxHeight: 81,
                maxWidth: 61,
              }}
              alt="The house from the offer."
              src="/static/logo.png"
            />
            <Box
              component="img"
              sx={{
                height: "35px",
                width: "79px",
              }}
              src="/static/gvg.png"
            />
          </Button>

          <ButtonGroup
            variant="text"
            sx={{ minHeight: "50px", paddingInline: "20px" }}
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                sx={{ paddingInline: "20px" }}
                href={`${action.path}`}
              >
                {action.title}
              </Button>
            ))}
          </ButtonGroup>
          <Stack
            direction="row-reverse"
            marginLeft="auto"
            sx={{ alignItems: "center", color: "#ffffff" }}
          >
            <CustomSearch />
            <Typography variant="body1" sx={{ alignSelf: "center" }}>
              <Link to="tel:9851460477" underline="none">
                +7 (985) 146-04-77
              </Link>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
