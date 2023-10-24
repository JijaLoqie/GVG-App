import React, { useEffect, useState } from "react";

import CustomSearch from "../common/CustomSearch";
import {
  Phone as PhoneIcon,
  ShoppingBag as ShoppingBagIcon,
  Search as SearchIcon,
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
  useScrollTrigger,
  Switch,
  colors,
} from "@mui/material";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import CustomPopup from "../common/CustomPopup";
import { useNavigate } from "react-router-dom";
import LogoButton from "./LogoButton";
import styled from "styled-components";

const themed = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#00ff00",
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 1,
          borderColor: colors.primaryGrayMid,
          borderStyle: "solid",
          borderRadius: 10,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          backgroundColor: colors.primaryGrayDark,
          color: "#C1C2C5",
          padding: 10,
        },
      },
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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default CustomBarPC = () => {
  const [selected, setSelected] = useState("");
  const [hovered, setHovered] = useState("");
  const [mouseOnOffers, setMouseOnOffers] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const [mouseOnPopup, setMouseOnPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mouseOnOffers && !mouseOnPopup) {
      const timer = setTimeout(() => {
        if (!mouseOnOffers && !mouseOnPopup) {
          setOffersOpen(false);
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
    setSelected(action.path);
    navigate(action.path);
  };

  return (
    <ThemeProvider theme={themed}>
      <AppBar
        position="sticky"
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
                justifyContent: "space-around",
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
                    color: hovered === action.path ? "#2222ff" : "#ffffff",
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
            <Box
              width="25%"
              sx={{
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
                color: "#ffffff",
                justifyContent: "center",
              }}
            >
              {/* CallText */}
              <Typography
                sx={{ fontSize: "20px", fontWeight: "400" }}
                display={{ xs: "none", lg: "flex" }}
              >
                TEL: 89851460477
              </Typography>
              {/* CallButton */}
              <Box display={{ xs: "flex", lg: "none" }}>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <IconButton
                        sx={{
                          color: "#ffffff",
                          transition: "color 0.2s",
                          "&:hover": {
                            color: "#2222ff",
                          },
                        }}
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
              <Stack direction="row" spacing={3} sx={{}}>
                <IconButton
                  sx={{
                    padding: 0,
                    color: "#ffffff",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "#2222ff",
                    },
                  }}
                >
                  <ShoppingBagIcon />
                </IconButton>
                <MaterialUISwitch theme={themed} />

                <IconButton
                  sx={{
                    padding: 0,
                    color: "#ffffff",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "#2222ff",
                    },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};
