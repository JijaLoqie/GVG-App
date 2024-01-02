import { Box } from "@mui/material";
import { Header } from "./segments/header/Header";
import { Reviews } from "./segments/reviews/Reviews";
import { Recommendations } from "../../stuff/recommendations/Recommendations";

export function Home() {
  return (
    <Box>
      <Header />
      <Recommendations />
      <Reviews />
    </Box>
  )
}
