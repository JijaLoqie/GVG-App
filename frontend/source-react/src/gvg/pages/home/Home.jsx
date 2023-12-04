import { Box } from "@mui/material";
import { Header } from "./segments/header/Header";
import { Reviews } from "./segments/reviews/Reviews";

export function Home() {
  return (
    <Box>
      <Header />
      <Reviews />
    </Box>
  )
}
