import {
  Box,
  Grid,
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
      sx={{marginTop: "auto", bgcolor: "secondary.main", width: "100%", }}
    >
      <Grid columnGap={10} container rowGap={5} wrap="wrap"
        sx={{ alignContent: "center", justifyContent: "center", paddingTop: "10vh", }}
      >
        {items.map((item, index) => (
          <Grid item key={index}
            sx={{ display: "flex", justifyContent: "center", width: "300px", paddingInline: 0, }}
          >
            {item.component}
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{ position: "relative", width: "100%", textAlign: "center", padding: "10px", marginTop: "100px", }}
      >
        Copyright ©2023 "GVG Tech Solutions". All Rights Reserved
      </Box>
    </Box>
  )
}
