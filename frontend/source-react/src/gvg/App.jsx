import { Box } from "@mui/material";

import { Outlet, } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";
import { OrderBackdrop } from "./pages/order/OrderBackdrop";


export function App() {
  const isOpenOrderBackdrop = useSelector(state => (state.order.isOpen ?? false))


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
          <OrderBackdrop isOpen={isOpenOrderBackdrop} />
        </Box>
      </SnackbarProvider>
      <Footer />
    </Box>

  );
}

