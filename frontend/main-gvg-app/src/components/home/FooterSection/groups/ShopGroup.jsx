import React from "react"
import {
  Box,
  Stack,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

export default function ShopGroup() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ paddingBottom: "10px" }} variant="h4">
        Магазин
      </Typography>
      <Stack direction="column">
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          Сборки
        </Typography>
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          Комплектующие
        </Typography>
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          Игровой конструктор
        </Typography>
      </Stack>
    </Box>
  )
}
