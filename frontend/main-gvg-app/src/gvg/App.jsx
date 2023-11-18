import { Box } from "@mui/material";

import { Outlet, } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";


export function App() {
  return (
    <Box>
      <Navbar />
      <Box flex={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

