import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import { Outlet, ScrollRestoration, } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { SnackbarProvider } from "notistack";
import { themes } from "./common/styles/themes";


export function App() {

  return (
    <ThemeProvider theme={themes.darkTheme}>
      <CssBaseline />
      <Box sx={{
        boxSizing: "border-box",
        maxWidth: "100%",
        overflow: "auto"
      }}>
        <Navbar />
        <SnackbarProvider maxSnack={3} autoHideDuration={2000} >
          <Box flex={1}>
            <Outlet />
          </Box>
        </SnackbarProvider>
        <Footer />
        <ScrollRestoration />
      </Box>
    </ThemeProvider>
  );
}

