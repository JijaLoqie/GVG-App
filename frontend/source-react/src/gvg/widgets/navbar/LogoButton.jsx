import { useEffect, useMemo, useState } from "react"
import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

import { translationInfo } from "../../common/hooks/useCheckTranslation"
import { Sensors } from "@mui/icons-material"

const logoIcon = 'icon.png'

const logoIconPath = `/static/logos/${logoIcon}`

export default function LogoButton() {
  const { enabled } = translationInfo
  const [logoText,] = useState("GVG")
  const [gradientDeg, setGradientDeg] = useState(45)

  const handleGoHome = () => {
    navigate("/")
  }
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientDeg(grad => (grad + 1) % 360)
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        onClick={handleGoHome}
        sx={{ cursor: "pointer", display: "flex", justifyContent: "start", alignItems: "end", paddingBottom: "5px", width: { xs: "20%", md: "15%" }, minWidth: "160px", background: `-webkit-linear-gradient(${gradientDeg}deg, #e32fb1 0%, #39afd8 100%)`, WebkitBackgroundClip: "text", color: "transparent", }}
      >
        <Box component="img"
          src={logoIconPath}
          sx={{ maxHeight: 81, maxWidth: 61, alignSelf: "end" }}
        />
        {
          [...logoText].map((ch, index) => (
            <Typography key={index} sx={{
              display: "inline-block",
              maxWidth: "100%",
              font: "1000 34px/34px 'Montserrat',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              cursor: "pointer",
              overflowY: "hidden",
              transition: "all .5s",
              "&:hover": { md: { color: "blue" }, },

            }}>
              {ch}
            </Typography>
          ))
        }
      </Box>
      {enabled ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{
            display: "flex", alignItems: "center", gap: "4px",
            bgcolor: "red", color: "white", height: "20px", borderRadius: "4px", padding: "6px",
          }}>
            <Sensors />
            <Typography variant="body2">Live</Typography>
          </Box>
        </Box>) : null
      }
    </Box>
  )
}
