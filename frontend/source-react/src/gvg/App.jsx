import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import { Outlet, ScrollRestoration, } from "react-router-dom";
import Footer from "./widgets/footer/Footer";
import Navbar from "./widgets/navbar/Navbar";
import { SnackbarProvider } from "notistack";
import { themes } from "./common/styles/themes";


export function App() {

  return (
    <ThemeProvider theme={themes.darkTheme}>
      <CssBaseline />
      <Box sx={{
        boxSizing: "border-box",
        maxWidth: "100%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}>
        <Navbar />
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <SnackbarProvider maxSnack={3} autoHideDuration={2000} >
            <Outlet />
          </SnackbarProvider>
        </Box>
        <Footer />
        <ScrollRestoration />
      </Box>
    </ThemeProvider>
  );
}

