import { useState } from "react"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Box } from "@mui/material"
import styled from "@emotion/styled"

const CustomArrow = styled(Box)({
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",

  fontSize: "45px",
  zIndex: 1,
  cursor: "pointer",
  borderRadius: "8px",
})

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: (theme) =>
    theme.transitions.create("background", {
      duration: theme.transitions.duration.standard,
    }),
}

const sliderStyles = {
  position: "relative",
  height: "100%",
}

export default function SimpleSlider({ items, scrollable }) {
  const CustomRightArrow = styled(CustomArrow)({
	transition: "all 0.3s",
    backgroundColor: scrollable ? "#00000099" : "#00000000",
    color: scrollable ? "#D7FEDC" : "#00000000",

    right: "8px",
  })
  const CustomLeftArrow = styled(CustomArrow)({
    transition: "all 0.3s",
    backgroundColor: scrollable ? "#00000099" : "#00000000",
    color: scrollable ? "#D7FEDC" : "#00000000",

    left: "8px",
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((oldIndex) => {
      var newIndex = oldIndex - 1
      if (newIndex < 0) {
        newIndex = items.length - 1
      }
      return newIndex
    })
  }
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length)
  }
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${items[currentIndex].url})`,
    backgroundSize: "cover",
  }

  return (
    <Box sx={sliderStyles}>
      <Box
        sx={{
          visibility: scrollable ? "visible" : "hidden",
        }}
      >
        <CustomLeftArrow onClick={goToPrevious}>
          <KeyboardArrowLeft />
        </CustomLeftArrow>
        <CustomRightArrow onClick={goToNext}>
          <KeyboardArrowRight />
        </CustomRightArrow>
      </Box>
      <Box sx={slideStylesWidthBackground} />
    </Box>
  )
}
