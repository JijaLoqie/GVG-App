import { Typography, Box } from "@mui/material"
import React from "react"
import items from "./header_items.json"
import ImageSlider from "./ImageSlider"

// var items = [
//   {
//     name: "Random Name #1",
//     description: "Probably the most random thing you have ever seen!",
//   },
//   {
//     name: "Random Name #2",
//     description: "Hello World!",
//   },
// ];

const containerStyles = {
  width: "100%",
  height: "90vh",
  margin: "0 auto",
}
export default function HeaderSection() {
  return (
    <Box position="relative">
      <Box sx={containerStyles}>
        <ImageSlider items={items} />
      </Box>
      <Typography
        sx={{ position: "absolute", top: "24px", left: "24px" }}
        variant="h2"
      >
        Tech Solutions
      </Typography>
    </Box>
  )
}
