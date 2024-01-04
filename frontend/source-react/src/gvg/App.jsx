import { Box } from "@mui/material";

import { Outlet, } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { SnackbarProvider } from "notistack";


export function App() {
  return (
    <Box sx={{
      boxSizing: "border-box",
      maxWidth: "100%",
    }}>
      <Navbar />
      <SnackbarProvider maxSnack={3}>
        <Box flex={1}>
          <Outlet />
        </Box>
      </SnackbarProvider>
      <Footer />
    </Box>

  );
}

