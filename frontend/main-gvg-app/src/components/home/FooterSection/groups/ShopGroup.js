import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

export default ShopGroup = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
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
