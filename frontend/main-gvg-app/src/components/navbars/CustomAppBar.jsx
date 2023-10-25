/* eslint-disable react/forbid-component-props */

import useCheckMobileScreen from "../common/hooks/useCheckMobileScreen.js"
import React, { useEffect, useState } from "react"

import { Box, AppBar, createTheme, ThemeProvider, colors } from "@mui/material"

import {
  Home as HomeIcon,
  Computer as ComputerIcon,
  DeliveryDining as DeliveryDiningIcon,
  Info as InfoIcon,
} from "@mui/icons-material"

import TopBar from "./TopBar.jsx"
import BottomBar from "./BottomBar.jsx"

const darkTheme = createTheme({
  root: {
    "&$selected": {
      color: "red",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#0D0D0D",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 1,
          borderColor: colors.primaryGrayMid,
          borderStyle: "solid",
          borderRadius: 10,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          backgroundColor: colors.primaryGrayDark,
          color: "#C1C2C5",
          padding: 10,
        },
      },
    },
  },
})
const lightTheme = createTheme({
  palette: {
    root: {
      "&$selected": {
        main: "red",
        primary: "red",
      },
    },
    mode: "light",
    primary: {
      main: colors.grey[200],
    },
    secondary: {
      main: "#0D0D0D",
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 1,
          borderColor: colors.primaryGrayMid,
          borderStyle: "solid",
          borderRadius: 10,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          backgroundColor: colors.primaryGrayDark,
          color: "#C1C2C5",
          padding: 10,
        },
      },
    },
  },
})

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
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  const [darkMode, setDarkMode] = useState(true)

  const isMobile = useCheckMobileScreen()

  const handleThemeSwitch = () => {
    setDarkMode((was) => !was)
  }

  useEffect(() => {
    if (darkMode) {
      setCurrentTheme(darkTheme)
    } else {
      setCurrentTheme(lightTheme)
    }
  }, [darkMode])
  return (
    <ThemeProvider theme={currentTheme}>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: "0 0 2em black",
          padding: "23px 0",
          bgcolor: "primary.main",
          maxHeight: "90px",
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
            maxWidth: "1200px",
          }}
        >
          <TopBar
            actions={actions}
            offersActions={offersActions}
            themeOptions={{
              darkMode: darkMode,
              handleThemeSwitch: handleThemeSwitch,
              theme: currentTheme,
            }}
          />
          {isMobile ? (
            <BottomBar actions={actions} offersActions={offersActions} />
          ) : null}
        </Box>
      </AppBar>
    </ThemeProvider>
  )
}
