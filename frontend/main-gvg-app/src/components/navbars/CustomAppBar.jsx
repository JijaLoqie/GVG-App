/* eslint-disable react/forbid-component-props */

import useCheckMobileScreen from "../common/hooks/useCheckMobileScreen.js"
import React from "react"

import { Box, AppBar, ThemeProvider } from "@mui/material"

import {
  Home as HomeIcon,
  Computer as ComputerIcon,
  DeliveryDining as DeliveryDiningIcon,
  Info as InfoIcon,
} from "@mui/icons-material"

import TopBar from "./TopBar.jsx"
import BottomBar from "./BottomBar.jsx"
import useCheckCurrentTheme from '../common/hooks/useCheckCurrentTheme.js'

const actions = [
  {
    title: "Главная",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    title: "Услуги",
    path: "/offers",
    icon: <ComputerIcon />,
  },
  {
    title: "Доставка",
    path: "/delivery",
    icon: <DeliveryDiningIcon />,
  },
  {
    title: "О нас",
    path: "/about",
    icon: <InfoIcon />,
  },
]
const offersActions = [
  {
    title: "Сборки",
    path: "/offers/builds",
  },
  {
    title: "Комплектующие",
    path: "/offers/components",
  },
  {
    title: "Игровой конструктор",
    path: "/offers/constructor",
  },
]

export default function CustomAppBar() {

  const isMobile = useCheckMobileScreen()
  const currentTheme = useCheckCurrentTheme()


  return (
    <ThemeProvider theme={currentTheme}>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: "0 0 2em black",
          padding: "10px 0",
          bgcolor: "primary.main",
          maxHeight: "70px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            marginRight: "auto",
            marginLeft: "auto",
            paddingInline: "15px",
            width: "100%",
            // maxWidth: "1200px",
          }}
        >
          <TopBar
            actions={actions}
            offersActions={offersActions}
          />
          {isMobile ? (
            <BottomBar actions={actions} offersActions={offersActions} />
          ) : null}
        </Box>
      </AppBar>
    </ThemeProvider>
  )
}
