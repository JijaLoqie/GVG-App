import React, { useEffect, useState } from "react";

import CustomSearch from "../common/CustomSearch";
import {
  Phone as PhoneIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
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
  Tabs,
  Tab,
} from "@mui/material";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import CustomPopup from "../common/CustomPopup";
import { useNavigate } from "react-router-dom";

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
    title: "Сборки",
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
  const [selected, setSelected] = useState(actions[0].title)
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

  const handleClickButton = (action) => {
    if (action.path === "/offers") {
      return;
    }
	setSelected(action.title)
    navigate(action.path);
  };

  return (
    <ThemeProvider theme={themed}>
      <AppBar position="static" sx={{ boxShadow: "0 0 2em black" }}>
        <Toolbar
          sx={{
            bgcolor: "#0D0D0D",
          }}
        >
          <Button
            sx={{ alignItems: "end", color: "#ffffff", paddingTop: 0 }}
            onClick={() => navigate("/home")}
          >
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

          {/* <Stack
		  	direction="row"
            sx={{ minHeight: "50px", paddingInline: "20px", textAlign: "center" }}
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
          </Stack> */}

          <Tabs value={selected}>
            {actions.map((action, index) => (
              <Tab
                key={index}
                value={action.title}
                label={action.title}
                sx={{ paddingInline: "20px", color: "#ffffff" }}
                onClick={() => handleClickButton(action)}
                onMouseEnter={() => handleEnterButton(action.path)}
                onMouseLeave={() => handleLeaveButton(action.path)}
              />
            ))}
          </Tabs>
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
              <a
                href="tel:9851460477"
                style={{
                  color: "white",
                }}
              >
                +7 (985) 146-04-77
              </a>
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
                        <a
                          href="tel:9851460477"
                          style={{
                            color: "black",
                          }}
                        >
                          +7 (985) 146-04-77
                        </a>
                      </Typography>
                    </Popover>
                  </div>
                )}
              </PopupState>
            </Box>
            <IconButton sx={{ color: "#ffffff", marginRight: 1 }}>
              <ShoppingCartIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
