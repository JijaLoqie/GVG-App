import { useEffect, useState } from "react"
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
    <Box sx={(theme) => ({
      position: "relative",
      width: "100%",
      height: 300,
      textAlign: "center",
      backgroundImage: `linear-gradient(45deg, transparent, ${theme.palette.background.main} 99%)`,
      bgcolor: "background.light",
      transition: "all 300ms",
      "&:hover": {
        bgcolor: "accent.dark",
      }
    })}>
      <Box sx={{
        position: 'absolute',
        width: "100%", height: "100%",
        borderRadius: "inherit",
        transition: "all 300ms",
        zIndex: 3,

        backgroundImage: `url(${items[currentIndex]?.path})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 80px black",
      }}>

        {scrollable ? (
          <Box sx={{ width: "100%", position: "absolute", bottom: 0, }}>
            <IconButton onClick={goToPrevious}>
              <KeyboardArrowLeft color="text" />
            </IconButton>
            <IconButton onClick={goToNext}>
              <KeyboardArrowRight color="text" />
            </IconButton>
          </Box>

        ) : null}
      </Box>

    </Box>
  )
}

//        <Box sx={{
//          width: "100%", height: "100%",
//          borderRadius: "inherit",
//          transition: "all 300ms",
//  
//          backgroundImage: `url(${items[currentIndex].path})`,
//          filter: "blur(2px)",
//          backgroundSize: "cover",
//          backgroundPosition: "center",
//          boxShadow: "inset 0 0 80px black",
//          zIndex: 3,
//        }} />
