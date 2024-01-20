import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Offers() {
  return (
    <Container sx={{
      maxWidth: "1700px", mt: 4,
    }}
    >
      <Outlet />
    </Container >
  )
}
