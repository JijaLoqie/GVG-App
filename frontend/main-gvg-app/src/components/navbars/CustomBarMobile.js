import React, { useEffect, useState } from "react";
import {
  Phone as PhoneIcon,
  Home as HomeIcon,
  Computer as ComputerIcon,
  DeliveryDining as DeliveryDiningIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import { lime, purple } from "@mui/material/colors";

import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import CustomSearch from "../common/CustomSearch";
import CustomPopup from "../common/CustomPopup";

import {
  Button,
  Stack,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Link,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  createTheme,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darken } from "@material-ui/core";

const actions = [
  {
    title: "Главная",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    title: "Услуги",
    path: "/offers",
    icon: <ComputerIcon />,
  },
  {
    title: "Доставка",
    path: "/delivery",
    icon: <DeliveryDiningIcon />,
  },
  {
    title: "О нас",
    path: "/about",
    icon: <InfoIcon />,
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

const themed = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: darken("#ffffff"),
    },
  },
});

export default CustomBarMobile = () => {
  const [selected, setSelected] = useState(0);

  const [mouseOnOffers, setMouseOnOffers] = useState(false);
  const [mouseOnPopup, setMouseOnPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // remember last location and display it on mobile navbar
  useEffect(() => {
    var pathname = location.pathname;
	if (pathname[pathname.length - 1] === '/') {
		pathname = pathname.substring(0, pathname.length - 1);
	}
    console.log(pathname);
    for (let i = 0; i < actions.length; i += 1) {
      if (actions[i].path == pathname) {
        console.log(`GOOOD, ${pathname} IS ${actions[i].path}`);
        setSelected(i);
        return;
      } else {
        console.log(`baad, ${pathname} is not ${actions[i].path}`);
	  }
    }
    for (let i = 0; i < offersActions.length; i += 1) {
      if (offersActions[i].path == pathname) {
        setSelected(1);
        return;
	  }
    }
  }, [location]);

  const handleSelect = (target, newSelected) => {
    setSelected(newSelected);

    if (actions[newSelected].path === "/offers") {
      setMouseOnOffers((value) => !value);
    } else {
      setMouseOnOffers(false);
      navigate(`${actions[newSelected].path}`);
    }
  };
  useEffect(() => {
	console.log(selected)
  }, [selected])

  return (
    <ThemeProvider theme={themed}>
      <AppBar position="static">
        <Toolbar
          sx={{
            borderBottom: 1,
            borderColor: "#ffffff",
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
              alt="The house from the offer."
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
          <Stack
            direction="row-reverse"
            marginLeft="auto"
            sx={{ alignItems: "center" }}
          >
            <CustomSearch />
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
                          color: "blueviolet",
                        }}
                      >
                        +7 (985) 146-04-77
                      </a>
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Stack>
        </Toolbar>
      </AppBar>
      <BottomNavigation
        sx={{
          backgroundColor: "#ffffff",
          width: "100%",
          position: "absolute",
          bottom: 0,
          marginBottom: 0,
          zIndex: 12345,
        }}
        value={selected}
        onChange={handleSelect}
        showLabels
      >
        {actions.map((action, index) => (
          <BottomNavigationAction
            key={index}
            label={action.title}
            icon={action.icon}
          />
        ))}
      </BottomNavigation>
      {(mouseOnOffers || mouseOnPopup) && (
        <CustomPopup
          setMouseOnPopup={setMouseOnPopup}
          actions={offersActions}
        />
      )}
    </ThemeProvider>
  );
};
