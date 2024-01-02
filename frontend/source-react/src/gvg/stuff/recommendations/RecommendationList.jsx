import { Box, Typography, alpha } from "@mui/material";
import { RecommendationCard } from "./RecommendationCard";
import { ComponentCard } from "../components/ComponentCard";
import { customPalette } from "../../common/styles/themes";

const handleMouseMove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};
export function RecommendationList({buildItems, componentItems}) {
  return (
    <Box sx={{
      display: "flex", flexDirection: "column", alignItems: "stretch",
      width: "100%",
    }}>
      <Box sx={{
        display: "flex", justifyContent: "center", alignItems: "center",
        paddingY: "12px",
        textAlign: "center",
        bgcolor: "background.main",
        width: "100%",
      }}>
        <Typography variant="h4" color="text">Мощнейшие сборки</Typography>
      </Box>
      <Box sx={{
        bgcolor: alpha(`${customPalette.background}`, '0.85'),
        display: "flex", justifyContent: {xs:"start",md:"center"}, flexDirection: "row",
        width: "95vw",
        gap: "48px",
        padding: '24px',
        paddingInline: "60px",
        overflowX: "scroll",
        overflowY: "hidden",
        boxShadow: "inset 0 0 9px 10px black",
      }}>
        {buildItems?.map((item, index) => <RecommendationCard item={item} key={index} />)}
      </Box>
      <Box sx={{
        display: "flex", justifyContent: "center", alignItems: "center",
        paddingY: "12px",
        textAlign: "center",
        bgcolor: "background.main",
        width: "100%",
      }}>
        <Typography variant="h4" color="text">Хит сезона</Typography>
      </Box>
      <Box onMouseMove={handleMouseMove} sx={{
        bgcolor: alpha(`${customPalette.background}`, '0.85'),
        display: "flex", justifyContent: {xs:"start",md:"start"}, flexDirection: "row",
        gap: "48px",
        overflowX: "scroll",
        overflowY: "hidden",
        padding: '24px',
        boxShadow: "inset 0 0 9px 10px black",
      }}>
        {componentItems?.map((item, index) => <ComponentCard key={index} componentItem={item} recommended={true} />)}
      </Box>
      <Box sx={{
        display: "flex", justifyContent: "center", alignItems: "center",
        bgcolor: "background.main",
        width: "100%",
        height: "60px",
      }}>
      </Box>
    </Box>
  )
}
