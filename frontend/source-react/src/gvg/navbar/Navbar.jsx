
import { Box, AppBar } from "@mui/material"

import {
  Home as HomeIcon,
  Computer as ComputerIcon,
  DeliveryDining as DeliveryDiningIcon,
  Info as InfoIcon,
} from "@mui/icons-material"

import TopBar from "./TopBar.jsx"
import BottomBar from "./BottomBar.jsx"

import { useCheckMobileScreen } from "../common/hooks/useCheckMobileScreen.js"


const actions = [
  { title: "Главная", path: "/", icon: <HomeIcon />, },
  { title: "Услуги", path: "/offers", icon: <ComputerIcon />, },
  { title: "Доставка", path: "/order", icon: <DeliveryDiningIcon />, },
  { title: "О нас", path: "/about", icon: <InfoIcon />, },
]

const offerActions = [
  { title: "Сборки", path: "/offers/builds", },
  { title: "Комплектующие", path: "/offers/components", },
  { title: "Игровой конструктор", path: "/offers/constructor", },
]
export default function Navbar() {
  const isMobile = useCheckMobileScreen()

  return (
    <AppBar
      sx={{
        position: "sticky", top: 0, boxShadow: "0 0 2em black", padding: "10px 0", bgcolor: "background.main", maxHeight: "70px", justifyContent: "center",
        borderBottom: '5px solid', borderImageSlice: 1,
        borderImageSource: `linear-gradient(to left, ${['red', 'blue'].join(',')})`,
      }}
    >
      <Box sx={{ position: "relative", marginRight: "auto", marginLeft: "auto", paddingInline: "15px", width: "100%", }} >
        <TopBar actions={actions} offerActions={offerActions} />
        {isMobile ? (
          <BottomBar actions={actions} offerActions={offerActions} />
        ) : null}
      </Box>
    </AppBar>
  )
}
