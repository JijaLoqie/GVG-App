import React from "react"
import { Box, Typography } from "@mui/material"

import HeaderSection from "./HeaderSection/HeaderSection"
import ChooseSection from "./ChooseSection/ChooseSection"
import ReviewSection from "./ReviewSection/ReviewSection"
import FooterSection from "./FooterSection/FooterSection"

export default HomePage = function() {
  return (
    <Box>
      <HeaderSection />
      <ChooseSection />
      <ReviewSection />
      <FooterSection />
    </Box>
  )
}
