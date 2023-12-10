import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRecommendedStuff } from "./RecommendationsLoader";

export function Recommendations() {
  const [recommendedStuff, setRecommendedStuff] = useState([])

  useEffect(() => {
    setRecommendedStuff(getRecommendedStuff("all"))
  }, [])
  return (
    <Box sx={{
      width: "100%",
      height: "50vh",
      borderTop: '5px solid',
      borderImageSlice: 1,
      borderImageSource: `linear-gradient(to left, ${['red', 'blue'].join(',')})`,
    }}>
      <Typography>Here will be dragons</Typography>
      {recommendedStuff.map((stuff, index) => (
        <Box key={index}>Hi</Box>
      ))}

    </Box>
  )
}
