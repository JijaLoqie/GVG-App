import React, { useEffect, useState } from "react";
import { CatchingPokemon as CatchingPokemonIcon, Phone as PhoneIcon } from "@mui/icons-material";
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

const themed = createTheme({
  palette: {
	primary: {
		main: "#ffffff",
	},
	secondary: purple,
  },
});




export default CustomBarMobile = () => {
  const [selected, setSelected] = useState(0);
  const handleSelect = (target, newSelected) => {
    setSelected(newSelected);
  };

  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  return (
    <ThemeProvider theme={themed}>
      <AppBar position="static">
        <Toolbar
          sx={{
            bgcolor: "#000000",
          }}
        >
          <Button sx={{ color: "#ffffff" }}>
            <CatchingPokemonIcon />
            <Typography variant="h4">GVG</Typography>
          </Button>
          <Stack direction="row-reverse" marginLeft="auto">
            <CustomSearch />
            <PhoneIcon />
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
