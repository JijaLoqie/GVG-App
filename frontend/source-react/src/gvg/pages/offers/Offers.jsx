import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Offers() {
  return (
    <Container maxWidth="1000px" sx={{
      maxWidth: "1700px", mt: 4,
    }}
    >
      <Outlet />
    </Container >
  )
}
