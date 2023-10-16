import { Typography, Box, Paper, Button } from "@mui/material";
import React, { useEffect } from "react";
import items from "./header_items.json";
import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";

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
  height: "70vh",
  margin: "0 auto",
};
export default HeaderSection = () => {
  return (
    <Box position={"relative"}>
      <Box sx={containerStyles}>
        <ImageSlider items={items} />
      </Box>
      <Typography
        variant="h2"
        sx={{ position: "absolute", top: "24px", left: "24px" }}
      >
        Tech Solutions
      </Typography>
    </Box>
  );
};
