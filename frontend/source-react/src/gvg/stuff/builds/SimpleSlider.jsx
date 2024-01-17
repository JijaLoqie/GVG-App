import { useState } from "react"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"


export function SimpleSlider({ items, scrollable }) {
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

  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: "200px", height: "100%" }}>
      {scrollable ? (
        <Box sx={{
          position: "absolute", bottom: "12px", left: "50%",
          transform: "translate(-50%, 0)", height: "30px",
          display: 'flex',
          zIndex: 5,
        }} >
          <IconButton sx={{
            bgcolor: "#00000088",
            borderRadius: 0,
            borderRight: "1px solid white",
            borderTopLeftRadius: "32px",
            borderBottomLeftRadius: "32px",
          }} onClick={goToPrevious}>
            <KeyboardArrowLeft color="text" />
          </IconButton>
          <IconButton sx={{
            bgcolor: "#00000088",
            borderRadius: 0,
            borderTopRightRadius: "32px",
            borderBottomRightRadius: "32px",
          }} onClick={goToNext}>
            <KeyboardArrowRight color="text" />
          </IconButton>
        </Box>

      ) : null}

      <Box sx={{
        position: 'absolute',
        width: "100%", height: "100%",
        borderRadius: "inherit",
        transition: "all 300ms",

        backgroundImage: `url(${items[currentIndex].path})`,

        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 80px black",
        zIndex: 3,
      }} />
      <Box sx={{
        width: "100%", height: "100%",
        borderRadius: "inherit",
        transition: "all 300ms",

        backgroundImage: `url(${items[currentIndex].path})`,
        filter: "blur(2px)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 80px black",
        zIndex: 3,
      }} />
    </Box>
  )
}
