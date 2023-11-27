import { Image } from "@mui/icons-material";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
import { useCheckMobileScreen } from "./hooks/useCheckMobileScreen"

const images = [
  "/static//builds/build1.jpg",
  "/static/builds/build2.jpg",
  "/static/builds/build3.jpg",
]

const FORCE_SHOW = true

export function CustomStuffSlider() {
  const [isShowList, setIsShowList] = useState(false)
  const isMobile = useCheckMobileScreen()

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
      <Box
        sx={{ position: "relative", width: "100%", height: "100%", backgroundImage: `url(${images[selectedIndex]})`, backgroundSize: "cover", backgroundPosition: "center", }}
        onMouseEnter={() => setIsShowList(true)}
        onMouseLeave={() => setIsShowList(false)}
      >
        {isShowList || isMobile || FORCE_SHOW ? ( <Box
            sx={{ position: "absolute", width: "100%", bottom: "10px", height: "110px", bgcolor: "#00000099", display: "flex",}}
          >
            <ImageList cols={5} gap={8}
              sx={{ marginInline: "12px", width: "100%", heigth: "100%", }}
            >
              {images.map((imageUrl, index) => (
                <ImageListItem key={index} onClick={() => {setSelectedIndex(index)}} sx={{"&:hover": {border: "1px solid white"}}}>
                  <img src={`${imageUrl}?auto=format&fit=crop`} srcSet={`${imageUrl}`} style={{height: "0", border: (index == selectedIndex) ? "2px solid white" : "none"}}/>
                </ImageListItem>
              ))}
            </ImageList>
          </Box> ) : null}
      </Box>
  )
}

