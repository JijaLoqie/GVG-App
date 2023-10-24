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
import LogoButton from "./LogoButton";

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
  const [selected, setSelected] = useState(actions[0].title);
  const [hovered, setHovered] = useState(actions[0].title);
  const [mouseOnOffers, setMouseOnOffers] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const [mouseOnPopup, setMouseOnPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mouseOnOffers && !mouseOnPopup) {
      const timer = setTimeout(() => {
        if (!mouseOnOffers && !mouseOnPopup) {
          console.log("Time's up, closing");
          setOffersOpen(false);
        } else {
          console.log("Well, still good");
        }
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setOffersOpen(true);
    }
  }, [mouseOnOffers, mouseOnPopup]);

  const handleEnterButton = (actionPath) => {
    if (actionPath === "/offers") {
      setMouseOnOffers(true);
    }
    setHovered(actionPath);
  };

  const handleLeaveButton = (actionPath) => {
    if (actionPath === "/offers") {
      setMouseOnOffers(false);
    }
    setHovered(actionPath === hovered ? "none" : hovered);
  };

  const handleClickButton = (action) => {
    if (action.path === "/offers") {
      return;
    }
    setSelected(action.title);
    navigate(action.path);
  };

  return (
    <ThemeProvider theme={themed}>
      <AppBar
        position="static"
        sx={{
          boxShadow: "0 0 2em black",
          padding: "23px 0",
          bgcolor: "#0D0D0D",
          maxHeight: "90px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            marginRight: "auto",
            marginLeft: "auto",
            paddingInline: "15px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <Toolbar
            sx={{
              minHeight: 45,
              marginInline: "-15px",
              fontSize: "16px",
              lineHeight: "29px",
            }}
            style={{
              minHeight: 45,
            }}
          >
            <LogoButton />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                width: "50%",
                paddingInline: "15px",
              }}
            >
              {actions.map((action, index) => (
                <Typography
                  key={index}
                  sx={{
                    paddingInline: "20px",
                    color: hovered === action.path ? "#0000ff" : "#ffffff",
                    cursor: "pointer",
                    height: "100%",
                    transition: "all 0.5s",
                  }}
                  onClick={() => handleClickButton(action)}
                  onMouseEnter={() => handleEnterButton(action.path)}
                  onMouseLeave={() => handleLeaveButton(action.path)}
                >
                  {action.title}
                </Typography>
              ))}
            </Box>
            {(mouseOnOffers || mouseOnPopup || offersOpen) && (
              <CustomPopup
                setMouseOnPopup={setMouseOnPopup}
                actions={offersActions}
              />
            )}
            <Stack
              direction="row-reverse"
              width="25%"
              sx={{ alignItems: "center", color: "#ffffff" }}
            >
              <CustomSearch />
              <IconButton sx={{ color: "#ffffff", marginRight: 1 }}>
                <ShoppingCartIcon />
              </IconButton>
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
            </Stack>
          </Toolbar>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};
