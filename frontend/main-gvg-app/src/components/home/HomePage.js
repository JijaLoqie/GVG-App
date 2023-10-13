import React from "react";
import { Box, Typography } from "@mui/material";

import HeaderSection from "./HeaderSection/HeaderSection";
import ChooseSection from "./ChooseSection/ChooseSection";
import ReviewSection from './ReviewSection/ReviewSection';

export default HomePage = () => {
  return (
    <Box marginBottom="200px">
      <HeaderSection />
      <ChooseSection />
      <ReviewSection />
    </Box>
  );
};
