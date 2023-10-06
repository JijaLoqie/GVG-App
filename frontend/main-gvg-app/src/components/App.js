import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { CatchingPokemon as CatchingPokemonIcon, Search as SearchIcon } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";


import CreatePage from "./CreatePage";
import HomePage from "./HomePage";
import UpdatePage from "./UpdatePage";

import {
  Button,
  ButtonGroup,
  Stack,
  InputBase,
  Typography,
  Box,
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  Tab,
  Tabs,
} from "@mui/material";
import Fade from "@mui/material/Fade";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


export default App = () => {
	const [selected, setSelected] = useState(0)

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSelect = (target, newSelected) => {
		setSelected(newSelected)
	}
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "#ffffff",
        height: "100vh",
        width: 1,
      }}
    >
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
          <Tabs textColor="#ffffff" value={selected} onChange={handleSelect}>
            <Tab label="Главная" />
            <Tab
              label={
                <>
                  <Typography
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Услуги
                  </Typography>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>Сборки</MenuItem>
                    <MenuItem onClick={handleClose}>Комплектующие</MenuItem>
                    <MenuItem onClick={handleClose}>Мне повезёт!</MenuItem>
                  </Menu>
                </>
              }
            />
            <Tab label="Доставка" />
            <Tab label="О нас" />
          </Tabs>
          <Stack direction="row-reverse" marginLeft="auto">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                color="#ffffff"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Typography variant="body1" sx={{ alignSelf: "center" }}>
              +7 (985)-146-04-77
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box padding={4}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="home" element={<HomePage />} />

            <Route exact path="#create" element={<CreatePage />} />

            <Route exact path="update" element={<UpdatePage />} />

            {/* <Route exact path="resume/:code" element={<ResumePage />} /> */}
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
};
