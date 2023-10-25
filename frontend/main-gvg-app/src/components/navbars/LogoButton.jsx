import React, { useCallback, useMemo } from "react"
import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const theme = {
  display: "inline-block",
  maxWidth: "100%",
  font: "1000 34px/34px 'Montserrat',sans-serif",
  letterSpacing: ".1em",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    md: { color: "#2222ff" },
  },
}

export default function LogoButton() {
	const logoText = useMemo(() => "GVG", [])
	const handleGoHome = useCallback(() => {
		navigate("/home")
	}, [])
  const navigate = useNavigate()
  return (
    <Box
      onClick={handleGoHome}
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "start",
        alignItems: "end",
        color: "secondary.main",
        paddingBottom: "5px",
        paddingInline: "15px",
        width: "15%",
        marginRight: "10%",
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
		[...logoText].map((ch, index) => <Typography key={index} sx={theme}>{ch}</Typography>)
	  }
    </Box>
  )
}
