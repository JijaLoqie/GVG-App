import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRecommendedStuff } from "./RecommendationsLoader";
import { ComponentList } from "../components/ComponentList";

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
      width: "100%", height: "50vh",

      borderTop: '5px solid', borderImageSlice: 1,
      borderImageSource: `linear-gradient(to left, ${['red', 'blue'].join(',')})`,

      display: "flex", alignItems: "start", justifyContent: "center",
      gap: "10px",
    }}>
      <ComponentList components={recommendedStuff} recommended={true} />
    </Box>
  )
}
