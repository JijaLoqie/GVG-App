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
        <ImageSlider items={items} scrollable />
      </Box>
      <Typography
        sx={{
          position: "absolute",
          top: { xs: "10vh", md: "35vh" },
          right: "24px",
          fontWeight: "800",
          fontSize: { xs: "4rem", md: "6rem" },
        }}
        variant="h1"
      >
        Tech Solutions
      </Typography>
    </Box>
  )
}
