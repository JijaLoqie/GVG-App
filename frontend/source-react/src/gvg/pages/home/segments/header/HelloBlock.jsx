import { Box, Typography, alpha } from "@mui/material";
import { TranslationWidget } from "./TranslationWidget";
import { useCheckMobileScreen } from "../../../../common/hooks/useCheckMobileScreen";
import { translationInfo } from "../../../../common/hooks/useCheckTranslation";
import { SpecialBuildButton } from "../../../../features/buttons/SpecialBuildButton";

export function HelloBlock() {
  const { enabled, link } = translationInfo
  const isMobile = useCheckMobileScreen()

  return (
    <Box sx={{
      position: "absolute",
      display: "flex", flexDirection: "column", justifyContent: "center",

      width: enabled ? "100%" : { sx: "100%", md: "auto" },
      height: enabled ? "100%" : "auto",
      top: enabled ? "0" : { xs: 0, md: "25%" },
      left: enabled ? "0" : { xs: 0, md: "5%" },

      bgcolor: "#00000077", borderRadius: "24px",
    }}>
      {enabled ? <TranslationWidget link={link} /> : null}
      <Box sx={{
        display: "flex",
        flexDirection: enabled ? "row" : "column",
        maxHeight: "45%",
        padding: { xs: 1, md: 2 },
        margin: "12px",

      }}>
        {!isMobile || !enabled ? (
          <Box sx={{ maxWidth: "600px", textAlign: "center" }}>
            <Typography sx={{ fontSize: { xs: 30, md: 50 }, color: "text.main" }}>GVG Tech Solutions</Typography>
            <Typography sx={{ paddingBottom: "10px", color: "text.main" }}>
              Оставьте свои заявки сейчас, и наша команда приступит к работе над вашим идеальным компьютером.
            </Typography>
          </Box>) : null}
        <Box sx={{ pt: 2, flex: 1, display: "flex", justifyContent: { xs: "center", md: enabled ? "end" : "center" }, alignItems: "center" }}>
          <SpecialBuildButton />
        </Box>
      </Box>
    </Box>
  )
}
