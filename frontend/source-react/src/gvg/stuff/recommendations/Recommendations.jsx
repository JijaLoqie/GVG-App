import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRecommendedStuff } from "./RecommendationsLoader";
import { ComponentList } from "../components/ComponentList";
import { RecommendationList } from "./RecommendationList";

export function Recommendations() {
  const [recommendedBuilds, setRecommendedBuilds] = useState([])
  const [recommendedComponents, setRecommendedComponents] = useState([])

  useEffect(() => {
    getRecommendedStuff("builds").then(data => {
      setRecommendedBuilds(data)
    })
    getRecommendedStuff("components").then(data => {
      console.log(data)
      setRecommendedComponents(data)
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
      <RecommendationList buildItems={recommendedBuilds} componentItems={recommendedComponents} />
    </Box>
  )
}
