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
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { useNavigate } from 'react-router-dom';

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
            bgcolor: "#000000",
          }}
        >
          <Button sx={{ color: "#ffffff" }}>
            <CatchingPokemonIcon />
            <Typography variant="h4">GVG</Typography>
          </Button>
          <Stack direction="row-reverse" marginLeft="auto" sx={{ alignItems: 'center'}}>
            <CustomSearch />
            <PhoneIcon />
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
		{actions.map((action) => (
			<BottomNavigationAction label={action.title} icon={action.icon} />
		))}
      </BottomNavigation>
    </>
  );
};
