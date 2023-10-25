import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./home/HomePage"
import DeliveryPage from "./delivery/DeliveryPage"
import AboutUsPage from "./about/AboutUsPage"

import { Box } from "@mui/material"

import BuildsPage from "./offers/BuildsPage"
import ComponentsPage from "./offers/ComponentsPage"
import ConstructorPage from "./offers/ConstructorPage"
import CustomAppBar from './navbars/CustomAppBar'

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "#ffffff",
          height: "100vh",
          width: 1,
        }}
      >
        <CustomAppBar/>
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
      </Box>
    </BrowserRouter>
  )
}
