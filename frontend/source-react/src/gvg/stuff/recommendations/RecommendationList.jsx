import { Box, Typography } from "@mui/material";
import { RecommendationCard } from "./RecommendationCard";

export function RecommendationList({items}) {
  return (
    <Box sx={{
      display: "flex", justifyContent: "center", flexDirection: "row",
      width: "100%",
      gap: "48px",
      padding: '24px',
    }}>
      {items?.map((item, index) => <RecommendationCard item={item} key={index} />)}
    </Box>
  )
}
