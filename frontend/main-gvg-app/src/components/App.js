import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OffersPage from "./offers/OffersPage";
import HomePage from "./home/HomePage";
import DeliveryPage from "./delivery/DeliveryPage";
import AboutUsPage from "./about/AboutUsPage";

import { Box } from "@mui/material";

import useCheckMobileScreen from './common/hooks/UseCheckMobileScreen';
import CustomBarPC from "./navbars/CustomBarPC";
import CustomBarMobile from "./navbars/CustomBarMobile";

import BuildsPage from './offers/BuildsPage';
import ComponentsPage from './offers/ComponentsPage';
import ConstructorPage from './offers/ConstructorPage';


export default App = () => {
  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    console.log(`mobile: ${isMobile}`);
  }, [isMobile]);

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
        {isMobile ? <CustomBarMobile /> : <CustomBarPC />}

        <Box>
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="offers">
              <Route path="builds" element={<BuildsPage />} />
              <Route path="components" element={<ComponentsPage />} />
              <Route path="constructor" element={<ConstructorPage />} />
            </Route>
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="about" element={<AboutUsPage />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};
