import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OffersPage from "./OffersPage";
import HomePage from "./HomePage";
import DeliveryPage from "./DeliveryPage";
import AboutUsPage from "./AboutUsPage";

import { Box } from "@mui/material";

import UseCheckMobileScreen from "./UseCheckMobileScreen";
import CustomBarPC from "./CustomBarPC";
import CustomBarMobile from "./CustomBarMobile";

const pages = [
  {
    title: "Главная",
  },
];

export default App = () => {
  const isMobile = UseCheckMobileScreen();

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

        <Box padding={4}>
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="offers" element={<OffersPage />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="about" element={<AboutUsPage />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};
