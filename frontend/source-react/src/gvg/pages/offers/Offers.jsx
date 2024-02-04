import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Offers() {
  return (
    <Box sx={{
      margin: "auto",
      maxWidth: "1800px", mt: 4,
      pb: 6,
    }}
    >
      <Outlet />
    </Box >
  )
}
