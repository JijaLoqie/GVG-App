import React, { useCallback, useEffect, useMemo, useState } from "react"
import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const theme = {
  display: "inline-block",
  maxWidth: "100%",
  font: "1000 34px/34px 'Montserrat',sans-serif",
  letterSpacing: ".1em",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "all .5s",
  "&:hover": {
    md: { color: "blue" },
  },
}

export default function LogoButton() {
  const logoText = useMemo(() => "GVG", [])
  const [gradientDeg, setGradientDeg] = useState(45)
  const handleGoHome = useCallback(() => {
    navigate("/home")
  }, [])
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientDeg(grad => (grad + 1)%360)
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      onClick={handleGoHome}
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "start",
        alignItems: "end",
        paddingBottom: "5px",
        paddingInline: "15px",
        width: { xs: "20%", md: "15%" },
        minWidth: "160px",
        marginRight: "8px",

        background: `-webkit-linear-gradient(${gradientDeg}deg, #e32fb1 0%, #39afd8 100%)`,
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      <Box
        component="img"
        src="/static/logos/icon.png"
        sx={{
          maxHeight: 81,
          maxWidth: 61,
          alignSelf: "end",
        }}
      />
      {
        // eslint-disable-next-line react/no-array-index-key
        [...logoText].map((ch, index) => (
          <Typography key={index} sx={theme}>
            {ch}
          </Typography>
        ))
      }
    </Box>
  )
}