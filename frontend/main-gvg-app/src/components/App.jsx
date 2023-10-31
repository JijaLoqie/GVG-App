import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import HomePage from "./home/HomePage"
import DeliveryPage from "./delivery/DeliveryPage"
import AboutUsPage from "./about/AboutUsPage"

import { Box, ThemeProvider } from "@mui/material"

import BuildsPage from "./offers/BuildsPage/BuildsPage"
import ComponentsPage from "./offers/ComponentsPage/ComponentsPage"
import ConstructorPage from "./offers/ConstructorPage/ConstructorPage"
import CustomAppBar from "./navbars/CustomAppBar"
import FooterSection from "./home/FooterSection/FooterSection"
import useCheckCurrentTheme from "./common/hooks/useCheckCurrentTheme"

export default function App() {
  const currentTheme = useCheckCurrentTheme()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ThemeProvider theme={currentTheme}>
      <Box color="secondary.main">
        <CustomAppBar />
        <Box>
          <Routes>
            <Route element={<HomePage />} path="home" />
            <Route path="offers">
              <Route element={<BuildsPage />} path="builds" />
              <Route element={<ComponentsPage />} path="components" />
              <Route element={<ConstructorPage />} path="constructor" />
            </Route>
            <Route element={<DeliveryPage />} path="delivery" />
            <Route element={<AboutUsPage />} path="about" />
          </Routes>
        </Box>
        <FooterSection />
      </Box>
    </ThemeProvider>
  )
}
