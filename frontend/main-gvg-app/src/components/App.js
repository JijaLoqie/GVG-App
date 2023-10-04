import React from "react";
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
  IconButton,
  Link,
} from "@mui/material";

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
            borderBottom: 1,
            borderColor: "primary.main",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h4" sx={{ color: "#ffffff", flexGrow: 1 }}>
            GVG
          </Typography>
          <ButtonGroup variant="outlined">
            <Button component={Link} sx={{ color: "#ffffff" }}>
              Главная
            </Button>
            <Button component={Link} sx={{ color: "#ffffff" }}>
              Услуги
            </Button>
            <Button sx={{ color: "#ffffff" }}>О нас</Button>
            <Button sx={{ color: "#ffffff" }}>Способы доставки</Button>
          </ButtonGroup>
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
