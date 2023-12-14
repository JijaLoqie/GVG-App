import { Box, Typography } from "@mui/material";
import { RecommendationCard } from "./RecommendationCard";
import { ComponentCard } from "../components/ComponentCard";

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
    <>
      <Typography variant="h4" color="text">Мощнейшие сборки</Typography>
      <Box sx={{
        display: "flex", justifyContent: {xs:"start",md:"center"}, flexDirection: "row",
        width: "95vw",
        gap: "48px",
        padding: '24px',
        paddingInline: "60px",
        marginBottom: "24px",
        overflowX: "scroll",
        overflowY: "hidden",
        boxShadow: "inset 0 0 9px 10px black",
      }}>
        {buildItems?.map((item, index) => <RecommendationCard item={item} key={index} />)}
      </Box>
      <Typography variant="h4" color="text">Хит сезона</Typography>
      <Box onMouseMove={handleMouseMove} sx={{
        display: "flex", justifyContent: {xs:"start",md:"start"}, flexDirection: "row",
        gap: "48px",
        width: "95vw",
        overflowX: "scroll",
        overflowY: "hidden",
        padding: '24px', marginBottom: "24px",
        boxShadow: "inset 0 0 9px 10px black",
        zIndex: "100",
      }}>
        {componentItems?.map((item, index) => <ComponentCard key={index} componentItem={item} recommended={true} />)}
      </Box>
    </>
  )
}
