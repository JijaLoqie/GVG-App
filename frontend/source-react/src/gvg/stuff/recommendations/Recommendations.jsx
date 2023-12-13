import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRecommendedStuff } from "./RecommendationsLoader";
import { ComponentList } from "../components/ComponentList";
import { RecommendationList } from "./RecommendationList";

export function Recommendations() {
  const [recommendedStuff, setRecommendedStuff] = useState([])

  useEffect(() => {
    const type_stuff  = "all"
    getRecommendedStuff(type_stuff).then( data => {
      setRecommendedStuff(data)
    })
  }, [])

  return (
    <Box sx={{
      paddingTop: "24px",
      width: "100%",

      borderTop: '5px solid', borderImageSlice: 1,
      borderImageSource: `linear-gradient(to left, ${['red', 'blue'].join(',')})`,

      display: "flex", alignItems: "center", justifyContent: "start", flexDirection: 'column',
      gap: "10px",
    }}>
      <Typography variant="h4" color="text">Хит сезона</Typography>
      <RecommendationList items={recommendedStuff} />
    </Box>
  )
}
