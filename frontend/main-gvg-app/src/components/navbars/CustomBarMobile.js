import React, { useEffect, useState } from "react";
import {
  CatchingPokemon as CatchingPokemonIcon,
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
  BottomNavigation,
  BottomNavigationAction,
  Tooltip,
  SpeedDial,
  IconButton,
} from "@mui/material";

import { useNavigate } from 'react-router-dom';

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

export default CustomBarMobile = () => {
  const [selected, setSelected] = useState(0);
  const handleSelect = (target, newSelected) => {
    setSelected(newSelected);
	navigate(`${actions[newSelected].path}`);
  };
  
  const navigate = useNavigate()

  return (
    <>
      <AppBar position="static">
        <Toolbar
          direction="row"
          sx={{
            borderBottom: 1,
            borderColor: "#ffffff",
            bgcolor: "#000000",
          }}
        >
          <Button sx={{ color: "#ffffff" }}>
            <CatchingPokemonIcon sx={{ marginRight: 1 }} />
            <Typography variant="h4">GVG</Typography>
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
                      <Link to="tel:9851460477" underline="none">
                        +7 (985) 146-04-77
                      </Link>
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
            onClick={() => console.log(action.title)}
          />
        ))}
      </BottomNavigation>
    </>
  );
};
