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

const themed = createTheme({
  palette: {
	primary: {
		main: "#ffffff",
	},
	secondary: purple,
  },
});




export default CustomBarPC = () => {
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

          <ButtonGroup variant="text">
            <Button>Главная</Button>
            <Button {...bindTrigger(popupState)}>Услуги</Button>
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
            <Button>Доставка</Button>
            <Button>О нас</Button>
          </ButtonGroup>
          <Stack direction="row-reverse" marginLeft="auto">
            <CustomSearch />
            <Typography variant="body1" sx={{ alignSelf: "center" }}>
              +7 (985) 146-04-77
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
