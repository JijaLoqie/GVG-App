import { Box } from "@mui/material";

import { Outlet, ScrollRestoration, } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: "updateRecommended" })
  }, [])

  return (
    <Box sx={{
      boxSizing: "border-box",
      maxWidth: "100%",
      overflow: "auto"
    }}>
      <Navbar />
      <SnackbarProvider maxSnack={3}>
        <Box flex={1}>
          <Outlet />
        </Box>
      </SnackbarProvider>
      <Footer />
      <ScrollRestoration />
    </Box>

  );
}

