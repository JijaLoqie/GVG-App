import {
  Box,
  Grid,
  Stack,
} from "@mui/material"
import AboutGroup from "./groups/AboutGroup"
import HelpGroup from "./groups/HelpGroup"
import ShopGroup from "./groups/ShopGroup"
import ContactGroup from "./groups/ContactGroup"


const items = [
  {
    component: <AboutGroup />,
  },
  {
    component: <HelpGroup />,
  },
  {
    component: <ShopGroup />,
  },
  {
    component: <ContactGroup />,
  },
]







export default function Footer() {
  return (
    <Box
      sx={{
        p: 3,
        borderTop: '5px solid',
        borderImageSlice: 1,
        borderImageSource: `linear-gradient(to left, ${['red', 'blue'].join(',')})`,
        bgcolor: "background.main",
      }}
    >
      <Stack direction="row" spacing={3} rowGap={3}
        sx={{
          alignContent: "center", justifyContent: "center", flexWrap: "wrap"
        }}
      >
        {items.map((item, index) => (
          <Box key={index}
            sx={{ display: "flex", justifyContent: "center", width: "300px", paddingInline: 0, }}
          >
            {item.component}
          </Box>
        ))}
      </Stack>
      <Box
        sx={{ position: "relative", width: "100%", textAlign: "center", p: { xs: 4, md: 0 }, mt: 4 }}
      >
        Copyright ©2023 "GVG Tech Solutions". All Rights Reserved
      </Box>
    </Box>
  )
}
