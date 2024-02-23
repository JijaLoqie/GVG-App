import {
  Box,
  Container,
  Grid,
  Stack,
} from "@mui/material"
import AboutGroup from "./groups/AboutGroup"
import HelpGroup from "./groups/HelpGroup"
import ShopGroup from "./groups/ShopGroup"
import ContactGroup from "./groups/ContactGroup"


export default function Footer() {
  return (
    <Box
      sx={(theme) => ({
        p: 3,
        bgcolor: "background.light",
        boxShadow: `0 0 80px 80px ${theme.palette.background.light}`,
        mt: 8
      })}
    >
      <Box
        sx={{
          px: { xs: 0, md: 8 },
          display: "flex",
          alignContent: "center", flexWrap: "wrap",
          gap: 4,
        }}
      >
        <AboutGroup sx={{ flex: { xs: 2, md: { xs: 2, md: 1 } } }} />
        <Box sx={{
          flex: { xs: 1, md: 2 }, display: "flex", gap: 2, alignItems: "start",
          justifyContent: { xs: "start", md: "space-around" }, flexWrap: "wrap", flexDirection: { xs: "column", md: "row" },
        }}>
          <HelpGroup />
          <ShopGroup />
        </Box>
        <ContactGroup sx={{ flex: 2 }} />
      </Box>
      <Box
        sx={{ position: "relative", width: "100%", textAlign: "center", p: { xs: 4, sm: 0 }, mt: 4 }}
      >
        Copyright ©2023 "GVG Tech Solutions". All Rights Reserved
      </Box>
    </Box >
  )
}
