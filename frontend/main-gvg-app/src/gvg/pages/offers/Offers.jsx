import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Offers() {
  return (
    <Box sx={{padding: "24px"}}>
      <Outlet />
    </Box>
  )
}
