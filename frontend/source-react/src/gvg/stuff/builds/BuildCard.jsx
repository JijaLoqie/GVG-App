import { useEffect, useMemo, useState } from "react"
import { Box, Button, IconButton, Typography, keyframes } from "@mui/material"
import styled from "@emotion/styled"
import { SimpleSlider } from "./SimpleSlider"
import { ComponentTypeIcon, getComponentPartsList } from "../../common/loaders/IconsLoader"
import { customPalette } from "../../common/styles/themes"




export function BuildCard({ build }) {
  const components = useMemo(getComponentPartsList, [])

  const [isHovered, setIsHovered] = useState(false)

  const [currentSelected, setCurrentSelected] = useState(-1)

  const toggleComponentInfo = (index) => {
    setCurrentSelected((current) => (current === index ? -1 : index))
  }

  return (
    <Box onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      sx={{
        "--card-width": "calc(100% - 30px)", "--card-height": "500px",
        width: "var(--card-width)", minHeight: "var(--card-height)",
        display: "flex",
        bgcolor: "background.main",
        borderRadius: "12px",
        fontFamily: "cursive",
      }}
    >
      <Box sx={{ width: "40%", height: "100%",
        borderInline: "6px solid black",
      }}>
        <SimpleSlider items={build.build_images} scrollable={true} />
      </Box>
      <Box sx={{ width: "60%", height: "100%",
        display: "flex", flexDirection: "column", alignItems: "center",
        paddingInline: "12px",
      }}>
        <Typography variant="h4" sx={{
          textAlign: 'center',
          padding: "24px",
          borderBottom: `1px solid ${customPalette.text}`,
        }}>{build.title}</Typography>
        <Box sx={{
          height: '20%', width: "100%",
          display: "flex",
          margin: "24px",
          paddingTop: 0,
        }}>
          O lolololo lolo lo lolololo looo
        </Box>
        <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "start", alignItems: 'center', gap:"34px" }}>
          <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography color="accent.main">{build.price} ₽</Typography>
            {build.old_price !== undefined ? <Typography color="primary.main"><strike>{build.old_price} ₽</strike></Typography> : null}
          </Box>
          <Box sx={{ height: "100%", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center" }}>
            <Button variant="contained" color="primary"> Добавить в корзину </Button>
            <Button variant="outlined" color="accent"> Заказать в 1 клик </Button>
          </Box>
        </Box>
        <Box sx={{ height: "100%", width: "100%", display: "flex", alignItems: "end", paddingBottom: "24px",justifyContent: "space-between" }}>
          {components.map((component, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
              padding: "10px",
              borderRadius: "15px",
              transition: "all 300ms",
              "&:hover": {
                boxShadow: "0 0 8px white",
              }
            }}>
              <ComponentTypeIcon type={component.type} width="30px" height="30px" fill={customPalette.text} />
              <Typography>{component.rus_type}</Typography>
              <Typography color="accent.main">{build[component.type]}</Typography>
            </Box>
          ))}
        </Box>

      </Box>

    </Box>
  )
}
