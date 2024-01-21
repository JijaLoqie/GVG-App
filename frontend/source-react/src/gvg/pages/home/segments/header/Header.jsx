import { Box } from "@mui/material";
import { ImageSlider } from "./ImageSlider";
import { HelloBlock } from "./HelloBlock";
import { translationInfo } from "../../../../common/hooks/useCheckTranslation";

export function Header() {
  const { enabled } = translationInfo

  return (
    <Box sx={{ position: "relative", width: "100%", height: { xs: "50vh", md: "95vh" } }}>
      <HelloBlock />
      <ImageSlider arrows={!enabled} />
    </Box>
  )
}
