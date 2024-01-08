import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Offers() {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}
