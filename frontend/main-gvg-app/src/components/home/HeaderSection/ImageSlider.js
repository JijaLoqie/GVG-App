import { useEffect, useState } from "react";
import {
  Circle as CircleIcon,
  CircleOutlined as CircleOutlinedIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";




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
  top: "55vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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
        <Box sx={{ padding: 4 }}>{items[currentIndex].name}</Box>
        <Box sx={dotsContainerStyles}>
          {items.map((slide, slideIndex) => (
            <Box
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              {currentIndex == slideIndex ? <CircleIcon /> : <CircleOutlinedIcon />}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
