import React from "react"
import { Box } from "@mui/material"

import HeaderSection from "./HeaderSection/HeaderSection"
import ChooseSection from "./ChooseSection/ChooseSection"
import ReviewSection from "./ReviewSection/ReviewSection"

export default function HomePage() {
  return (
    <Box>
      <HeaderSection />
      <ChooseSection />
      <ReviewSection />
    </Box>
  )
}
