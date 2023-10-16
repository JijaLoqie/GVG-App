import { useEffect, useState } from "react";
import {
  Circle as CircleIcon,
  CircleOutlined as CircleOutlinedIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: (theme) =>
    theme.transitions.create("background", {
      duration: theme.transitions.duration.standard,
    }),
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  position: "relative",
  top: "65vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};
const NEXT_SLIDE_TIMER = 5;

const ImageSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(NEXT_SLIDE_TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft === 0) {
        setTimeLeft(NEXT_SLIDE_TIMER);
        setCurrentIndex((index) => (index + 1) % items.length);
      } else {
        setTimeLeft((index) => index - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const goToPrevious = () => {
    setCurrentIndex((oldIndex) => {
      var newIndex = oldIndex - 1;
      if (newIndex < 0) {
        newIndex = items.length - 1;
      }
      return newIndex;
    });
    setTimeLeft(NEXT_SLIDE_TIMER);
  };
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
    setTimeLeft(NEXT_SLIDE_TIMER);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setTimeLeft(NEXT_SLIDE_TIMER);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${items[currentIndex].url})`,
  };

  return (
    <Box sx={sliderStyles}>
      <Box className="arrows">
        <Box onClick={goToPrevious} sx={leftArrowStyles}>
          <KeyboardArrowLeft />
        </Box>
        <Box onClick={goToNext} sx={rightArrowStyles}>
          <KeyboardArrowRight />
        </Box>
      </Box>
      <Box sx={slideStylesWidthBackground}>
        <Box sx={{ position: "absolute", bottom: "104px", left: "54px" }}>
          <Typography fontSize="1.5rem">{items[currentIndex].name}</Typography>
        </Box>
        <Box sx={dotsContainerStyles}>
          {items.map((slide, slideIndex) => (
            <Box
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              {currentIndex == slideIndex ? (
                <CircleIcon />
              ) : (
                <CircleOutlinedIcon />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
