import { Image } from "@mui/icons-material";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
import { useCheckMobileScreen } from "./hooks/useCheckMobileScreen"


const FORCE_SHOW = false

export function CustomStuffSlider({ images }) {
  const [isShowList, setIsShowList] = useState(false)
  const isMobile = useCheckMobileScreen()

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%", height: "100%",
        backgroundImage: `url(${images[selectedIndex]?.path})`,
        backgroundSize: "contain", backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setIsShowList(true)}
      onMouseLeave={() => setIsShowList(false)}
    >
      {isShowList || isMobile || FORCE_SHOW ? (<Box
        sx={{ position: "absolute", width: "100%", bottom: "0", height: "30%", bgcolor: "#00000099", display: "flex", }}
      >
        <ImageList cols={5} gap={8}
          sx={{ marginInline: "12px", width: "100%", heigth: "100%", }}
        >
          {images.map((image, index) => (
            <ImageListItem key={index} onClick={() => { setSelectedIndex(index) }} sx={{ "&:hover": { border: "1px solid white" } }}>
              <img src={`${image.path}?auto=format&fit=crop`} style={{ height: "0", border: (index == selectedIndex) ? "2px solid white" : "none" }} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>) : null}
    </Box>
  )
}

