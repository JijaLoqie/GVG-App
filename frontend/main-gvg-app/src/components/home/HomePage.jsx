import React from "react"
import { Box } from "@mui/material"

import HeaderSection from "./HeaderSection/HeaderSection"
import ReviewSection from "./ReviewSection/ReviewSection"
import BuildsSection from './BuildsSection/BuildsSection'

export default function HomePage() {
  return (
    <Box>
      <HeaderSection />
      <BuildsSection />
      <ReviewSection />
    </Box>
  )
}
