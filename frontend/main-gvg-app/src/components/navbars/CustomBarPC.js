import React, { useEffect, useState } from "react";

import CustomSearch from "../common/CustomSearch";
import { Phone as PhoneIcon } from "@mui/icons-material";
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
  Popover,
  IconButton,
} from "@mui/material";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import CustomPopup from '../common/CustomPopup';
import { useNavigate } from 'react-router-dom';

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
const offersActions = [
  {
    title: "Собрки",
    path: "/offers/builds",
  },
  {
    title: "Комплектующие",
    path: "/offers/components",
  },
  {
    title: "Игровой конструктор",
    path: "/offers/constructor",
  },
];

export default CustomBarPC = () => {
  const [mouseOnOffers, setMouseOnOffers] = useState(false);
  const [mouseOnPopup, setMouseOnPopup] = useState(false);
  const navigate = useNavigate();


  const handleEnterButton = (actionPath) => {
    if (actionPath === "/offers") {
      setMouseOnOffers(true);
    }
  };

  const handleLeaveButton = (actionPath) => {
    if (actionPath === "/offers") {
      setMouseOnOffers(false);
    }
  };

  const handleClickButton = (actionPath) => {
	if (actionPath === "/offers") {
		return
	}
	navigate(actionPath)
  }

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
          <Button sx={{ alignItems: "end", color: "#ffffff", paddingTop: 0 }}>
            <Box
              component="img"
              sx={{
                maxHeight: 81,
                maxWidth: 61,
              }}
              src="/static/logos/icon.png"
            />
            <Box
              component="img"
              sx={{
                height: "35px",
                width: "79px",
              }}
              src="/static/logos/gvg.png"
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
                onClick={() => handleClickButton(action.path)}
                onMouseEnter={() => handleEnterButton(action.path)}
                onMouseLeave={() => handleLeaveButton(action.path)}
              >
                {action.title}
              </Button>
            ))}
          </ButtonGroup>
          {(mouseOnOffers || mouseOnPopup) && (
            <CustomPopup
              setMouseOnPopup={setMouseOnPopup}
              actions={offersActions}
            />
          )}
          <Stack
            direction="row-reverse"
            marginLeft="auto"
            sx={{ alignItems: "center", color: "#ffffff" }}
          >
            <CustomSearch />
            {/* CallText */}
            <Typography
              variant="body1"
              sx={{ alignSelf: "center" }}
              display={{ xs: "none", lg: "flex" }}
            >
              <Link to="tel:9851460477" underline="none">
                +7 (985) 146-04-77
              </Link>
            </Typography>
            {/* CallButton */}
            <Box display={{ xs: "flex", lg: "none" }}>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <IconButton
                      sx={{ color: "#ffffff" }}
                      {...bindTrigger(popupState)}
                    >
                      <PhoneIcon />
                    </IconButton>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Typography sx={{ p: 2 }}>
                        <Link
                          to="tel:9851460477"
                          underline="none"
                          xs={{ color: "black" }}
                          color={"#000000"}
                        >
                          +7 (985) 146-04-77
                        </Link>
                      </Typography>
                    </Popover>
                  </div>
                )}
              </PopupState>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
