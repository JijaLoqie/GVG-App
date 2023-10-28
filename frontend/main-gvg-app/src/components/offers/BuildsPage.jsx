import React, { useEffect, useState } from "react"
import { Box, Button, Typography, keyframes } from "@mui/material"
import styled from "@emotion/styled"

const gradientAnimation = keyframes({
  "0%": {
    backgroundPosition: "100% 0%",
  },
  "100%": {
    backgroundPosition: "-100% 0%",
  },
})

const CustomCard = styled("div")({
  "--card-height": "65vh",
  "--card-width": "calc(var(--card-height) / 1.5)",
  width: "var(--card-width)",
  height: "var(--card-height)",
  borderRadius: "8px",
  background: "linear-gradient(to right, blue, purple, blue)",
  backgroundSize: "200% 100%",
  animation: `${gradientAnimation} 5s linear infinite`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 4,
})
const CardContent = styled("div")({
  "--card-height": "calc(65vh - 10px)",
  "--card-width": "calc(var(--card-height) / 1.5 - 10px)",
  width: "var(--card-width)",
  height: "var(--card-height)",
  borderRadius: "8px",
  backgroundSize: "200% 100%",
  backgroundColor: "#191c29",
  display: "flex",
  alignItems: "space-between",
  flexDirection: "column",

  cursor: "pointer",
  fontFamily: "cursive",
})

export default function BuildsPage() {
  const [builds, setBuilds] = useState([])
  useEffect(() => {
    fetch("/api/get-builds")
      .then((response) => response.json())
      .then((data) => {
        setBuilds(data)
        data.forEach((element) => {
          console.log(element)
        })
      })
  }, [])

  return (
    <Box
      padding={4}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {builds.map((build, index) => (
        <CustomCard key={index}>
          <CardContent>
            <Typography
              fontSize="2em"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                color: `rgb(88, 199, 250)`,
                padding: 4,
                height: "10%",
              }}
            >
              {build.title}
            </Typography>
            <Box sx={{ width: "100%", height: "30%", backgroundColor: "blue" }}>
              Images
            </Box>
            <Box sx={{height: "50%",}}>Description</Box>
            <Button
              color="success"
              sx={{
                margin: "10px 70px",
              }}
              variant="contained"
            >
              В корзину
            </Button>
          </CardContent>
        </CustomCard>
      ))}
    </Box>
  )
}
