import React, { useEffect, useState } from "react";
import { CatchingPokemon as CatchingPokemonIcon } from "@mui/icons-material";
import { lime, purple } from "@mui/material/colors";

import Fade from "@mui/material/Fade";
import CustomSearch from "./CustomSearch";

import {
  Button,
  Stack,
  Typography,
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  Tab,
  Tabs,
  Link,
  ButtonGroup,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { useNavigate } from "react-router-dom";

const themed = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: purple,
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
            bgcolor: "#000000",
          }}
        >
          <Button sx={{ color: "#ffffff" }}>
            <CatchingPokemonIcon />
            <Typography variant="h4">GVG</Typography>
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
            {/*
            <Button sx={{ paddingInline: "20px" }} {...bindTrigger(popupState)}>
              Услуги
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              TransitionComponent={Fade}
              {...bindMenu(popupState)}
            >
              <MenuItem onClick={popupState.close}>Сборки</MenuItem>
              <MenuItem onClick={popupState.close}>Комплектующие</MenuItem>
              <MenuItem onClick={popupState.close}>Мне повезёт!</MenuItem>
            </Menu>
			*/}
          </ButtonGroup>
          <Stack direction="row-reverse" marginLeft="auto">
            <CustomSearch />
            <Typography
              variant="body1"
              sx={{ color: "#ffffff", alignSelf: "center" }}
            >
              +7 (985) 146-04-77
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
