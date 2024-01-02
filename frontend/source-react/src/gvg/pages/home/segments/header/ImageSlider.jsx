import { Circle, CircleOutlined, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";


const image_list = [
  "https://i.imgur.com/GCtNWVC.jpg", 
  "https://i.imgur.com/Lo8X4aZ.jpg",
  "https://i.imgur.com/aEnveR4.jpg",
]

//    "https://i.imgur.com/lHVClA2.png",
//
const NEXT_SLIDE_TIMER = 15

export function ImageSlider({arrows}) {
  const [imageIndex, setImageIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(NEXT_SLIDE_TIMER)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft === 0) {
        setTimeLeft(NEXT_SLIDE_TIMER)
        scrollNext()
      } else {
        setTimeLeft((index) => index - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [timeLeft])

  const scrollNext = () => {
    setImageIndex(was => {
      was += 1
      if (was === image_list.length) {
        was = 0
      }
      return was
    })
    setTimeLeft(NEXT_SLIDE_TIMER)
  }
  const scrollPrev = () => {
    setImageIndex(was => {
      was -= 1
      if (was === -1) {
        was = image_list.length - 1
      }
      return was
    })
    setTimeLeft(NEXT_SLIDE_TIMER)
  }

  const goToSlide = (index) => {
    setImageIndex(index)
  }
  return (
    <Box sx={{
      position: !arrows ? "fixed" : "static",
      transition: "all 300ms",
      width: "100%", height: "100%",
      top: 0, left: 0,
      backgroundImage: `url(${image_list[imageIndex]})`, backgroundSize: "cover", backgroundPosition: "center",
      zIndex: -100000,
    }}>
      {arrows ? (
        <Box className="arrows" sx={{
          position: "absolute", top: "40%",
          display: "flex", justifyContent: "space-between",
          width: "100%",
        }}>
          <IconButton onClick={scrollPrev} color="text">
            <KeyboardArrowLeft fontSize="large"/>
          </IconButton>
          <IconButton onClick={scrollNext} color="text">
            <KeyboardArrowRight fontSize="large" />
          </IconButton>
        </Box>
      ) : null}
      <Box>
        <Box
          sx={{
            position:"absolute",
            bottom: "25px",
            width: "100%",
            display: "flex", justifyContent: "center", flexDirection: "row",
          }}
        >
          {arrows ? image_list.map((slidePath, index) => (
            <IconButton key={index} onClick={() => goToSlide(index)} p={2}>
              <Box sx={{
                cursor: "pointer",
                transform: "skew(40deg)",
                width: "60px", height: "3px",
                margin: "0",
                transition: "backgroundColor 300ms",
                bgcolor: slidePath === image_list[imageIndex] ? "accent.main" : "text.main",
              }}
              />
            </IconButton>
          )) : null}
        </Box>
      </Box>
    </Box>
  )}
