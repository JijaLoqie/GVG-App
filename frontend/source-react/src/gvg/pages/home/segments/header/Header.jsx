import { Box } from "@mui/material";
import { ImageSlider } from "./ImageSlider";
import { HelloBlock } from "./HelloBlock";
import { useCheckTranslation } from "../../../../common/hooks/useCheckTranslation";
import { useCheckMobileScreen } from "../../../../common/hooks/useCheckMobileScreen";

export function Header() {
  const [translationEnabled,] = useCheckTranslation()

  return (
    <Box sx={{ position: "relative", width: "100%", height: {xs: "50vh",md:"95vh"} }}>
      <HelloBlock />
      <ImageSlider arrows={!translationEnabled} />
    </Box>
  )}
